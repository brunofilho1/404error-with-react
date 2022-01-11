import React from 'react';
import '../../App.css';

function HomeScreen() {

  document.title = 'Achouuuu :)'

    return (
      <div className="App">
        <header className="App-header">
          <i className="far fa-frown"></i>
          <p>
            Ops, nada encontrado!
          </p>
          <code>Volte para a página inicial clicando aqui</code>
          <a href="/">Página Inicial</a>
        </header>
      </div>
    );
  }
  
  export default HomeScreen;