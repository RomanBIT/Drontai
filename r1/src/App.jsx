import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Dog from './Components/011/Dog'



function App() {

    const [dogs, setDogs] = useState([])
    const [count, setCount] = useState(1)

    const add = () => {
        setDogs(d => [...d, '']);
    }

    useEffect(() => {
        console.log('Dogs Canged Or Added 1')
        console.log('Count is ' + count)
    }, [dogs, count])

    const plus = () => {
        setCount(c => c + 1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect {count}</h1>

                <div className='container'>
                    {
                        dogs.map((_, i) => <Dog key={i} i={i}></Dog>)
                    }
                </div>

                <div className='container'>
                    <button onClick={add}>Add Dog</button>
                    <button onClick={plus}>Plus</button>
                </div>

            </header>
        </div>
    );
}

export default App;

//------------ 011 23:08 ---------//


