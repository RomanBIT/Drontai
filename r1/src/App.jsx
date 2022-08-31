import { useState } from 'react';
import './App.scss';


function App() {

    const [color, setColor] = useState('crimson');
    const [fontSize, setFontSize] = useState(null);
    const [count, setCount] = useState(1);

    const clicked = () => {
        setColor('skyblue')
    }
    const clickFont = () => {
        setFontSize('100')
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
                <h1 style={{ color: color, fontSize: fontSize + 'px' }}>STATE {count}</h1>
                <button onClick={clicked}>ClICK!</button>
                <button onClick={clickFont}>DO SIZE!</button>
                <button onClick={doCount}>SKAICIUOJAM! +1</button>
            </header>
        </div>
    );
}


export default App;
