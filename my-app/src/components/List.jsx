import React, { Component } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom'

class List extends Component {
    constructor (props) {
        super(props);

        this.state = {
            libros: []
        }
    }

    componentDidMount (){
        fetch('http://localhost:8080/api/books')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    libros: data 
                })
            })
    }

    seeDetailsButton (){
        this.props.history.push('/details')
    }

  render() {
      const lis = this.state.libros.map(l => <li>{l.isbn} <Link to={`/details/${l.isbn}`}> 
      <button className="btn-details">Ver Detalle</button></Link></li>)
    return (
        <div>
            <h1>ISBNs</h1>
            <Link to='/new'>Nuevo ISBN</Link>
            <div className="ul-container">
                <ul className="book-list">
                {lis} 
                </ul>
            </div>
        </div>
    );
  }
}

export default List