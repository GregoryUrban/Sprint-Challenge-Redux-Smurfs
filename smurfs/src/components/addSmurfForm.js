import React from 'react';

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addSmurf = (e) => {
        e.preventDefault();
        const newSmurf = this.state;
        this.props.addSmurf(newSmurf);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.addSmurf}>
                <input name='name' onChange={this.handleChange}
                    value={this.state.name} />
                <input name='age' onChange={this.handleChange}
                    value={this.state.age} />
                <input name='height' onChange={this.handleChange}
                    value={this.state.height} />
                <button type='submit'>Add Smurf</button>
            </form>
        );
    }
}

export default AddSmurfForm; 