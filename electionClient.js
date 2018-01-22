const FileReader = require('./FileReader.js');
const electionParser = require('./electionParser.js');

let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');
let parsedlist = electionParser(list);

function stateLeastcounties(list,n){
  let states = new Array(50)
  states.fill(0)
  for(let i=0;i<list[i].length;i++){
    if(){

    }
  }
}

function stateMostcounties(){

}

function stateExactcounties(){

}

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
    let sortedCounties = list.sort(function(a,b){
          return (a.obamaVote+a.romneyVote)-(b.obamaVote+b.romneyVote)
        });
      return sortedCounties;
}

function countiesWon(){
  let obamaWon = [];
  let romneyWon = [];
  for(let i=0;i<list.length;i++){
    if(list[i].obamaVote > list[i].romneyVote){
      obamaWon.push(list[i].county);
    else{
      romneyVote.push(list[i].county);
    }
    }
  }
  return obamaWon, romneyWon;
}

function countyLargetdiff(){

}

function countyLargestvoteDiff(){

}
