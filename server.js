require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require("./models/db")
// Create our express app
const app = express()
// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
/* END CONFIG */
// Mount our middleware (app.use)
/*Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use("/logs", require("./controllers/routeController"))
/* END Middleware */
// Mount Routes
/*Start Routes */
// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})