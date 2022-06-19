import {users1} from '../routes/userData.js'
import {v4 as uuidv4} from 'uuid'
let users = users1;
export const createUser = (req,res) =>{
    const user = req.body;

    users.push({...user,id:uuidv4()});
    res.send(`user with the name ${user.firstname} has been added`)
}

export const getbyID = (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=> user.id === id);

    res.send(foundUser);
}

export const deleteByID = (req,res) =>{
    const {id} = req.params;
     users = users.filter((user)=> user.id != id);
    res.send(`user with id ${id} has been deleted from the db`);
}

export const patchByID = (req,res) =>{
    const { id } = req.params;
    const{firstname,lastname,age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstname) {user.firstname = firstname;}
    if(lastname) {user.lastname = lastname;}
    if(age) {user.age = age;}

    res.send(`user with id ${id} has been updated`)
}
export const getAllUsers = (req,res)=>{
    res.send(users);
}
