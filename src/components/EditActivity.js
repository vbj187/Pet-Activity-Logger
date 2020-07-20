import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Exercises extends Component {

    constructor(props) {
        super(props);

        this.onChangePetname = this.onChangePetname.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            petname: '',
            activity: '',
            duration: 0,
            date: new Date(),
            pets: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/activities/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    petname: response.data.petname,
                    activity: response.data.activity,
                    duration: response.data.duration,
                    date: new Date(response.data.date)
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost:5000/pets/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        pets: response.data.map(pet => pet.petname),
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    onChangePetname(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeActivity(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const activity = {
            petname: this.state.petname,
            activity: this.state.activity,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(activity);

        axios.post(`http://localhost:5000/activities/update/${this.props.match.params.id}`, activity)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div className='container'>
                <h3>Edit Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Petname: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.petname}
                            onChange={this.onChangePetname}>
                            {
                                this.state.pets.map(function (pet) {
                                    return <option
                                        key={pet}
                                        value={pet}>{pet}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Activity: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.activity}
                            onChange={this.onChangeActivity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
