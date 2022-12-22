const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const { response } = require('express');
const e = require('express');

const homeFile = fs.readFileSync("resumePage.html", "utf-8");

const app = express();
// app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/static"));

var is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};

function getStr(value) {
    let nstring = value;
    let str = '';
    var l = nstring.length;
    if (is_array(nstring)) {
        for (var i = 0; i < l; i++) {
            str = str + `<p>${nstring[i]}</p>`;
        }
    } else {
        str = `<p>${nstring}</p>`;
    }
    if (nstring == '') {
        str = 'N/A'
    }
    return str;
}

const replaceVal = (newVal, orgVal) => {
    let retVal = newVal.replace("%name%", orgVal.name);
    retVal = retVal.replace("%objective%", orgVal.objective);
    retVal = retVal.replace("%email%", orgVal.email);
    retVal = retVal.replace("%phNumber%", orgVal.phNumber);
    retVal = retVal.replace("%links%", getStr(orgVal.link));
    retVal = retVal.replace("%skill%", getStr(orgVal.skill));
    retVal = retVal.replace("%education%", getStr(orgVal.education));
    retVal = retVal.replace("%work%", getStr(orgVal.experience));
    retVal = retVal.replace("%achievement%", getStr(orgVal.achievement));
    return retVal;
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/resumePage.html', (req, res) => {
    const data = req.body;
    const arrData = [data];
    const newData = arrData.map((val) => replaceVal(homeFile, val)).join("");
    res.send(newData);
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});