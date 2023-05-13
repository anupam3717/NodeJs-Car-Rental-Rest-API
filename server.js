require('dotenv').config();
const app=require('./app');
const db=require('./database/connection');

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
