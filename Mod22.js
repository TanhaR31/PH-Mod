// Funtion 1
function seerToMon(seer) {
    if (typeof (seer) !== 'number') {
        return "Please Type 1 Number For 1st Function !!!";
    }
    else {
        const mon = seer / 40;
        return mon;
    }
}
console.log(seerToMon('40'));
console.log(seerToMon(40));
console.log('');

// Funtion 2
function totalSales(shirtQ, pantQ, shoeQ) {
    if (typeof (shirtQ) !== 'number' || typeof (pantQ) !== 'number' || typeof (shoeQ) !== 'number') {
        return "Please Type 3 Numbers For 2nd Function !!!";
    }
    else {
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoePrice = 500;

        totalPrice = shirtPrice * shirtQ + pantPrice * pantQ + shoePrice * shoeQ;

        return totalPrice;
    }
}
console.log(totalSales('1', 1, 1));
console.log(totalSales(1, 1, 1));
console.log('');

// Funtion 3
function deliveryCost(product) {
    if (typeof (product) !== 'number') {
        return "Please Type 1 Number For 3rd Function !!!";
    }
    else {
        const first100 = 100;
        const second100 = 80;
        const rest = 50;

        if (product <= 100) {
            const firstPrice = first100 * product;
            const totalPrice = firstPrice;
            return totalPrice;
        }
        else if (product > 100 && product <= 200) {
            const firstPrice = first100 * 100;
            const secondPrice = second100 * (product - 100);
            const totalPrice = firstPrice + secondPrice;
            return totalPrice;
        }
        else {
            const firstPrice = first100 * 100;
            const secondPrice = second100 * 100;
            const restPrice = rest * (product - 200);
            const totalPrice = firstPrice + secondPrice + restPrice;
            return totalPrice;
        }
    }
}
console.log(deliveryCost('201'));
console.log(deliveryCost(201));
console.log('');

// Funtion 4
function perfectFriend(names) {
    if (typeof (names) !== 'object') {
        return "Please Give An Array Of Friends Name For Last Function !!!";
    }
    else {
        for (const name of names) {
            if (name.length == 5) {
                var friend = name;
                break;
            }
        }
        return friend;
    }
}
console.log(perfectFriend('Titan'));
console.log(perfectFriend(['Tita', 'Titan', 'Tanha']));