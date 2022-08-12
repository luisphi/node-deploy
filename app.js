import express from 'express'
import path from "path"
import 'dotenv/config'

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Luis',
    titulo: 'Tiene que salir este titulo'
  })
})

app.get('/generic', (req, res) =>{
    res.sendFile(path.resolve() +'/public/generic.html')
});


//Para una ruta no encontrada
app.get('*', (req, res) =>{
    res.sendFile(path.resolve() +'/public/404.html')
});

app.listen(port, ()=>{
    console.log(`Aplicación corriendo en ${port}`);
});