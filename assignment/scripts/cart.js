const maxItems = 5;

console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( str ) {
    if (!isFull()) {
        basket.push(str);
        return true;
    }
    return false;
}

// Tests
let str = 'blueberries';
console.log(`Did we push ${str} to basket? ${addItem(str)}`)
console.log(`Double check: ${basket}`)
// what if str is blank string?
str = ''
// should contain the 'blueberries' from before and a blank string
console.log(`Did we push ${str} to basket? ${addItem(str)}`)
console.log(`Double check: ${basket}`) // note the comma, delimiting a second value which appears blank because it's the
// empty string
// direct inspection of the basket variable after running this, which shows the brackets and quotes, confirms it's there.
// maybe we wouldn't want to be able to add an empty string, but I'm going to allow it for now. We could simply
// filter it out with something like if (!str) return false;

function listItems() {
    for (let element of basket) {
        console.log(element)
    }
}
// tests
let copyBasket = basket.slice()
basket = [1,2,3,4,5]
listItems()
basket = copyBasket.slice()

// something about how I wrote this feels like it's not good practice. Hm.
function empty() {
    basket = []
}
// test that the basket is in fact empty:
empty()
listItems() // basket is empty, as we had hoped.

//           STRETCH GOALS          //


function isFull() {
    if (basket.length < maxItems) return false;
    return true;
}


function removeItem(str) {
    let idx = basket.indexOf(str);
    if (idx === -1) return null;
    return basket.splice(idx,1);
}

//tests for removeItem
basket = ['blueberries','strawberries','yams']
console.log(`What should be returned is null. Returned: ${removeItem('pizza')}`);
// test a case where it is in the list:
console.log(`What should be returned is 'strawberries'. Returned: ${removeItem('strawberries')}`);
listItems() // check that it is actually removed from basket

