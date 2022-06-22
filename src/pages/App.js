import React from 'react';
import {FaGithub} from 'react-icons/fa';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{
        display:'grid',
        placeItems:'center',
        minHeight:'90vh'
    }}>
        <div style={{
            display:'flex',
            flexDirection:'column',
        }}>
        <button><Link to='/Computer'>vs Computer</Link></button>
        <button><Link to='/Multiplayer'> 1 vs 1</Link></button>
        <button><a href='https://github.com/Sadeedpv'>Github <FaGithub size={25} /></a></button>
        </div>
    </div>
  )
}

export default App