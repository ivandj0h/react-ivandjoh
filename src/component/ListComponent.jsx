import React from 'react'

function ListComponent() {

    const names = ['John', 'Mark', 'Jane', 'Mary']

    return (
        <>
            {names.map((name, index) => {
                return <h1 key={index}>{name}</h1>
            })}
        </>
    )
}

export default ListComponent;