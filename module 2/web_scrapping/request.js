const request = require('request');


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard"
request(link, cb);

function cb(error, response, body) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        console.log('body:', body); // Print the HTML for the Google homepage.
    }
}