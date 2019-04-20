import React from 'react';
import AddSmurfForm from './components/addSmurfForm';

class Smurf extends React.Component {
    state = {
        isUpdating: false
    }

    makeUpdate = () => {
        this.setState({isUpdating: !this.state.isUpdating})
    }

    render() {
        return(
            <div>
               {this.state.isUpdating ? 
                    <AddSmurfForm forUpdate 
                    smurf={this.props.smurf} 
                    updateSmurf={this.props.updateSmurf}
                    deleteSmurf={this.props.deleteSmurf}
                    toggleUpdate={this.makeUpdate} />
                :
                    <div className='smurfBlock'>
                    <h3>Smurf: {this.props.smurf.name}</h3>
                    <p>Age: {this.props.smurf.age}</p>
                    <p>Height: {this.props.smurf.height}</p>
                    <button onClick={this.makeUpdate}>Fixit or Smurfit</button>
                    </div>
                }
            </div>
        )
    }
}

export default Smurf;