import app from './App'

//1.Iniciar un servidor para responder a peticiones REST

const puerto=3000 

app.listen(
    puerto,
    ()=>{
        console.log(`El servidor está escuchando en el puerto ${puerto}`)
    }
)