const FileReader = require('./FileReader.js');
const electionParser = require('./electionParser.js');

let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');
let parsedlist = electionParser(list);

function stateTotals(list){
  let states = [];
  for(let i=0;i<list.length;i++){
    if(list[i].fips == 0){
        totalslist.push(list[i].statePostal)
    }
    //otherwise nothing
  }
  return states;
}

function statePercent(p,list){
    let states = [];
    for(let i=0;i<list.length;i++){
        let temp = Math.abs(list[i].obamaPercentage-list[i].romneyPercentage)
        if(temp < p){
            states.push(list[i].statePostal)
        }
    }
    return states;
}

function countiesLtoG(){
    let counties = [];
    for(let i=0;i<list.length;i++){
        if(list[i].statePostal == ){

        }
    }
}
