import express,{Router, Request, Response} from 'express'
import jwt from 'jsonwebtoken'

// despues de los : tipo de dato de la variable
const router: Router= Router()

router.get(
    '/login',
    (req:Request, res:Response)=>{

        //TO DO: Obtener esto desde la BD
        //nunca colocar datos sensibles o importantes!!!
        const payload={
            id:"user_id",
            username:"ruben"
        }
        const options={
            expiresIn:"2h"
        }
        const secretKey= process.env.SECRET_KEY
        if (typeof secretKey == 'string'){
            const token = jwt.sign(payload, secretKey, options)
            res.json({token})
        }
    }
)

export default router