import React, { useState } from 'react'

function StatesComponent() {
    const [data, setData] = useState("")

    return (
        <>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            Show :
            <b>{data}</b>
        </>
    )
}

export default StatesComponent;