import React, { useEffect, useState } from 'react';
// import api from './services/api';

// import DevItem from './components/DevItem';
// import DevForm from './components/DevForm';

import Routes from './routes';

function App() {
  // const [devs, setDevs] = useState([]);
  // useEffect(() => {
  //   async function loadDevs() {
  //     const response = await api.get('/devs');  

  //     setDevs(response.data);
  //   }

  //   loadDevs();
  // },[]);

  // async function handleAddDev(data) {
  //   const response = await api.post('/devs', data);

  //   setDevs([...devs, response.data]); 
  // }


  return <Routes/>;
}

export default App;