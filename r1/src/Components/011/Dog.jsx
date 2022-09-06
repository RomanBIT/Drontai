import { useEffect } from "react";

function Dog({ i }) {


    useEffect(() => {
        console.log('Dog No: ' + i)

    }, [])

    return (
        <div>{i}</div>
    )
}

export default Dog;