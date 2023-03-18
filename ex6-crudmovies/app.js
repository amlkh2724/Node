const express = require("express");
const app = express()


const port = 3008
app.use(express.json())
app.use("/movies", require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log(`serverr runing on port ${port}`);
})