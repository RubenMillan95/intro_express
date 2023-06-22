import express, { Application, NextFunction, Request, Response } from "express"
import passport from "passport"
import dotenv from "dotenv"

//llamar el dontenv
dotenv.config()

import rutas_ejemplo from './routes/rutas_ejemplo'
import rutas_auth from './routes/rutas_auth'
import miEstrategia from './config/passports'

//1. Crear un objeto express

const app:Application =express()

app.use('/auth', rutas_auth)

passport.use(miEstrategia)
app.use(passport.initialize())

app.use('/', passport.authenticate('jwt', {session:false}), rutas_ejemplo) 

//2. Respuesta cuando el recurso no existe

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:'Upss lo que pidió NO existe'})

})

//3. Respuesta cuando existe un error de servidor

export default app