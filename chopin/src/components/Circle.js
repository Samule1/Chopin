import React, { Component } from 'react';
import './../App.css';
import ReactDOM from 'react-dom';
import * as d3 from 'd3'
import './../plotstyle/circle.css'


class Circle extends Component {

    componentDidMount(){
        
        console.log('FIRE1')
        const svg = d3.select(this.refs.anchor);
        let diameter = 960//svg.attr("width");
        let g = svg.append("g").attr("transform", "translate(2,2)");
        let format = d3.format(",d");
        let pack = d3.pack().size([diameter - 4, diameter - 4]);
        let root = require("../data/flare.json");
        
        console.log('FIRE3')
        
        console.log(g)
        root = d3.hierarchy(root)
                        .sum((d) => { return d.size;})
                        .sort((a, b) => { return b.value - a.value; });
        console.log(root)
        let node = g.selectAll(".node")
                    .data(pack(root).descendants())
                    .enter().append("g")
                    .attr("class", d => { return d.children ? "node" : "leaf node"; })
                    .attr("transform", d => { return "translate(" + d.x + "," + d.y + ")"; })
        
        node.append("title")
            .text(d => { return d.data.name + "\n" + format(d.value); });
        
        node.append("circle")
            .attr("r", d => { return d.r; });
        
        node.filter(d => !d.children).append("text")
            .attr("dy", "0.3em")
            .text(d => { return d.data.name.substring(0, d.r / 3); });
        
    }
    render() {
        console.log("render()");
        return <g ref ="anchor" />;
    }
}

export default Circle;
