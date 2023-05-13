
const express= require('express');

const bodyParesr= require('body-parser');
const app= express();
app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({ extended: true }));

module.exports=app;