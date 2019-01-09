const express = require('express');
const expressGraphQL = require('express-graphql');
const opn  = require('opn');

const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('Server running on port 4000');
	opn('http://localhost:4000/graphql');
});
