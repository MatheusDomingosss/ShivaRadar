import React from 'react';

import './styles.css';

function DevItem({ gamers }){
  return (
    <li className="dev-item">
      <header>
        {/* <img src={dev.avatar_url} alt={dev.name}/> */}
        <div className="user-info">
          <strong>{gamers.name}</strong>
          <span>{gamers.techs.join(', ')}</span>
        </div>
      </header>
    </li> 
  );
}

export default DevItem;