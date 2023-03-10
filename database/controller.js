
//  Controller
import User from '../model/user'


// get http:/localhost:3000/api/users
export async function getUsers(req, res){
    try {
        const users = await Users.find({})

        if(!users) return res.status(404).json({error: 'data not found'})
        res.status(200).json(users);
    } catch(error){
        res.status(404).json({error: 'error while getting data'})
    }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res){
    try{
        const {userId} = req.query;

        if(userId){
            const user = await Users.findById(userId);
            res.status(200).json(User);
        }
        res.status(404).json({error:"data not found"});
    } catch(error){
        res.status(404).json({error: 'error while getting data'})
    }
}

// post http:/localhost:3000/api/users
export async function postUser(req, res){
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({error: 'Form Data not Provided'});
        Users.create( formData, function(err, data) {
            return res.status(200).json(data);
        })
    } catch (error) {
        return res.status(404).json({error: 'error while creating data'})
    };
}

// put http:/localhost:3000/api/user/1
export async function putUser(req, res){
    try {
        const {userId} = req.query;
        const formData = req.body;

        if(userId && formData){
            const user = await User.findByIdAndUpdate(userId, formData);
            res.status(200).json(user);
        }
        res.status(404).json({error:"user not found"});
        } catch (error) {
            return res.status(404).json({error: 'error while updating data'})
        }
    }

// delete http:/localhost:3000/api/user/1
export async function deleteUser(req, res){
    try {
        const {userId} = req.query;

        if(userId){
            const user = await Users.findByIdAndRemove(userId);
            return res.status(200).json(user);
        }
        res.status(404).json({error:"data not found"});
        } catch (error) {
            res.status(404).json({error: 'error while deleting data'})
        }
    }