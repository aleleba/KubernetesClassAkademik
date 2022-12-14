import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://santiage:santiagepass@bdatos:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... base de datos...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear/:pTipo', async (_req, res) => {
	
  console.log('creando...')
  await Animal.create({ tipo: _req.params.pTipo, estado: 'estado' })
  return res.send('ok')
})

app.listen(3000, () => console.log('escuchando ...'))
