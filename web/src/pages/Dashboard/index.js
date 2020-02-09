import React, { useEffect, useState, Component } from 'react';

import Navbar from '../../components/NavBar';
import '../../global.css';

import DevItem from '../../components/DevItem';
import DevForm from '../../components/DevForm';
import api from '../../services/api';
// import { MemoryRouter, Switch, Route } from 'react-router-dom';

export default class Dashboard extends Component {

  async componentDidMount() {

    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.Dashboard);

    const getGamers = await api.get(`/gamers`);
    const addGamers = await api.post(`/gamers`);
    const showGamer = await api.get('/gamers/:id');
    const updateGamer = await api.put('/gamers/:id');
    const deleteGamer = await api.delete('/gamers/:id');
    const searchGamers = await api.get('/search');

    console.log(getGamers);
  }



  render() {

    return (
      <body>
        <header>
          <Navbar></Navbar>
        </header>

        <section id="home">
          {/* <DevForm onSubmit={addGamers} />

      <ul>
        {devs.map(dev => (
          <DevItem key={dev._id} dev={dev} />
        ))}
      </ul> */}
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
      </body>);
  }

}
