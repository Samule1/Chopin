import React, { Component } from 'react';
import './../App.css';
import * as d3 from 'd3'
import './../plotstyle/circle.css'
import { connect } from 'react-redux';
import { fetchKmeans } from '../actions/graphActions';
import PropTypes from 'prop-types';
import store from '../store'


class Circle extends Component {

    constructor(props){
         super(props)

         this.state = {data: require("../data/cluster_format_template.json")}

         store.subscribe(() => {
            let data = store.getState().graph.dataItems;
            if (data) {
                this.setState({data: data})
            }
         });
    }

    draw(g, pack, colors, format, cleanfirst){

        if(cleanfirst){
            console.log("I am going to paint the world blue!")
            let rm = this.svg.selectAll('.node')
            rm.remove()
            console.log(rm)
        }
        
        
        let root = this.state.data

        root = d3.hierarchy({children: root})
                 .sum((d) => { return d.size;})
                 .sort((a, b) => { return b.value - a.value; });

        let node = g.selectAll(".node")
                    .data(pack(root).leaves())
                    .enter().append("g")
                    .attr("class", "node")
                    .attr("transform", d => { return "translate(" + d.x + "," + d.y + ")"; })
                    .style("fill", d => colors(d.data.cluster) );

        node.append("title")
            .text(d => { return d.data.name + "\n" + format(d.value); });

        node.append("circle")
            .attr("r", d => { return d.r; });

        node.filter(d => !d.children).append("text")
            .attr("dy", "0.3em")
            .text(d => { return d.data.name.substring(0, d.r / 3); })
            .style("fill", "black");

        node.on('mouseover ', (d)=>{
            console.log(d.data.name)
        })

        console.log(this.state)
    }
    
    componentDidUpdate(){
        this.draw(this.g, this.pack, this.colors, this.format, true)
    }

    componentWillMount() {
        console.log('fetchKmeans()');
        this.props.fetchKmeans();
    }

    componentDidMount(){
        
        this.svg = d3.select(this.refs.anchor);
        this.diameter = 960//svg.attr("width");
        this.g = this.svg.append("g").attr("transform", "translate(2,2)");
        this.format = d3.format(",d");
        this.pack = d3.pack().size([this.diameter - 4, this.diameter - 4]);
        
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        
        this.draw(this.g, this.pack, this.colors, this.format, false)

        
    }
    render() {
        return <g ref ="anchor" />;
    }
}

Circle.propTypes = {
    fetchKmeans: PropTypes.func.isRequired,
    dataItems: PropTypes.array
}

const mapStateToProps = state => {
    // This comes from our root reducer
    return {
        graph: state.graph.dataItems
    }
}

export default connect(mapStateToProps, { fetchKmeans } )(Circle);
