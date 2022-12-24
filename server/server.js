const express = require("express");
const app = express();
const cors = require('cors')
const PORT = 8000;

require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 require("./routes/pet.routes")(app);

app.listen(8000, () => console.log(`Listen at PORT: ${PORT}`));
