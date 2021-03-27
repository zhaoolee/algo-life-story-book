const fse = require("fs-extra");
const path = require("path");


function main(){
    fse.copySync(path.join(__dirname, "README.md"), path.join(__dirname, "docs", "README.md"))
}


main();