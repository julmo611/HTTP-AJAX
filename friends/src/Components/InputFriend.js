import React from 'react';

class InputFriend extends React.Component {
  
    state = {
        name: '',
        age: '',
        email: ''
    };

    
    
    handleSubmit = e => {
        
        e.preventDefault();
        
        this.props.addFriend (
            this.state.name,
            this.state.age,
            this.state.email
            );            
            this.setState({
                name: '',
                age: '',
                email: ''
            })
        }
        
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
        
  render() {
      return (
        <>
            <form onSubmit={this.handleSubmit}>
            <label>Name:
               <input 
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                /> 
            </label>
            <label>age:
               <input 
                type="number"
                name="age"
                onChange={this.handleChange}
                value={this.state.age}
                /> 
            </label>
            <label>Email:
               <input 
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                /> 
            </label>

            <button type="submit">Add new friend</button>
            </form>
        </>
        )
    }
};

export default InputFriend;