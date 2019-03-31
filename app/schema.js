// we import the resolvers created
import {resolvers} from './resolvers/resolvers'
// importSchema permits us import the graphqlSchema from another file
import {importSchema} from 'graphql-import'
// makeExecutableSchema create a new schema with Defs and resolvers
import {makeExecutableSchema} from 'graphql-tools'

// importSchema receives a schema file but we need put the project_Folder_Name/ for the function to accept the file
const typeDefs = importSchema("./app/schema.graphql");

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };