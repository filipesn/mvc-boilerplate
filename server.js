// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const frontRoutes = require('./routes/frontRoutes'); // Adicione esta linha
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Usando as rotas definidas
app.use('/api', routes);
app.use('/', frontRoutes); // Adicione esta linha antes do app.listen
app.use('/users', userRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});