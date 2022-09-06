import './App.scss';
import Text from "./Components/010/Text"
import { useState } from 'react';



function App() {

    const [textNow, setTextNow] = useState('');

    const [f1, setF1] = useState(false);
    const [f2, setF2] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <h2>TEXT: {textNow}</h2>
                <Text setTextNow={setTextNow} />
                <div className='container'>
                    {f1 ? <div className='kv'></div> : mull} 
                    {f2 ? <div className='ap'></div> : mull} 
                </div>
            </header>
        </div>
    );
}

export default App;


