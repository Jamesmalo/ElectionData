function electionParser(array){
    this.state = array[0];
    this.county = array[1];
    this.fips = array[2];
    this.obamaVote = array[3];
    this.obamaPercent = array[4];
    this.romneyVote = array[5];
    this.romneyPercent = array[6];
}

function Parser(line){
    let array = line.split(",");
    return array;
}
