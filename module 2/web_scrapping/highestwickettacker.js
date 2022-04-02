const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/rajasthan-royals-vs-mumbai-indians-51st-match-1254093/full-scorecard";
 
request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
        
    }else{
        //console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let mostwicket = 0;
        let nameofHigestWicketTacker ="";
        let bowlertable = document.querySelectorAll(".table.bowler");
        for (let i=0;i<bowlertable.length;i++){
            let row = bowlertable[i].querySelectorAll(" tbody tr");
            for (let j=0;j<row.length;j++){
                let tds = row[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket =tds[4].textContent;
                   // console.log("name of bowler ---->",name,"           wicket ----->",wicket  );
                   if(wicket>mostwicket){
                       mostwicket = wicket;
                       nameofHigestWicketTacker = name;  
                   }
                }
            }
        } 
        console.log("name of highest of wicket tacker-->",nameofHigestWicketTacker);
    console.log("number of wicket -->   ",mostwicket);
    }
    
}