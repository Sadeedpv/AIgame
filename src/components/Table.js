import React, { useEffect } from 'react';
import './Table.css';
import {Link} from 'react-router-dom'

function Table() {

    const [winner, setwinner] = React.useState('No winner');
    const [undo, setundo] = React.useState(null);

    const [board, setboard] = React.useState({
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': ''
    })

    const [turn, setturn] = React.useState('X');

    function handleEvent(e){
        if (board[e] === '' && winner === 'No winner'){
            setundo(e);
            setboard(prevstate => ({...prevstate, [e]: turn}))
            turn === 'O'? setturn('X'):setturn('O');
            
        }
    }

    // Check for winners

    React.useEffect(() =>{
        if (board['0'] === board['1'] && board['1'] === board['2'] && board['2'] !== ''){
            setwinner(board['0'])
        }
        else if(board['3'] === board['4'] && board['4'] === board['5'] && board['5'] !== ''){
            setwinner(board['3'])
        }
        else if(board['6'] === board['7'] && board['7'] === board['8'] && board['8'] !== ''){
            setwinner(board['6'])
        }
        else if(board['0'] === board['3'] && board['3'] === board['6'] && board['6'] !== ''){
            setwinner(board['0'])
        }
        else if(board['1'] === board['4'] && board['4'] === board['7'] && board['7'] !== ''){
            setwinner(board['1'])
        }
        else if(board['2'] === board['5'] && board['5'] === board['8'] && board['8'] !== ''){
            setwinner(board['2'])
        }
        else if(board['0'] === board['4'] && board['4'] === board['8'] && board['8'] !== ''){
            setwinner(board['0'])
        }
        else if(board['2'] === board['4'] && board['4'] === board['6'] && board['6'] !== ''){
            setwinner(board['2'])
        }
    }, [board])

    

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',        
        alignItems:'center',
        justifyContent:'center'
    }}>

    <div style={{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:'-16px'
    }}>
        <button><Link to='/'>Go back</Link></button>
        <button 
        style={{
            color:'red'
        }}
        onClick={() =>{
            setwinner('No winner');
            setboard({
                '0': '',
                '1': '',
                '2': '',
                '3': '',
                '4': '',
                '5': '',
                '6': '',
                '7': '',
                '8': ''
            });
            setturn('X');
            setundo(null);
        }}>Reset</button>
        <button 
        style={{
            color:'red'
        }}
        onClick={() =>{
            if (undo !== null && board[undo] !== ''){
                setwinner('No winner');
                setturn(board[undo])
                setboard(prevstate => ({...prevstate, [undo]: ''}))
            }

        }}>Undo</button>
    </div>

    <div style={{
        fontSize:'25px',
        padding:'3px',
        fontWeight:'650'
    }}>{turn} turn!</div>
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'25px',
        color:'green'
    }}>{ winner && winner != 'No winner' ? (`${winner} won!`):'No one won!'}

    
    </div>

    <table>
        <tbody>
        <tr>
            <td onClick={() =>{
                handleEvent(0);
            }}> {board['0']} </td>
            <td onClick={() =>{
                handleEvent(1)
            }}> { board['1']} </td>
            <td onClick={() =>{
                handleEvent(2)
            }}> {board['2']} </td>
        </tr>
        <tr>
            <td onClick={() =>{
                handleEvent(3)
            }}> {board['3']} </td>
            <td onClick={() =>{
                handleEvent(4)
            }}> {board['4']} </td>
            <td onClick={() =>{
                handleEvent(5)
            }}> {board['5']} </td>
        </tr>
        <tr>
            <td onClick={() =>{
                handleEvent(6)
            }}> {board['6']} </td>
            <td onClick={() =>{
                handleEvent(7)
            }}> {board['7']} </td>
            <td onClick={() =>{
                handleEvent(8)
            }}> {board['8']} </td>
        </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Table