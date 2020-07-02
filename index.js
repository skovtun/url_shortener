const express = require('express');
const connectDB = require('./config/db')

const app = express();

app.set('view engine', 'ejs');

// Connect to DB
connectDB();

app.use(express.json({ extented: false }));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Template Render
app.get('/', (req, res) => {
  res.render('index');
});


const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
