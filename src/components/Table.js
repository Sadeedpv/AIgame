import React from 'react';
import './Table.css';
import {Link} from 'react-router-dom'

function Table() {
  return (
    <>
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}><button><Link to='/'>Go back</Link></button></div>
    <table>
        <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
        </tbody>
    </table>
    </>
  )
}

export default Table