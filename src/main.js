const http = require('http');

const server = http.createServer((request, response) => {
    const data = {
        id: 1,
        title: 'Land Down Under',
        content: 'Can you hear, can you hear the thunder'
    }

    const jsonData = JSON.stringify(data);

    response.writeHead(200, {
        'Content-Type': 'application/json: charset=utf-8'
    });

    response.write(jsonData);

    response.end();
});

server.listen(3000, () => {
    console.log('The service is online');
});