const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/users`


async function signin(email, password) {
    const res = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        email,
        password,
    })
    return res.json()
}

export { signin} 