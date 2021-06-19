
const btn = document.getElementById('calculate');

btn.addEventListener('click', function(e){
    e.preventDefault();
    clearResults();
    calculateSupport();
    calculateBar();
    calculateRunner();
    calculateTotal();
    
})


function calculateSupport(){
    let netSales = parseInt(document.getElementById('netSales').value);
    let supportSplit = document.getElementById('supportStaff').value;
    let hostTip, busserOneTip;
    let hostResult = document.getElementById('hostResults');
    let busserOneResult = document.getElementById('busserOneResult');
    let busserTwoResult = document.getElementById('busserTwoResult');
    let preBusSales = parseInt(document.getElementById('preBusSales').value);
    var supportTipout;
    if(supportSplit === 'oneHost' && netSales){
        hostTip = Math.round(netSales * .01);
        hostResult.innerHTML = 'Host: $' + hostTip;
        supportTipout = hostTip;
    } else if (supportSplit === 'oneHostOneBus'){
        hostTip = Math.round(netSales * .0075);
        busserOneTip = Math.round((netSales - preBusSales) * .0075);
        hostResult.innerHTML = 'Host: $' + hostTip;
        busserOneResult.innerHTML = 'Busser 1: $' + busserOneTip;
        supportTipout = hostTip + busserOneTip;
    } else if (supportSplit === 'oneHostTwoBus'){
        hostTip = Math.round(netSales * .0075);
        busserTip = Math.round(netSales * .005);
        hostResult.innerHTML = 'Host: $' + hostTip;
        busserOneResult.innerHTML = 'Busser 1: $' + busserTip;
        busserTwoResult.innerHTML = 'Busser 2: $' + busserTip;
        supportTipout = hostTip + (busserTip * 2);
    }
    return supportTipout;
}

function calculateBar(){
    let barSales = parseInt(document.getElementById('barSales').value)
    let numOfBartenders = parseInt(document.getElementById('numOfBartenders').value);
    let barTipout = Math.round(barSales * .05);
    let barResult = document.getElementById('barResult');
    if(numOfBartenders === 1){
        barResult.innerHTML = 'Bartender: $' + barTipout;
    } else if (numOfBartenders === 2){
        barResult.innerHTML = `\$${barTipout / 2} per Bartender`
    }
    return barTipout;
}

function calculateRunner(){
    let foodRunnerTip = parseInt(Math.ceil(document.getElementById('foodRunnerHours').value));
    let foodRunnerDisplay = document.getElementById('foodRunnerResults');
    foodRunnerDisplay.innerHTML = 'Food Runner: $' + foodRunnerTip;
    return foodRunnerTip;
}

async function calculateTotal(){
    
    const supportTip = await calculateSupport();
    const barTip = await calculateBar();
    const foodRunnerTip = await calculateRunner();
    let totalTipout = supportTip + barTip + foodRunnerTip;
    
    let totalDisplay = document.getElementById('totalTipout');
    
    totalDisplay.innerHTML = 'Total Tipout: $' + totalTipout;
}

function clearResults(){
    let totalDisplay = document.getElementById('totalTipout');
    let barResult = document.getElementById('barResult');
    let hostResult = document.getElementById('hostResults');
    let busserOneResult = document.getElementById('busserOneResult');
    let busserTwoResult = document.getElementById('busserTwoResult');
    totalDisplay.innerHTML = '';
    barResult.innerHTML = '';
    hostResult.innerHTML = '';
    busserOneResult.innerHTML = '';
    busserTwoResult.innerHTML = '';
}