const express = require ("express");
const path = require('path');
const app = express();
const router=require('./routers/mainRouter')

app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

app.use(router)


// app.get('/register', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'views/register.html'));
// });
// app.get('/login', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'views/login.html'))
// });
