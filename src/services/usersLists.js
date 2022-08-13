const getUsersList = async () => {
    return await fetch(`${process.env.REACT_APP_EXTERNAL_API_URL}/users`)
        .then(data => data.json())
}

export default getUsersList;