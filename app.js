
let count1 = localStorage.getItem("count1") ? parseInt(localStorage.getItem("count1")) : 0;
let count2 = localStorage.getItem("count2") ? parseInt(localStorage.getItem("count2")) : 0;
let count3 = localStorage.getItem("count3") ? parseInt(localStorage.getItem("count3")) : 0;

document.getElementById("vote1").innerText = "Votes: " + count1;
document.getElementById("vote2").innerText = "Votes: " + count2;
document.getElementById("vote3").innerText = "Votes: " + count3;


function vote1() 
{
    if(confirm("Are you sure you want to vote for Picture 1?"))
    {
        count1++;
        localStorage.setItem("count1", count1);
        document.getElementById("vote1").innerText = "Votes: " + count1;
        disableAllButtons();
        showThankYou()
    }
}

function vote2() 
{
    if(confirm("Are you sure you want to vote for Picture 2?"))
    {
        count2++;
        localStorage.setItem("count2", count2);
        document.getElementById("vote2").innerText = "Votes: " + count2;
        disableAllButtons();
        showThankYou()
    }
}

function vote3() 
{
    if(confirm("Are you sure you want to vote for Picture 3?"))
    {
        count3++;
        localStorage.setItem("count3", count3);
        document.getElementById("vote3").innerText = "Votes: " + count3;
        disableAllButtons();
        showThankYou()
    }
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
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("vote1").style.visibility = "hidden";
    document.getElementById("vote2").style.visibility = "hidden";
    document.getElementById("vote3").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("show").style.visibility = "hidden";
}
function showVotes()
{
    document.getElementById('vote1').style.visibility='visible'
    document.getElementById('vote2').style.visibility='visible'
    document.getElementById('vote3').style.visibility='visible'
}
function disableAllButtons() 
{
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById('reset').style.visibility='visible'
    document.getElementById('show').style.visibility='visible'
}
function showThankYou() 
{
    document.getElementById('thankYouBox').style.visibility='visible'
    setTimeout(() => 
    { document.getElementById('thankYouBox').style.visibility = 'hidden';}, 1000);
}

function enter()
{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) 
    {
        alert(`Signed in as: ${email}`);
        window.location.href = "dashboard.html";
    } 
    else 
    {
        alert('Please enter both email and password.');
    }
}
function signup()
{
    document.getElementById('main').innerHTML=`
    <h3>SIGN UP</h3>
    <br>
    <form>
        <input placeholder="Enter E-Mail ID" class="form-control mt-2" type="email" required id="email">
        <input placeholder="Enter Password" class="form-control mt-2" type="password" required id="password">
        <br> <br>
        <button type="button" class="btn btn-primary w-100 mb-2" onclick="enter()" id="btn1">Sign Up</button>
        <p>
            Already have an account? 
            <button type="button" class="btn btn-dark" onclick="signin()" id="btn2">Sign In</button>
        </p>
    </form>`
}
function signin()
{
    document.getElementById('main').innerHTML=`
    <h3>SIGN IN</h3>
    <br>
    <form>
        <input placeholder="Enter E-Mail ID" class="form-control mt-2" type="email" required id="email">
        <input placeholder="Enter Password" class="form-control mt-2" type="password" required id="password">
        <br> <br>
        <button type="button" class="btn btn-primary w-100 mb-2" onclick="enter()" id="btn1">Sign In</button>
        <p>
            Don't have an account? 
            <button type="button" class="btn btn-dark" onclick="signup()" id="btn2">Sign Up</button>
        </p>
    </form>`
}
