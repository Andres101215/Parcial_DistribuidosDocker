const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (como CSS si los tienes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal: obtener todos los posts
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.render('index', { posts: response.data, selectedPost: null });
  } catch (error) {
    res.status(500).send('Error al obtener los posts');
  }
});

// Ruta para buscar un post por ID
app.post('/post', async (req, res) => {
  const postId = req.body.postId;

  try {
    const allPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const selectedPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    res.render('index', { posts: allPosts.data, selectedPost: selectedPost.data });
  } catch (error) {
    res.status(500).send('Error al obtener el post por ID');
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
