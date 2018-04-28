import React, { Component } from 'react'
import store from '../store'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchForUsers } from '../actions/searchActions';

let centerStyle = {
    width: '100%',
    textAlign: 'center'
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.searchInput = this.searchInput.bind(this);
    }

    searchInput(query) {
        this.props.searchForUsers(query);
    }

    
    render() {
        return (
            <div style = {centerStyle}>
                <AsyncTypeahead onSearch={this.searchInput} options={this.props.search} labelKey="spotifyId" isLoading={this.props.loading} placeholder="Find a musical friend..."/>
            </div>
        )
    }
}

Search.propTypes = {
    searchForUsers: PropTypes.func.isRequired,
    foundUsers: PropTypes.array,
    isLoading: PropTypes.bool
}

const mapStateToProps = state => ({
    // This comes from our root reducer
    search: state.search.foundUsers,
    loading: state.search.isLoading
});

export default connect(mapStateToProps, { searchForUsers } )(Search);