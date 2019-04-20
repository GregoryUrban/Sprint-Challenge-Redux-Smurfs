import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf, deleteSmurf  } from '../actions';
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

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <AddSmurfForm addSmurf={this.props.addSmurf}/>
        
        {this.props.smurfs.map(smurf => <Smurf smurf={smurf} deleteSmurf={this.props.deleteSmurf} />)}
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
    deleteSmurf
  }
)(App);

