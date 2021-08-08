function displayROI() {
    var rate = document.getElementById("rate").value;
    document.getElementById("roi").innerHTML = rate;
};

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(principal <=0 ) {
        alert("enter a positive number");
        document.getElementById('principal').focus();
    }
    
    var simpleInterest = parseInt(principal * rate * years)/100;
    var year =  new Date().getFullYear() + parseInt(years);

    document.getElementById("deposit").innerHTML = principal;
    document.getElementById("interest").innerHTML = rate;
    document.getElementById("amount").innerHTML = simpleInterest;
    document.getElementById("year").innerHTML = year;
}        