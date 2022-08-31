import { useState } from 'react';
import './App.scss';


function App() {

    const [color, setColor] = useState('crimson');
    const [fontSize, setFontSize] = useState('50px');
    const [count, setCount] = useState(1);
    const [ls, setLs] = useState(5);

    const clicked = () => {
        setColor(c => c === 'skyblue' ? 'crimson' : 'skyblue')
    }
    const clickFont = () => {
        setFontSize(f => f === '100' ? '50' : '100')
    }
    // const doCount = () => {
    //     setCount(count + 1)
    // }

    const doCount = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    // const clicked = () => {
    //     console.log('Labas');
    // }
    // const doJob = () => {
    //     console.log('Dirbam');
    //     clicked();
    // }

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{
                    color: color,
                    fontSize: fontSize + 'px',
                    letterSpacing: ls + 'px'
                }}>STATE {count}</h1>
                <button onClick={clicked}>ClICK!</button>
                <button onClick={clickFont}>DO SIZE!</button>
                <button onClick={doCount}>SKAICIUOJAM! +1</button>
                <button onClick={() => setLs(5)}>LetterSpacing 10px</button>
                <button onClick={() => setLs(10)}>LetterSpacing 5px</button>
            </header>
        </div>
    );
}

export default App;
