const server = require('./api/server.js');



const Port = process.env.PORT || 2040;
server.listen(Port, () => console.log(`Listening on port ${Port} `));