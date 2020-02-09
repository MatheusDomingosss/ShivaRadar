import React from 'react';
import Navbar from '../../components/NavBar';


// import { Container } from './styles';

export default function Contato() {
  return (
    <body>
      <header>
        <Navbar></Navbar>
        {/* <DevForm onSubmit={handleAddDev}/>   */}
      </header>

      <section id="home">
        
      <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Fácil de usar</h4>
          <p>
            O Finans vai além do básico e permite que você faça controles incriveis, essenciais para suas finanças.
            Simples como tem que ser!
          </p>
        </div>
        <div class="col-md-4">
          <h4>Economize seu tempo</h4>
          <p>
            Tempo é dinheiro! Em segundos, você tem tudo sob controle e aproveite seu tempo com o que realmente importa
            pra você!
          </p>
        </div>
        <div class="col-md-4">
          <h4>Suporte de amigos</h4>
          <p>
            Dúvidas? Pergurntas? Nosso suporte super legal ajuda você! A gente tá aqui para resolver seus problemas e
            deixar sua vida bem mais fácil!
          </p>
        </div>
      </div>
    </div>

      </section>

      <footer class="mt-4 mb-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 d-flex justify-content-end">
              <a href="" class="btn btn-outline-dark ml-2">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="" class="btn btn-outline-dark ml-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="btn btn-outline-dark ml-2">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="btn btn-outline-dark ml-2">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </body>

  );
}
