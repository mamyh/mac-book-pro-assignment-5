// some global variables got from html 
//characteristics button variable
const memoryPart = variableById("memory-part");
const storagePart = variableById('storage-part');
const deliveryPart = variableById('delivery-part');
//calculation part variable
const bestPrice = variableById('best-price');
const memoryPrice = variableById('memory-price');
const storagePrice = variableById('storage-price');
const deliveryPrice = variableById('delivery-price');
const totalPrice = variableById('total-price');
//promo variable
const promoInput = variableById('promo-input');
const promoBtn = variableById('promo-btn');

//total with promo
const totalWithPromo = variableById('total-with-promo');

// commmon functions 
//get variable from id
function variableById(idName) {
    return document.getElementById(idName);
}
// calculate percenteage
function calculateTwentyPercentage() {
    const priceToCalculate = parseInt(totalPrice.innerText);
    return (priceToCalculate * 20) / 100;
}
//calculate your balance
function balanceCalcute(balance, thing) {
    let memory = 0;
    let storage = 0;
    let delivery = 0;
    let total = parseInt(totalPrice.innerText);
    //check the input values
    if (typeof balance != 'number') {
        return "Error ! balance can not be " + typeof balance;
    }
    if (balance < 0) {
        return "Error ! Balance must be positive number";
    }
    if (typeof thing != 'string') {
        return "Error ! thing can not be " + typeof thing;
    }
    //  increasing for memory 
    if (thing.toLocaleLowerCase() === "memory") {
        memory = balance;
        memoryPrice.innerText = String(balance);
    }
    //  increasing for storage 
    if (thing.toLocaleLowerCase() === "storage") {
        storage = balance;
        storagePrice.innerText = String(balance);
    }
    //increasing for delivery
    if (thing.toLocaleLowerCase() === "delivery") {
        delivery = balance;
        deliveryPrice.innerText = String(balance);
    }
    total = total + memory + storage + delivery;
    totalPrice.innerText = String(total);
}
// for the memory part 
memoryPart.addEventListener('click', function (e) {
    e.target.setAttribute('class', 'active')
    if (e.target.getAttribute('id') === "16gb-memory") {
        balanceCalcute(180, 'memory');
    } else {
        balanceCalcute(0, 'memory')
    }
});
//for the storage 
storagePart.addEventListener('click', function (e) {

    e.target.setAttribute('class', 'active');
    if (e.target.getAttribute('id') === "512gb-storage") {
        balanceCalcute(100, 'storage');
    }
    else if (e.target.getAttribute('id') === "1tb-storage") {
        balanceCalcute(180, 'storage');
    } else {
        balanceCalcute(0, 'storage')
    }
});
//for the delivery;
deliveryPart.addEventListener('click', function (e) {
    e.target.setAttribute('class', 'active');
    if (e.target.getAttribute('id') === "fast-delivery") {
        balanceCalcute(20, 'delivery');
    } else {
        balanceCalcute(0, 'delivery');
    }
});

//get the promo code 
promoBtn.addEventListener('click', function () {
    if (promoInput.value === '') {
        alert('Please input your promo');
        promoInput.focus();
    }
    if (promoInput.value.toLocaleLowerCase() === "stevekaku") {
        this.setAttribute('disabled', '');
        const twentyPercente = calculateTwentyPercentage();
        console.log(twentyPercente);
        totalWithPromo.innerText = parseFloat(totalPrice.innerText) - twentyPercente;
    }
})