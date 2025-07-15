let mypath = __dirname;

const Utilspath = mypath.replace("\\services", "\\utils\\fileUtils.js");

const fileUtils =  require(Utilspath);

const data = {}

function addContactToData(name,email,phone){
    const data = fileUtils;
    //check if there is duplicate inputs
}


module.exports = {addContactToData};