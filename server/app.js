let express = require('express');
let app = express();
app.use(express.static('public'));

//Copy commented line below and paste it under "Add route require below" and uncomment it!
//let Your_GitHub_Name = require('./routes/Your_GitHub_Name');
// Change "Your_GitHub_Name" with your GitHub profile name for ex. MarekDzw
//Add route require below
let MarekDzw = require('./routes/MarekDzw');
const Deeadline = require('./routes/Deeadline');
let folxu = require('./routes/folxu');
let parthiv13 = require('./routes/parthiv13')

// Copy the commented line below and paste it under "Add your route below" and uncomment it!
//app.get('/Your_GitHub_Name', Your_GitHub_Name.profile);
// Change "Your_GitHub_Name" with your GitHub profile name for ex. MarekDzw
// Add your route below
app.get('/MarekDzw', MarekDzw.profile);
app.get('/Deeadline', Deeadline.profile);
app.get('/folxu', folxu.profile);
app.get('/parthiv13', parthiv13.profile);

module.exports = app;
