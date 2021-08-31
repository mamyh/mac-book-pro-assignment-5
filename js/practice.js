//variables
const memory8gb = getVariableById('8gb-memory');
const memory16gb = getVariableById('16gb-memory');

const storage256gb = getVariableById('256gb-storage');
const storage512gb = getVariableById('512gb-storage');
const storage1tb = getVariableById('1tb-storage');

const deliveryFree = getVariableById('free-delivery');
const deliveryFast = getVariableById('fast-delivery');

const defaultPrice = getVariableById('best-price');
const memoryPrice = getVariableById('memory-price');
const storagePrice = getVariableById('storage-price');
const deliveryPrice = getVariableById('delivery-price');
const totalPrice = getVariableById('total-price');

const promoInput = getVariableById('promo-input');
const promoBtn = getVariableById('promo-btn');
let countPromo = 0;

const totalWithPromo = getVariableById('total-with-promo');

let memoryTotalPrice = 0;
let storageTotalPrice = 0;
let deliveryTotalPrice = 0;
// get the variable by id 
function getVariableById(id) {
    return document.getElementById(id);
}
//memoryCalculation
function memoryCalculation(selectPrice = 0) {
    let defaultMemoryPrice = 0;
    defaultMemoryPrice += selectPrice;
    memoryPrice.innerText = selectPrice;
    memoryTotalPrice = defaultMemoryPrice;
    totalCalculation()

}
//storage calculation
function storageCalculation(selectPrice = 0) {
    let defaultStoragePrice = 0;
    defaultStoragePrice += selectPrice;
    storagePrice.innerText = selectPrice;
    storageTotalPrice = defaultStoragePrice;
    totalCalculation();
}
//delivery calculation
function deliveryCalculation(selectPrice = 0) {
    let defaultDeliveryPrice = 0;
    defaultDeliveryPrice += selectPrice;
    deliveryPrice.innerText = selectPrice;
    deliveryTotalPrice = defaultDeliveryPrice;
    totalCalculation();
}
// calculation of twenty percentage  
function calculatePercentage(percentage) {
    let totalPriceToPercentage = parseFloat(totalWithPromo.innerText);
    let result = (totalPriceToPercentage * percentage) / 100;
    totalWithPromo.innerText = totalPriceToPercentage - result;
}
// total calculation 
function totalCalculation() {
    let totalcalcPrice = parseInt(defaultPrice.innerText);
    totalcalcPrice += memoryTotalPrice + storageTotalPrice + deliveryTotalPrice;
    totalPrice.innerText = totalcalcPrice;
    totalWithPromo.innerText = totalcalcPrice;
}

//memory event listeners
memory8gb.addEventListener('click', function () {
    memoryCalculation();
});
memory16gb.addEventListener('click', function () {
    memoryCalculation(180);

});

//storage event listeners
storage256gb.addEventListener('click', function () {
    storageCalculation();
})
storage512gb.addEventListener('click', function () {
    storageCalculation(100);
})
storage1tb.addEventListener('click', function () {
    storageCalculation(180);
});

//delivery event listeners
deliveryFree.addEventListener('click', function () {
    deliveryCalculation()
});
deliveryFast.addEventListener('click', function () {
    deliveryCalculation(20);
});

//promo  event listeners
promoBtn.addEventListener('click', function () {
    if (promoInput.value === "stevekaku") {
        promoInput.value = '';
        if (countPromo === 0) {
            countPromo++;
            calculatePercentage(20);
        } else {
            console.log('can not apply promo again and again');
        }
    } else {
        console.log('invalid token');
    }
})
