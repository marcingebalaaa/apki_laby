const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
 res.send('Witaj w aplikacji Express!');
});
app.listen(port, () => {
 console.log(`Serwer działa na porcie ${port}`);
});
app.get('/contact', (req, res) => {
  res.send('To jest strona kontaktowa');
});
app.get('/api/info', (req, res) => {
 res.json({
 application: 'Express LAB4',
 version: '1.0'
 });
});
app.get('/api/users/search', (req, res) => {
  const { name, page = 1 } = req.query;
  res.json({ name, page });
});
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    message: 'Pobrano użytkownika',
    id: id
  });
});
app.post('/api/users', (req, res) => {
  res.status(201).json({ message: 'Utworzono użytkownika' });
});
app.put('/api/users/:id', (req, res) => {
  res.status(200).json({ message: `Zaktualizowano użytkownika o ID: ${req.params.id}` });
});
app.delete('/api/users/:id', (req, res) => {
  res.status(204).send(); 
});