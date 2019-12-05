import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            breedName: this.props.match.params.breedName
        }
    }
    componentDidMount() {
        this.state.breedName = this.props.match.params.breedName;
        this.getDogImage()
    }
    getDogImage() {
        // console.log(this.state.breedName);  

        fetch("https://dog.ceo/api/breed/" + this.state.breedName + "/images/random")
            .then(response => response.json())
            .then(data => this.setState({ url: data.message }));
        console.log(this.state.url)
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    render() {
        
        const { user } = this.props.auth;
        return (
            <div className="container-fluid">
                <div className="nav-wrapper white">
                    <Link
                        to="/"
                        style={{
                            fontFamily: "monospace",
                            fontSize: 28,
                            paddingLeft: 10
                        }}
                        className="col s5 brand-logo black-text"
                    >
                        Woof Woof!
      </Link>
                    <div class="float-right">
                        <button
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                margin: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Logout
            </button>
                    </div>
                </div>
                <div className="container center-align">
                    <br />
                    <div class="row">
                        <div class="col float-left">
                            <Link to="/dashboard" className="btn-flat waves-effect">
                                <i className="material-icons left">keyboard_backspace</i> Back to
                                home
                    </Link>
                        </div>
                        </div>
                        <div class="col">
                            <h6 style={{ fontFamily: "monospace" }}>Here's a picture of a cutie on each refresh!</h6>
                            <img src={this.state.url} alt=""
                                style={{
                                    width: 300,
                                    height: 300
                                }}
                                className="img-responsive fix-image" />
                            <div class="card-body">
                                <h6 class="card-title" style={{ fontFamily: "monospace" }}>Dog breed: {this.state.breedName}</h6>
                            </div>
                        </div>
                    </div>
                </div>
          
        );
    }
}
Details.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Details);


