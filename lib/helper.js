const BASE_URL = 'http://localhost:3000'

export const getUser = async() => {
    const respon = await fetch(`${BASE_URL}/api/user`)
    const json = await respon.json()

    return json;
}