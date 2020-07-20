import React, { Component } from 'react';
import axios from 'axios';

export default class Exercises extends Component {

    constructor(props) {
        super(props);

        this.onChangePetname = this.onChangePetname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            petname: ''
        };



    }

    onChangePetname(e) {
        this.setState({
            petname: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const pet = {
            petname: this.state.petname
        };

        console.log(pet);

        axios.post('http://localhost:5000/pets/add', pet)
            .then(res => console.log(res.data));

        this.setState({
            petname: ''
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Add Pet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Pet name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.petname}
                            onChange={this.onChangePetname}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Pet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

