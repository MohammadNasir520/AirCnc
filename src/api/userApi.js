
// host request by email
export const hostRequest = async hostData => {
    const url = `${process.env.REACT_APP_Base_url}/user/${hostData.email}`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(hostData)
    })
    const data = await response.json()
    return data;
}

// get user role 
export const getRole = async email => {
    const url = `${process.env.REACT_APP_Base_url}/user/${email}`

    const response = await fetch(url)
    const user = await response.json()
    return user?.role;
}
