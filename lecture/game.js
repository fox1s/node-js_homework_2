// основний файл

// створюєм простий сервер
const http = require('http'); /*http core module*/
const enemy = require('./enemy1');
const hero = require('./hero');
const fs = require('fs');
const path = require('path'); /*для визнаення точного шляху*/

const hostname = '127.0.0.1';
const port = 3030;
console.log(__dirname)
const filePath = path.join(__dirname, 'stats.txt');
fs.readFile(filePath, 'utf8', (err, data)=>{
    if (err){
        return console.log(err);
    }
    console.log(data);
})

const server = http.createServer((request, result) => {
    result.statusCode = '200';
    console.log({url: request.url}) /*url from request*/
    let text;
    switch (request.url) { /*примітивний роутінг*/
        case '/hero/fight':
            text = hero('fight');
            fs.writeFile('hero-status.txt', 'Hero win!', (err)=>{
                if(err) return console.error('something go wrong');
                console.log('File created!')
            })
            break;
        case '/hero/walk':
            text = hero('walk');
            break;
        case '/hero/run':
            text = hero('run');
            break;
        case '/enemy/fight':
            text = enemy.enemy('fight');
            break;
        case '/enemy/walk':
            text = enemy.enemy('walk');
            break;
        case '/enemy/run':
            text = enemy.enemy('run');
            break;
        default:
            text = 'Hero and enemy are on respawn!'
    }
    result.end(text);
});

server.listen(port, hostname, () => {
    console.log(`Game server running at http://${hostname}:${port}`);
});