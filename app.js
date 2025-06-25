let count1 = localStorage.getItem("count1") ? parseInt(localStorage.getItem("count1")) : 0;
let count2 = localStorage.getItem("count2") ? parseInt(localStorage.getItem("count2")) : 0;
let count3 = localStorage.getItem("count3") ? parseInt(localStorage.getItem("count3")) : 0;

document.getElementById("vote1").innerText = "Votes: " + count1;
document.getElementById("vote2").innerText = "Votes: " + count2;
document.getElementById("vote3").innerText = "Votes: " + count3;


function vote1() 
{
    count1++;
    localStorage.setItem("count1", count1);
    document.getElementById("vote1").innerText = "Votes: " + count1;
}

function vote2() 
{
    count2++;
    localStorage.setItem("count2", count2);
    document.getElementById("vote2").innerText = "Votes: " + count2;
}

function vote3() 
{
    count3++;
    localStorage.setItem("count3", count3);
    document.getElementById("vote3").innerText = "Votes: " + count3;
}
function resetVotes() 
{
    count1 = 0;
    count2 = 0;
    count3 = 0;
    localStorage.setItem("count1", count1);
    localStorage.setItem("count2", count2);
    localStorage.setItem("count3", count3);
    document.getElementById("vote1").innerText = "Votes: 0";
    document.getElementById("vote2").innerText = "Votes: 0";
    document.getElementById("vote3").innerText = "Votes: 0";
}
