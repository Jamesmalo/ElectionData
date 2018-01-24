const FileReader = require('./FileReader.js');
const electionParser = require('./electionParser.js');

let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');
let parsedlist = electionParser(list);

function stateLeastcounties(list,n){
  let states = new Array(50)
  states.fill(0)
  for(let i=0;i<list.length;i++){
    if(list[i].fips != 0){
      states[i] += 1;
    }
    if(list[i].statePostal != list[i+1].statePostal){
      i++;
    }
  }
  let index = [];
  for(let i=0;i<50;i++){
    if(states[i] < n){
      index.push(i);
    }
  }
  //convert i's into states
  return index;
}

function stateMostcounties(list,n){
  let states = new Array(50)
  states.fill(0)
  for(let i=0;i<list.length;i++){
    if(list[i].fips != 0){
      states[i] += 1;
    }
    if(list[i].statePostal != list[i+1].statePostal){
      i++;
    }
  }
  let index = [];
  for(let i=0;i<50;i++){
    if(states[i] > n){
      index.push(i);
    }
  }
  //convert i's into states
  return index;
}

function stateExactcounties(list,n){
  let states = new Array(50)
  states.fill(0)
  for(let i=0;i<list.length;i++){
    if(list[i].fips != 0){
      states[i] += 1;
    }
    if(list[i].statePostal != list[i+1].statePostal){
      i++;
    }
  }
  let index = [];
  for(let i=0;i<50;i++){
    if(states[i] = n){
      index.push(i);
    }
  }
  //convert i's into states
  return index;
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

function countiesWon(candidate){
  let candidateWon = [];
  let obama = (candidate == "obama");
  if(obama){
    for(let i=0;i<list.length;i++){
      candidateWon.push(list[i].county)
    }
  }
  else{
    for(let i=0;i<list.length;i++){
      candidateWon.push(list[i].county)
    }
  }
  return candidateWon;
}

function countyLargestdiff(){
  
}

function countyLargestvoteDiff(){

}
