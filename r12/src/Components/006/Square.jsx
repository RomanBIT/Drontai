import { useEffect } from "react";
import { useState } from "react";
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';



function Squares() {

    const [sq, setSq] = useState([])
    const [selected, setSelected] = useState(null)
    const [color, setColor] = useState(randColor())
    const [sort, setSort] = useState(1)

    useEffect(() => {
        setColor(randColor())
    }, [sq]);

    const add = () => {
        setSq(s => [...s, {
            number: rand(100, 999),
            color: randColor(),
            row: s.length,
            show: true
        }])
    }

    const sortUp = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number))
    }
    const sortDown = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number))
    }

    const sortDefault = () => {
        setSq(s => s.map(square => ({ ...square, show: true })).sort((a, b) => a.row - b.row))
    }

    const filterBlack = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: true } : { ...square, show: false }))
    }

    const filterColor = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: false } : { ...square, show: true }))
    }

    const doClick = num => {
        setSelected(num)
        setSq(s => s.map(square => square.number === num ? { ...square, show: false } : { ...square }))
    }

    const resurect = () => {
        setSq(s => s.map(square => square.number === selected ? { ...square, show: true } : { ...square }))
    }

    const first5 = () => {
        setSq(s => s.map((square, i) => i < 5 ? { ...square, show: true } : { ...square, show: false }))
    }

    const sortboth = () => {
        setSq(s => [...s].sort((a, b) => sort * (a.number - b.number)))
        setSort(s => s * -1)
    }

    return (
        <>
            <h1 style={{ color }}>{selected} STATE {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">

                {
                    sq.map((n, i) => n.show ? <div style={{
                        backgroundColor: n.number < 300 ? 'black' : n.color,
                        borderRadius: n.number % 2 ? null : '50%'
                    }} key={i} onClick={() => doClick(n.number)}>{n.number}</div> : null)
                }
            </div>
            <div className="container">
                <button onClick={add}>add []</button>
                <button onClick={sortUp}>SORT 9-0</button>
                <button onClick={sortDown}>SORT 0-9</button>
                <button onClick={sortDefault}>SORT DEFAULT</button>
                <button onClick={filterBlack}>SHOW BLCK</button>
                <button onClick={filterColor}>SHOW CLR</button>
                <button onClick={resurect}>Resurect</button>
                <button onClick={first5}>Show 5</button>
                <button onClick={sortboth}>Sort Both by Number</button>
            </div>

        </>
    )

}

export default Squares;


