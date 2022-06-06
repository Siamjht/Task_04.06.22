// Finding run rate of cricket game

function cricInfo(targetRun, currentRun, ballRem) {

    let runRem = targetRun - currentRun;
    let totalBall = 300;
    let playedBall = totalBall - ballRem;
    let curRunRate = ((currentRun / playedBall) * 6).toFixed(2);
    let reqRunRate = ((runRem / ballRem) * 6).toFixed(2);

    return [reqRunRate, curRunRate];
}

let matchInfo1 = cricInfo(310, 256, 13);
let matchInfo2 = cricInfo(300, 293, 6);

console.log("Match-1 Report: Current run rate = ", matchInfo1[1]," & Required run rate = ",matchInfo1[0]);
console.log("Match-2 Report: Current run rate = ", matchInfo2[1]," & Required run rate = ",matchInfo2[0]);