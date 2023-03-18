const express = require("express");
const router = express.Router();

const fs = require("fs");


router.route("/").get((req, res) => {
  fs.readFile("./json/moviess.json", (err, data) => {
    if (err) {
      console.log("error");
      res.status(500).send("Error reading file");
    } else {
      res.end(data);
    }
  });
});

router.route("/:id").get((req, res) => {
  const getMovie = fs.readFileSync('./json/moviess.json')
  const moviid = JSON.parse(getMovie).find((movieId) => movieId.id === Number(req.params.id))
  res.status(200).json({ message: JSON.stringify(moviid) });
})


router.route("/").post((req, res) => {
  const moviesJson = fs.readFileSync('./json/moviess.json');
  const movies5 = JSON.parse(moviesJson);
  movies5.push(req.body);
  console.log(movies5);
  fs.writeFileSync('./json/moviess.json', JSON.stringify(movies5));
  res.status(201).json({ message: "Movie Added To DB" })
})
router.route("/:id").put((req, res) => {

  res.status(200).json({ Message: `edit movie ${req.params.id}` })
})


router.route("/:id").delete((req, res) => {
  const deleteMovie = fs.readFileSync("./json/moviess.json")
  const findWhatUserDelete = JSON.parse(deleteMovie)
  if (!findWhatUserDelete.find(getid => Number(getid.id) === Number(`${req.params.id}`))) {
    console.log("unvaild id");
    res.end()
  } else {
    const getindextodelete = findWhatUserDelete.findIndex(currid => Number(currid.id) === Number(`${req.params.id}`))
    console.log('theindex:', getindextodelete);
    findWhatUserDelete.splice(getindextodelete, 1)
    const newData = JSON.stringify(findWhatUserDelete)
    fs.writeFile("./json/moviess.json", newData, (err) => {
      console.log("new data update");
    })
    res.status(200).json({ Message: `delete movies ${req.params.id}` })
  }


})

module.exports = router;
