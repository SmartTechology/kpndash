var express        = require("express");      
    bodyParser     = require("body-parser");
    app            = express();
    methodOverride = require("method-override");  

    
   
//ADD PUBLIC AS A STANDERD FOLDER    
app.use(express.static(__dirname + '/public'));
//BODY PARSER
app.use(bodyParser.urlencoded({ extended : true }));
//METHOD OVERRIDE INIT
app.use(methodOverride("_method"));

app.set('view engine', 'ejs');

app.use("/", (req, res) => {
    res.render("home");
});

//START SERVER ON PORT 3000
app.listen(3000, function() {
    console.log("It's Alive");
  });
  