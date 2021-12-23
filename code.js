const foodArr = [{ id: 1, src: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-chicken-bacon-signature-mcwrap-crispy.jpg?$Product_Desktop$", header: "Chicken & Bacon McWrap with Crispy Chicken", caleri: "600 Cals", discrie: "Made with 100% Canadian raised seasoned chicken breast topped with shredded lettuce, sliced tomato, hickory-smoked bacon and mayo-style sauce. All wrapped up in a soft whole wheat flour tortilla. Available in grilled or crispy." }, { id: 2, src: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-blt-chicken-crispy.jpg?$Product_Desktop$", header: "BLT with Crispy Chicken", caleri: "690 Cals", discrie: "Made with Canadian grain-fed chicken breast, with two full strips of bacon, crisp lettuce, tomato & creamy Mayo-Style Sauce on a Brioche-style bun. Grilled or crispy. It’s like seriously good chicken." },
    { id: 3, src: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-6pc-spicy-nuggets.jpg?$Product_Desktop$", header: "6 Spicy Chicken McNuggets", caleri: "250 Cals", discrie: "No artificial flavours, colours or preservatives. Made with 100% seasoned chicken breast, the Spicy Chicken McNuggets® are ones you crave breaded with a spicy habanero heat." }
];
let idNum = 0;
let image = document.querySelector("#img");
let myHead = document.querySelector("h3");
let cals = document.querySelector("#caleri");
let des = document.querySelector("#discribee");

function next() {
    idNum = idNum + 1;
    for (let i = 0; i < foodArr.length; i++) {
        let foodId = foodArr[i].id;
        let food = foodArr[i];
        if (foodId == idNum) {
            img.src = food.src;
            myHead.innerText = food.header;
            cals.innerHTML = food.caleri;
            des.innerHTML = food.discrie;
            return;
        }
    }
}

function back() {
    idNum = idNum - 1;
    for (let i = 0; i < foodArr.length; i++) {
        let foodId = foodArr[i].id;
        let food = foodArr[i];
        if (foodId == idNum) {
            img.src = food.src;
            myHead.innerText = food.header;
            cals.innerHTML = food.caleri;
            des.innerHTML = food.discrie;
            return;
        }
    }
}

function suprise() {
    idNum = randomNum();
    for (let i = 0; i < foodArr.length; i++) {
        let foodId = foodArr[i].id;
        let food = foodArr[i];
        if (foodId == idNum) {
            img.src = food.src;
            myHead.innerText = food.header;
            cals.innerHTML = food.caleri;
            des.innerHTML = food.discrie;
            return;
        }
    }
}

function randomNum() {
    return Math.floor(Math.random() * foodArr.length + 1);
}