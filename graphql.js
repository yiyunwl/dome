var express = require('express');

var graphqlHTTP = require('express-graphql');

var { buildSchema } = require('graphql');

var schema = buildSchema( `
    type Query {
        hello : String
    }
`);

var root = {hello :() => 'hello world'};

var app = express();
app.use('url',graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphqlHTTP : true,
}));
app.listen(4000,()=>console.log('Now browse to localhost:4000/graphql'))


