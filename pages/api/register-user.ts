import type { NextApiRequest, NextApiResponse } from 'next'

import db from '../../config/firesore'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {name, email, password} = req.body
        
        const userRef = db.collection('users').doc()
        
        await userRef.set({
            name,
            email,
            password
        })

        return res.status(200).json({msg: `Ola ${name}, seu usuario foi criado com sucesso.`})

    } catch (err) {
        return res.status(404).json({msg: 'erro ao criar usuario!'})
    }
}