import { useState } from 'react';
function Text() {

    const [text, setText] = useState('')
    const [color, setColor] = useState('skyblue')
    const [range, setRange] = useState(0)
    const [textNow, setTextNow] = useState('***')

    const control = e => {
        //   Number(e.target.value) && setText(e.target.value);
        setText(e.target.value)
    }
    const colorize = e => {
        setColor(e.target.value) 
    }
    const rangeControl = e => {
        setRange(parseInt(e.target.value))
    }


    return (
        <>
            <div className="form-container">
                <h2>TEXT: {textNow}</h2>
                <input type="text" onChange={control} value={text} />
                <button onClick={() => setTextNow(text)}>TEXT NOW </button>
            </div>
            <div className="form-container">
                <h2 style={{ color }}>COLOR</h2>
                <input type="color" onChange={colorize} value={color} />
                <button onClick={() => setColor('red')}>MAKE IT RED AGAIN </button>
            </div>
            <div className="form-container">
                <h2>RANGE: {('' + range).padStart(3, 0)}</h2>
                <input type="range" onChange={rangeControl} value={range} />
                <span>
                    <button onClick={() => setRange(s => Math.max(0, s - 10))}>MINUS</button>
                    <button onClick={() => setRange(s => Math.min(100, s + 10))}>PLUS</button>
                </span>
            </div>
        </>
    )
}

export default Text;