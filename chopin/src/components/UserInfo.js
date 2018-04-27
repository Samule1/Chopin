import React, { Component } from 'react'
import { fetchUserInfo } from '../actions/profileActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserInfo extends Component {

    componentWillMount() {
        this.props.fetchUserInfo();
    }
    
    render() {

        return (
            <div className="jumbotron"> 
                <div className="row justify-content-md-center">
                    <form>
                        <div className="form-group">
                            <label>Spofify username</label>
                            <input type="text" className="form-control" placeholder={this.props.profile.name} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Spotify email</label>
                            <input type="text" className="form-control" placeholder={this.props.profile.id}readOnly />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

UserInfo.propTypes = {
    fetchUserInfo: PropTypes.func.isRequired,
    userData: PropTypes.object
}

const mapStateToProps = state => ({
    // This comes from our root reducer
    profile: state.profile.userData
});

export default connect(mapStateToProps, { fetchUserInfo } )(UserInfo);
