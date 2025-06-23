import espress from 'express';
const app = espress();
const hostname = 'localhost';
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
export default app;