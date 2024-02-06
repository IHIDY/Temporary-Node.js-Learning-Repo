"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log('the service is online!');
});
app.get('/', (request, response) => {
    response.send('hello');
});
const data = [
    {
        "id": 1,
        "name": "Kobe Bryant",
        "number": "24"
    },
    {
        "id": 2,
        "name": "Kyrie Irving",
        "number": "2"
    },
    {
        "id": 3,
        "name": "Lebron James",
        "number": "23"
    }
];
app.get('/posts', (request, response) => {
    response.send(data);
});
app.post('/posts', (request, response) => {
    const { content } = request.body;
    response.status(201);
    console.log(request.header["Sing-a-song"]);
    response.set('Message-From-Hell', 'Your man is dead');
    response.send({
        message: 'Successfully Created: ${content}'
    });
});
//# sourceMappingURL=main.js.map