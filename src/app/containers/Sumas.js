import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as NumActions from '../actions/numeros';

class Sumas extends Component {

  handleClick = () => {
    this.props.actions.incrementar();
  }

  otroClick = () => {
    this.props.actions.decrementar();
  }

  handleAddCadena = (cadena) => {
    this.props.actions.addCadena(cadena);
  }

  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <h1>Sumas</h1>
        <h3>{this.props.numeros.num}</h3>
        <button onClick={this.handleClick}>Incremeta</button>
        <button onClick={this.otroClick}>Decrementa</button>
        <div>
          <p>Escribe algo</p>
          <input 
            type="text" 
            onChange={(event) => this.handleAddCadena(event.target.value)}
          />
          <span>{this.props.numeros.cadena}</span>
        </div>
      </div>
    );
  }
}

Sumas.propTypes = {
  numeros: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    numeros: state.numeros
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NumActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sumas);
