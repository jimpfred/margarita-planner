const mongoose = require('mongoose')

const connectionString = process.env.DATABASE_URL
//const connectionString = 'mongodb+srv://admin:abc1234@cluster0.rb6ve.mongodb.net/margaritas-collection-2?retryWrites=true&w=majority'


mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to database on ${db.host}:${db.port}`)
})

