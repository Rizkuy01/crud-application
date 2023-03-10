import connectMongo from "../../../database/connect"
import { getUser, putUser, deleteUser } from "../../../database/controller"

export default async function handler(req,res) {
    connectMongo().catch(()=>res.status(405).json({error: 'error in the connection'}))

    //type of request
    const {method} = req

    switch (method) {
        case "GET":
            getUser(req, res);
            break;
        case 'PUT':
            putUser(req, res)
            break;
        case 'DELETE':
            deleteUser(req, res)
            break;
        default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} not allowed`);
        break;
    }
}