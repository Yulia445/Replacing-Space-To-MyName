const fs = require('fs');

const data = fs.readFileSync(
    '2.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);
// ),.”capitalism/
console.log(data.replaceAll(" ", "(Hoisan Yulia)"));
