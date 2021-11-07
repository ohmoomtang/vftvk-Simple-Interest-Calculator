function compute()
{
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var displayedYear = new Date().getFullYear()+parseInt(years);
    var interestObtained = (amount*rate*years)/100;
    
    document.getElementById("result").innerHTML = 
    "if you deposit <mark>" + amount + "</mark>,<br />at an interest rate of <mark>" + rate + "%</mark>.<br />You will receive an amount of <mark>" + interestObtained + "</mark>,<br />in the year <mark>" + displayedYear + "</mark>";
}

function updateInterestRateValue(){
    var rate = document.getElementById("rate").value;
    document.getElementById("interestRateValue").innerHTML = parseFloat(rate).toFixed(2) + "%";
}
        