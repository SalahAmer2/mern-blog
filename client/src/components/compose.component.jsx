import React from 'react';
import axios from "axios";

class Compose extends React.Component {
    state = {
        postTitle: '',
        postBody: ''
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.postTitle,
            body: this.state.postBody
        }

        axios({
            url: 'http://localhost:8080/api/compose',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to the server');
        })
        .catch(() => {
            console.log('Internal server error');
        });
    }

    render() {

        console.log('State: ', this.state);

        return(
            <div className="container">
                <h1>Compose</h1>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="postTitle" value={this.state.title} onChange={this.handleChange} />
                        <label>Post</label>
                        <textarea className="form-control" name="postBody" rows="5" cols="30" value={this.state.post} onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" name="button">Publish</button>
                </form>
            </div>
        )
    }
}

export default Compose;