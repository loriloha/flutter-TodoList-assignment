const app= require("./app");
const db = require('./config/db');

const port =3000;

app.listen(port, () => {
    console.log(`Server Listening on Port https://flutter-todolist-assignment.onrender.com:${port}`);
});
