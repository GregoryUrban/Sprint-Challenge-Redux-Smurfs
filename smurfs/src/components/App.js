import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import { connect } from 'react-redux';
import AddSmurfForm from '../components/addSmurfForm';
import Smurf from '../smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    addingSmurf: false
  }

  componentDidMount() {
    this.props.getSmurfs();
  }
  toggleAdding = () => {
    this.setState({addingSmurf: !this.state.addingSmurf})
  }
  render() {
    return (
      <div className="App">
        <button className='btnUpdate' onClick={this.toggleAdding}>Make more Smurf's</button>
        
        {this.props.smurfs.map(smurf => 
        <Smurf smurf={smurf} 
          deleteSmurf={this.props.deleteSmurf} 
          updateSmurf={this.props.updateSmurf} />)}

        {this.state.addingSmurf ? 
        <AddSmurfForm addSmurf={this.props.addSmurf} toggleAdding={this.toggleAdding}/>
        :
        <button className='btnUpdate' onClick={this.toggleAdding}>Make more Smurf's</button>
        }
      </div>
    );
  }
}
// export default App;

function mapStateToProps(state) {
  console.log(state);
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}


export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addSmurf,
    deleteSmurf,
    updateSmurf
  }
)(App);

