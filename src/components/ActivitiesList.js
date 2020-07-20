import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.petname}</td>
        <td>{props.exercise.activities}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>{props.exercise.date.substring(12, 19)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteActivities(props.exercise._id); }}>delete</a>
        </td>
    </tr>
);

export default class Exercises extends Component {

    constructor(props) {
        super(props);

        this.deleteActivities = this.deleteActivities.bind(this);

        this.state = { activities: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/activities/')
            .then(response => {
                this.setState({ activities: response.data });
            })
            .catch(
                error => console.log(error)
            );
    }

    deleteActivities(id) {
        axios.delete(`http://localhost:5000/activities/${id}`)
            .then(res => console.log(res.data));

        this.setState({
            activities: this.state.activities.filter(el => el._id !== id)
        });
    }

    activityList() {
        return this.state.activities.map(currentactivity => {
            return <Exercise exercise={currentactivity} deleteActivities={this.deleteActivities} key={currentactivity._id} />;
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Logged Activity</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Pet Name</th>
                            <th>Activity</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.activityList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
