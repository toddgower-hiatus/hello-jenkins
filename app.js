/**
 * Created by toddgower on 5/4/17.
 */
'use strict';

const express = require('express');
const chalk = require('chalk');
const figlet = require('figlet');

const app = express();

console.log(figlet.textSync("Starting...", {
    font: "Ogre"
}));

app.get('/', (req, res) => {
    res.send("Hello Jenkins!\n\n We should be seeing some new data here.");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(chalk.green(`Server is running on port ${process.env.PORT || 5000}`));
});



module.exports = app;