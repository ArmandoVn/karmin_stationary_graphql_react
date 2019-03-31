import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// mongoose.connect connects the app with the database 
mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
    .once("open", () => console.log("Connected to database"));

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});

// mongoose.model creates a new model for mongo
const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes };