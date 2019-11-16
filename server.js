import express from 'express';
import path from 'path';

const server = express();
const port = 3000;

// Allow static files to load
server.use('/__schemas__', express.static(path.resolve('__schemas__')));
server.use('/src', express.static(path.resolve('src')));

server.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

server.get('/src/index.js', (req, res) => {
  res.sendFile(path.resolve('src/index.js'));
});

server.listen(port, () =>
  console.warn(`Server running on http://0.0.0.0:${port}`)
);
