import React from 'react';
import {FaCopyright} from 'react-icons/fa';

function Footer() {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        opacity:'80%',
        whiteSpace:'nowrap',
        padding:'10px',
        position:'fixed',
        bottom:'0',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }}>
        2022 all rights reserved <FaCopyright size={25} style={{
            padding:'5px'
        }}/>
    </div>
  )
}

export default Footer