import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    date: String,
    code: String,
    name: String,
    error: String,
    pic: String,
    solve: String,
    status: String,
})

const Users = models.user||model('user', userSchema);
export default Users;