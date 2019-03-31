import express from 'express';
// GraphQL
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';

const app = express();

// app.get defines a new route to express
app.get('/',(req, res) => {
    res.send('Funciona');
});

// app.use defines a new route to express
app.use('/graphiql', graphqlHTTP({
    // What schema will use...
    schema,
    // uses graphiql
    graphiql: true
}));


// app.listen defines the express port
app.listen(8000, () => console.log('El servidor esta funcionando'));