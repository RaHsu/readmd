const fs = require('fs');
const re = require('./re.js');
const markdown = require("markdown-it")();

let md = {};

module.exports = md;

let css = fs.readFileSync(__dirname + "/css/markdown.css").toString();
let template = `
<!DOCTYPE html>
<html>
    <head>
        <title>markdown阅读器</title>
        <style type="text/css">
            {{style}}
        </style>
    </head>
    <body>
        {{content}}
    </body>
</html>
`;
md.writeMd = function(fileName){
    let content = markdown.render(fs.readFileSync("./"+fileName).toString());

    let md_config = [
        {
            replace_pattern:'style',
            value:css
        },{
            replace_pattern:'content',
            value:content
        }
    ];

    let writeStream = re.replaceAll(template,md_config);
    let outFlieName = './'+fileName.slice(0,-3)+'.html';
    console.log(outFlieName);
    fs.writeFileSync(outFlieName,writeStream);

}
