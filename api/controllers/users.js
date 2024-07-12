import { db } from '../db.js'

export const getUsers = (req, res) =>{
    const users = 'SELECT * FROM usuarios'

    db.query(users, (err, data) =>{
        if(err){
            return res.json(err)
        }

        return res.status(200).json(data)
    });
};