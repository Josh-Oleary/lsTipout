
const btn = document.getElementById('calculate');

btn.addEventListener('click', function(e){
    e.preventDefault();
    calculateSupport();
    calculateBar();
})


// function calculateTotal(){
//     let total = document.getElementById('billTotal');
//     let service = document.getElementById('rateService').value;
//     let split = document.getElementById('split');
//     let percent;
//     if(service === 'Good'){
//         percent = .2;
//     } else if(service === 'Great'){
//         percent = .25;
//     } else if(service === 'Incredible'){
//         percent = .3;
//     }
//     total = parseInt(total.value);
//     split = parseInt(split.value);
//     let tip = total * percent;
//     let grandTotal = total + tip;
//     let perPerson = grandTotal / split;
//     document.getElementById('result').innerHTML = perPerson + ' Per Person';
// }

function calculateSupport(){
    let netSales = parseInt(document.getElementById('netSales').value);
    let supportSplit = document.getElementById('supportStaff').value;
    let hostTip, busserOneTip, busserTwoTip;
    let hostResult = document.getElementById('hostResults');
    let busserOneResult = document.getElementById('busserOneResult');
    let busserTwoResult = document.getElementById('busserTwoResult');
    if(supportSplit === 'oneHost'){
        hostTip = Math.round(netSales * .01);
        hostResult.innerHTML = 'Host: $' + hostTip; 
    } else if (supportSplit === 'oneHostOneBus'){
        hostTip = Math.round(netSales * .0075);
        busserOneTip = Math.round(netSales * .0075);
        hostResult.innerHTML = 'Host: $' + hostTip;
        busserOneResult.innerHTML = 'Busser 1: $' + busserOneTip;
    } else if (supportSplit === 'oneHostTwoBus'){
        hostTip = Math.round(netSales * .0075);
        busserTip = Math.round(netSales * .005);
        hostResult.innerHTML = 'Host: $' + hostTip;
        busserOneResult.innerHTML = 'Busser 1: $' + busserTip;
        busserTwoResult.innerHTML = 'Busser 2: $' + busserTip;
    }
}

function calculateBar(){
    let barSales = parseInt(document.getElementById('barSales').value)
    let numOfBartenders = parseInt(document.getElementById('numOfBartenders').value);
    let barTipout = barSales * .05;
    let barResult = document.getElementById('barResult');
    if(numOfBartenders === 1){
        barResult.innerHTML = 'Bartender: $' + barTipout;
    } else if (numOfBartenders === 2){
        barResult.innerHTML = `\$${barTipout / 2} per Bartender`
    }
}