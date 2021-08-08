function displayROI() {
    var rate = document.getElementById("rate").value;
    document.getElementById("roi").innerHTML = rate;
};

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(parseInt(principal) <= 0 ) {
        window.alert("enter a positive number");
        document.getElementById('principal').focus();
        document.getElementById('displayText').style.display =  'none';
    } else {
        document.getElementById('displayText').style.display =  'block';
    }
    
    var simpleInterest = parseInt(principal * rate * years)/100;
    var year =  new Date().getFullYear() + parseInt(years);

    document.getElementById("deposit").innerHTML = principal;
    document.getElementById("interest").innerHTML = rate;
    document.getElementById("amount").innerHTML = simpleInterest;
    document.getElementById("year").innerHTML = year;
}        