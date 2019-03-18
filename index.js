import express from 'express';
// GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

// resolvers
import resolvers from './resolvers';

const root = resolvers;

const app = express();

// app.get defines a new route to express
app.get('/',(req, res) => {
    res.send('Funciona');
});

// app.use defines a new route to express
app.use('/graphiql', graphqlHTTP({
    // What schema will use...
    schema,
    // the resolver pass as root value
    rootValue: root,
    // uses graphiql
    graphiql: true
}));


// app.listen defines the express port
app.listen(8000, () => console.log('El servidor esta funcionando'));