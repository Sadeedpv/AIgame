import React from 'react'
import './Table.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Aigame() {
    
    const [winner, setwinner] = React.useState('No winner');
    const [undo, setundo] = React.useState(null);
    const [turn, setturn] = React.useState('X');

    const [board, setboard] = React.useState({
        '0': '-',
        '1': '-',
        '2': '-',
        '3': '-',
        '4': '-',
        '5': '-',
        '6': '-',
        '7': '-',
        '8': '-'
    })


    function handleEvent(e){
        if (board[e] === '-' && winner === 'No winner' && turn === 'O'){
            setundo(e);
            setboard(prevstate => ({...prevstate, [e]: 'O'}))
            setturn('X');
            
        }
    }

    // Check for winners

    React.useEffect(() =>{
        if (board['0'] === board['1'] && board['1'] === board['2'] && board['2'] !== '-'){
            setwinner(board['0'])
        }
        else if(board['3'] === board['4'] && board['4'] === board['5'] && board['5'] !== '-'){
            setwinner(board['3'])
        }
        else if(board['6'] === board['7'] && board['7'] === board['8'] && board['8'] !== '-'){
            setwinner(board['6'])
        }
        else if(board['0'] === board['3'] && board['3'] === board['6'] && board['6'] !== '-'){
            setwinner(board['0'])
        }
        else if(board['1'] === board['4'] && board['4'] === board['7'] && board['7'] !== '-'){
            setwinner(board['1'])
        }
        else if(board['2'] === board['5'] && board['5'] === board['8'] && board['8'] !== '-'){
            setwinner(board['2'])
        }
        else if(board['0'] === board['4'] && board['4'] === board['8'] && board['8'] !== '-'){
            setwinner(board['0'])
        }
        else if(board['2'] === board['4'] && board['4'] === board['6'] && board['6'] !== '-'){
            setwinner(board['2'])
        }
    }, [board])

    React.useEffect(() =>{
        var game = [board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]];
        game = game.join('');

        
    const options = {
        method: 'GET',
        url: `https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/${game}/X`,
        headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        if (winner === 'No winner'){
            setboard(prevstate => ({...prevstate, [response.data.recommendation]: 'X'}))
            setturn('O');
            
        }
    }).catch(function (error) {
        console.error(error);
    });
        
    }, [undo])

    

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',        
        alignItems:'center',
        justifyContent:'center'
    }}>
        <p style={{
            fontSize:'1.4rem',
        }}
        
        >You are playing as 'O'</p>

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
                '0': '-',
                '1': '-',
                '2': '-',
                '3': '-',
                '4': '-',
                '5': '-',
                '6': '-',
                '7': '-',
                '8': '-'
            });
            setundo(null);
            setturn('X')
        }}>Reset</button>
    </div>

    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'25px',
        color:'green',
    }}>{ winner && winner !== 'No winner' ? (`${winner} won!`):'No one won!'}

    
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

export default Aigame