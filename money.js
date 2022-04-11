let bills = [];
let coins = [];
let sumCents = 0;
let comparingSum = 0;
let sumEuro = 0;
let i = 0;
const nominals = [50, 20, 10, 5, 2, 1];
let resultMoney = "";

function Result() {
    let initMoney = eval(document.getElementById("init").value);
    let price = eval(document.getElementById("price").value);
    // calculation of remaining sum
    let remainMoney = initMoney - price;
    remainMoney = remainMoney.toFixed(2);
    // devision remaining sum for euros and cents
    remainMoney = remainMoney.toString();
    let pointIndex = remainMoney.indexOf(".");
    let euros = remainMoney.slice(0, pointIndex);
    let cents = remainMoney.slice(pointIndex + 1);
    
    // bills search and appending it in the array   
    for (;nominals[i];) {
        comparingSum = sumEuro + nominals[i];
        while (comparingSum <= euros) {
            sumEuro = sumEuro + nominals[i];
            bills.push(nominals[i]);
            comparingSum = sumEuro + nominals[i];
        }
        if (sumEuro === euros) {
            break;
        }
        i++;       
    } 
    // cents search and appending it in the array  
    i = 0;
    comparingSum = 0;
    for (;nominals[i];) {
        comparingSum = sumCents + nominals[i];
        while (comparingSum <= cents) {
            sumCents = sumCents + nominals[i];
            coins.push(nominals[i]);
            comparingSum = sumCents + nominals[i];
        }
        if (sumCents === cents) {
            break;
        }
        i++;       
    }
    // put the result string (resultMoney) in HTML output 
    bills.forEach(StringEuro);
    coins.forEach(StringCoins);
    document.getElementById("output").value = resultMoney;
}

//the function for adding bills with indication of currency to the result string (resultMoney) 
function StringEuro(item) {
    resultMoney += item + " " + "euros\n" + " ";
}
//the function for adding coins with indication of currency to the result string (resultMoney)
function StringCoins(item) {
    resultMoney += item + " " + "cents\n" + " ";
}