import type { NextApiRequest, NextApiResponse } from 'next'

import db from '../../config/firesore'

export default async (req: NextApiRequest, res:NextApiResponse) => {
    
    const {email, password} = req.body

    const usersDB = await db.collection('users').where('email', '==', `${email}`).get()

    const users = []
    usersDB.forEach(item => {
        users.push({
            ...item.data()
        })
    })

    if(users[0].password === password){
        return res.status(200).json({msg: `${users[0].name} você foi autenticado com sucesso!`})
    }

    return res.status(404).send('')
}