const fs = require("fs")


fs.writeFileSync("notes.txt", "node js txt")


fs.copyFileSync("notes.txt", "the-coby-file.txt")


fs.renameSync("the-coby-file.txt","renamedandcob.txt")


const directoryPath = "./"; // Replace this with the path to your directory
const files = fs.readdirSync(directoryPath);

const onlyFiles = files.filter((fileName) => {
  const fullPath = `${directoryPath}/${fileName}`;
  return fs.statSync(fullPath).isFile();
});

console.log(onlyFiles);