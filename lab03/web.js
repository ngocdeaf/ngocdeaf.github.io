const http = require('http');
const fs = require('fs');
const port = 5000;
server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile('index.html', (err, date) =>{
                if (!err) {
                    res.write(data);
                    res.end();
                }
            });
            break;
        case '/demo':
            fs.readFile ('demo.html', (err, data)=> {
                if (!err) {
                    res.write(data);
                    res.end();
                }
        });
        break;
    }
}).listen(5000, () => {
    console.log("http://localhost:" + port);
});