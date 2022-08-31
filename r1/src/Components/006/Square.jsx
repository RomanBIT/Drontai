import { useState } from "react";
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';



function Squares() {

    const [sq, setSq] = useState([])

    const add = () => {
        setSq(s => [...s, { number: rand(100, 999), color: randColor() }])
    }

    const sortUp = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number))
    }
    const sortDown = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number))
    }

    return (
        <>
            <h1>STATE {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">

                {
                    sq.map((n, i) => <div style={{
                        backgroundColor: n.number < 300 ? 'black' : n.color,
                        borderRadius: n.number % 2 ? null : '50%'
                    }} key={i}>{n.number}</div>)
                }
            </div>
            <div className="container">
                <button onClick={add}>add []</button>
                <button onClick={sortUp}>SORT 9-0</button>
                <button onClick={sortDown}>SORT 0-9</button>
            </div>

        </>
    )

}

export default Squares;


//-------------- 007 31:57 ----------------//