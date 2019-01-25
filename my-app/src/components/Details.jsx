import React, { Component } from 'react';
import '../styles/style.css';

class Details extends Component {
  constructor (props){
    super (props);
    this.state = {
      theBook: {
        
      },
      showThedata: false
    }    
  }

  componentDidMount (){
    fetch('http://localhost:8080/api/books/detail/' + this.props.match.params.isbn) 
      .then(res => res.json())
      .then(data => {
          this.setState({
              theBook: {
                cover: data.cover,
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
                authors: data.authors
              },
              showThedata: true

          })
      })
  }


  seeMyHomePage(){
    this.props.history.push('/list')
}

  render() {
    /*if(this.state.loading) {
      return <p> Cargando... </p>
    }*/
    
    return (        
        <div>
            <h1>Detalles del Libro</h1>
            {this.state.showThedata && <div id="book-container">                
                <div class="image-container">
                  <img src={this.state.theBook.cover}/>
                </div>
                <div class="title-subtitle">
                  <h1>{this.state.theBook.title}</h1>s
                </div>
                <small>{this.state.theBook.subtitle}</small>
                <p>{this.state.theBook.description}</p>
                <ul>{this.state.theBook.authors.map((author) => <li>{author}</li>)}</ul> 
                <button onClick={(event) => this.seeMyHomePage(event)}  class="back-btn">Regresar</button>
            </div>}
            
        </div>
    );
  }
}

export default Details