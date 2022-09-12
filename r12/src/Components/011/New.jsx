import { useState } from 'react';

function New() {

    const [select, setSelect] = useState('1')
    const [text, setText] = useState('');

    return (
        <>
            <div className="form-container">
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </select>
                <div>
                    <div className="form-container">
                        <input type="text" onChange={control} value={text} />
                    </div>
                    <div className='form-container'>
                        <button onClick={addNew}>addNew</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New;