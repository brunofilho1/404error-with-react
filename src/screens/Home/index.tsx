import React from 'react';
import '../../App.css';

function HomeScreen() {

    document.title = 'Ache uma página inexistente'

    return (
      <div className="App">
        <header className="App-header">
            <i className="fas fa-arrow-circle-up"></i>
          <p>
            Tente acessar alguma página aleatória. <br /> Ex: <code>localhost:3000/algumaCoisa</code>.
          </p>
        </header>
      </div>
    );
  }
  
  export default HomeScreen;