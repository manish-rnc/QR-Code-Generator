import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {
        "message": "Type in your URL: ",
        "name": "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile("url.txt", url, (err,data)=> {
        if(err) throw err;
        console.log("The URL has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });