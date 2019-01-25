import React, { Component } from 'react';
import '../styles/style.css';

class New extends Component {
    constructor (props){
        super (props);

        this.state = {
            newIsbn: ""
        }

    }
    handleOnchangeInput(event) {
        this.setState(
            {newIsbn: event.target.value}); // aca pisamo el state con el nuevo value que obtenemos del input
    }

    saveInput (){
        fetch('http://localhost:8080/api/books', {
            method: 'POST',
            body: JSON.stringify({
                isbn: this.state.newIsbn
            }),
            headers:{
              'Content-Type': 'application/json' //informacion que le mandas a un servidor avisandole al servidor que el contenido que le estoy pasando es json.
            } 
        })
        .then(res => {
            this.props.history.push('/list') 
            //esta propiedad es basicamente el historial que tenemos en el navegador, 
            //la van a tener todos los componente que estan dentro de un router
        })

        
    }


  render() {
    return (        
        <div>
            <h1>Nuevo ISBN</h1>
            <div className="form">
                <input  id="input-isbn"  type="number" placeholder="Ingrese el ISBN" 
                value={this.state.value} onChange={(event) => this.handleOnchangeInput(event)}></input>
                <button id="btn-save" onClick={(event) => this.saveInput(event)}>Guardar</button>
            </div> 
        </div>
    );
  }
}

export default New