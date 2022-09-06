import { useDebugValue, useState } from "react";

function Checkbox() {

    const [cb, setCb] = useState({ A: false, B: true, C: true, D: false })

    const change = e => {
        const v = e.target.value
        setCb(c => ({...c, [v]:  !c[v]}))
}

return (
    <>
        <div className="form-container">
            <div>
                <input type="checkbox" value="A" id="_1" onChange={change} checked={cb.A} />
                <label htmlFor="_1" style={{color: cb.A ? 'crimson' : null}}>A Raide</label>
            </div>
            <div>
                <input type="checkbox" value="B" id="_2" onChange={change} checked={cb.B} />
                <label htmlFor="_2" style={{color: cb.B ? 'crimson' : null}}>B Raide</label>
            </div>
            <div>
                <input type="checkbox" value="C" id="_3" onChange={change} checked={cb.C} />
                <label htmlFor="_3" style={{color: cb.C ? 'crimson' : null}}>C Raide</label>
            </div>
            <div>
                <input type="checkbox" value="D" id="_4" onChange={change} checked={cb.D} />
                <label htmlFor="_4" style={{color: cb.D ? 'crimson' : null}}>D Raide</label>
            </div>
        </div>
    </>

)
}

export default Checkbox;

//--------------- 009 1:44:50 ----------//