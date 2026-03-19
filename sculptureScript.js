const sculptureList = require('./data.js');

for (const sculpture of sculptureList) {

    const lengths = {};

    for (const key in sculpture) {
        lengths[key] = sculpture[key].length;
    }

    console.log(lengths);
}

