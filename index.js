const express = require('express');
const app = express();
const port = 3001

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

const router = require('./routes/route');
app.use('/', router)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});