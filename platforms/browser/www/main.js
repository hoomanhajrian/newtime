


const time = document.getElementById("time");


// const newTime = {
// DATE:{
//     // Number of day
//         weekNum:"",
        
//         dayNumber:"1,2,3,4,5,6,7,8,9,10",
// },
// DATO:{
//     //Hours
//     ORA:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//     //Minutes
//     MINO:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
//     //Seconds
//     SEKO:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],
// }};

function days_passed(date) {
    var currentTime = new Date(date.getTime());
    var previousTime = new Date(date.getFullYear(), 0, 1);
    
    return Math.ceil(((currentTime - previousTime + 1) / 86400000));
  }


const printer = ()=>{
    // date.getTime() returns the milliseconds since the invention of it, in java script.
    const date = new Date();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // total passed seconds in a day
    const totalPassed = hours*3600 + minutes*60 + seconds;
    // converting total passed seconds to SEKO in 24 hours
    // each Seko is 0.96 seconds.
    const totalPassedSeko = totalPassed / 0.96;
    const totalPassedMino = totalPassedSeko /50;
    // Ora, Mino, Seko
    
    const currentOra = totalPassedMino/100;
    const currentMino =   ((currentOra) - (Math.floor(currentOra)))*100;
    const currentSeko =  ((totalPassedSeko.toFixed(0)/100 - Math.trunc(totalPassedSeko.toFixed(0)/100))*100).toFixed(0);
    
    time.innerHTML = `${Math.floor(currentOra)}<span class="animated">:</span>${Math.floor(currentMino)}<span class="animated">:</span>${currentSeko}`;
};

setInterval(printer,0960);
