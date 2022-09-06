import { useState } from 'react';
import './App.scss';
import Dog from './Components/011/Dog'



function App() {

    const [dogs, setDogs] = useState([])

    const add = () => {
        setDogs(d => [...d, '']);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect</h1>

                <div className='container'>
                    {
                        dogs.map((_, i) => <Dog key={i} i={i}></Dog>)
                    }
                </div>

                <div className='container'>
                    <button onClick={add}>Add Dog</button>
                </div>

            </header>
        </div>
    );
}

export default App;

//------------ 011 23:08 ---------//


