import React, { Component } from "react";

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
    render() {
        return (
            <div className="container valign-wrapper center-align ">
                <div class="row center-align">
                    <h6>Here's a picture of a cutie on each refresh!</h6>
                    <img src={this.state.url} alt=""
                        style={{
                            width: 400,
                            height: 300
                        }}
                        className="" />
                </div>
            </div>
        );
    }
}

export default Details;
