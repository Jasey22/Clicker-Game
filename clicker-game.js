var cookies = 0;

function clicked() {
    cookies = cookies + 1;
    document.getElementById("totalCookies").innerText = cookies;
}
var bakers = 0;

function clicked1() {
    var bakersAmount = Math.floor(20 * Math.pow(1.1, bakers));
    if(cookies >= bakersAmount) {
        cookies = cookies - bakersAmount;
        bakers = bakers + 2;
        

        document.getElementById("totalCookies").innerHTML = cookies;
        document.getElementById("totalBakers").innerHTML = bakers;
        cookiespersecond();
    };
    var nextBakersCost = Math.floor(20 * Math.pow(1.1, bakers));
    document.getElementById("nextBakerCost").innerHTML = nextBakersCost;  
}
var chef = 0;
var chefAmount = 50;

function clicked2() {
    var chefAmount = Math.floor(50 * Math.pow(1.1, chef));
    if (cookies >= chefAmount) {
        cookies = cookies - chefAmount;
        chef = chef + 5;
        
        document.getElementById("totalChef").innerHTML = chef;
        document.getElementById("totalCookies").innerHTML = cookies;
        cookiespersecond();
    }
    var nextChefCost = Math.floor(50 * Math.pow(1.1, chef));
    document.getElementById("chefNextCost").innerHTML = nextChefCost;
}
function cookiespersecond() {
        cps = bakers + chef;
        document.getElementById("cps").innerHTML = cps;
}
setInterval(function() {
      cookies = cookies + bakers + chef * 1;
      document.getElementById("totalCookies").innerHTML = cookies;
}, 1000);