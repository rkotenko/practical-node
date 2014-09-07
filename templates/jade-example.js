var jade = require('jade'),
    fs = require('fs');

var data = {
    title: "Practical Node.js",
    author: {
        twitter: '@azat_co',
        name: "Azat"
    },
    tags: ['express', 'node', 'javascript']
};

data.body = process.argv[2];

fs.readFile('jade-example.jade', 'utf-8', function(err, source){
    var template = jade.compile(source);
    var html = template(data);
    console.log(html);
});