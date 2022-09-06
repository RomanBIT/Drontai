import { useState } from 'react';

function Two() {

    const [cb1, setCb1] = useState(false)
    const [cb2, setCb2] = useState(false)


    return (
        <>
                <div className="form-container">
                    <div className="kv" style={{ backgroundColor: paint ? 'black' : 'crimson' }}></div>
                    <div>
                        <input type="checkbox" id="_1" onChange={() => setCb(c => !c)} checked={cb} />
                        <label htmlFor="_1" style={{ color: cb ? 'crimson' : null }}>Checked</label>
                    </div>
                </div>
            </>

            )

}

            export default Select;