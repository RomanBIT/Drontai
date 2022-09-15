import { useState } from "react"

function T4() {

    const [show, setShow] = useState(false);

    return (
        <>
            {

                show ? <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/R129-Facelift-Difference1.jpg" alt="merc" /> : null

            }
            <button onClick={() => setShow(s => !s)}>Show pic</button>
        </>

    )
}

export default T4;