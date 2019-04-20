import React from 'react';

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    componentDidMount() {
        if(this.props.forUpdate){
            this.setState({
                name: this.props.smurf.name,
                age: this.props.smurf.age,
                height: this.props.smurf.height
            })
        }
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
        this.props.toggleAdding();
    }

    updateSmurf = (e) => {
        e.preventDefault();
        let newSmurf = {
            ...this.state,
            id: this.props.smurf.id
        }
        this.props.updateSmurf(newSmurf);
        this.props.toggleUpdate();
    }

    deleteSmurf = () => {
        this.props.deleteSmurf(this.props.smurf)
        this.props.toggleUpdate();
    }

    render() {
        return (
            <form onSubmit={this.props.forUpdate ? this.updateSmurf : this.addSmurf}>
                <input name='name' placeholder='name' onChange={this.handleChange}
                    value={this.state.name} />
                <input name='age' placeholder='age' onChange={this.handleChange}
                    value={this.state.age} />
                <input name='height' placeholder='height' onChange={this.handleChange}
                    value={this.state.height} />
                {this.props.forUpdate ? 
                <div>
                <button type='submit'>Update Smurf</button>
                <button onClick={this.deleteSmurf}>Smurf it!</button>
                </div>
                :
                <button type='submit'>Add Smurf</button>
                }
            </form>
        );
    }
}

export default AddSmurfForm; 