const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
// add router in express app
app.use("/",router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/v1/weather',(req, res) => {
    res.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":39.47,"feels_like":39.47,"temp_min":36.81,"temp_max":47.17,"pressure":1020,"humidity":72},"visibility":10000,"wind":{"speed":2.95,"deg":357,"gust":2.93},"clouds":{"all":99},"dt":1642381311,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642347934,"sunset":1642381185},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
});
router.get('/v1/hello',(req, res) => {
    res.json({"message": "new_ message"})
});

app.post('/v1/auth',(req, res) => {
   var user_name = req.body.user;
   var password = req.body.password;
   if (user_name=='AGAM'&& password=='123')
   {
        res.json({"Token": "kajsddd"})
   }
   else {
         res.status(400)
         res.json("BAD REQUEST")

     }

});

app.listen(3000,() => {
console.log("Started on PORT 3000");
})