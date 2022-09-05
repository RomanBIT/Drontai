import { useDebugValue, useState } from "react";

function Checkbox() {

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" />
                    <label>A Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="B" />
                    <label>B Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="B" />
                    <label>C Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="D" />
                    <label>D Raide</label>
                </div>
            </div>
        </>

    )
}

export default Checkbox;