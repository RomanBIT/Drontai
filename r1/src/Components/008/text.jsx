import { useState } from 'react';
function Text() {

    const [text, setText] = useState('')
    const [color, setColor] = useState('red')
    const [range, setRange] = useState(0)

    const control = e => {
        //   Number(e.target.value) && setText(e.target.value);
        setText(e.target.value)
    }
    const colorize = e => {
        setColor(e.target.value)
    }
    const rangeControl = e => {
        setRange(e.target.value)
    }



    return (
        <>
            <div className="form-container">
                <h2>TEXT</h2>
                <input type="text" onChange={control} value={text} />
            </div>
            <div className="form-container">
                <h2 style={{ color }}>COLOR</h2>
                <input type="color" onChange={colorize} value={color} />
            </div>
            <div className="form-container">
                <h2>RANGE: { range.padStart(3, 0) }</h2>
                <input type="range" onChange={rangeControl} value={range} />
            </div>

        </>
    )
}

export default Text;