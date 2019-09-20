import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        console.log(this.state)
       
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    register = (e) => {
        e.preventDefault();
        axios.post(`https://vacation-planner-bw.herokuapp.com/api/users/register`, this.state)
        .then(response => {
            console.log(response)
           this.props.history.push('/login') 
        })
        .catch(error => {
            console.log(error)
        })
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
    


    render() {
        console.log(this.state.username)
        console.log(this.state.password)
        return (
            <div>
                <form onSubmit={this.register}>
                    <input 
                    onChange={this.changeHandler}
                    placeholder='username'
                    value={this.state.username}
                    name='username'
                    />
                    <input 
                    onChange={this.changeHandler}
                    placeholder='password'
                    value={this.state.password}
                    name='password'
                    />
                <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}