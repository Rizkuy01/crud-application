const BASE_URL = 'http://localhost:3000'

export const getUsers = async() => {
    const respon = await fetch(`${BASE_URL}/api/user`)
    const json = await respon.json()

    return json;
}

export const getUser = async(userId) => {
    const response = await fetch(`${BASE_URL}/api/user/${userId}`);
    const json = await response.json()

    if(json) return json;
    return {};
}

export async function addUser(formData){
    try{
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/user`, Option)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}

export async function updateUser(userId, formData){
    const Option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`${BASE_URL}/api/user/${userId}`, Option)
        const json = await response.json()
        return json;
} 

export async function deleteUser(userId){
    const Option = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'},
    }
    const response = await fetch(`${BASE_URL}/api/user/${userId}`, Option)
    const json = await response.json()
    return json;
}