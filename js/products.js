// Create the array of product objects

const products = [

    {
        name: "Product1",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/goatee1.jpg"
    },
    {
        name: "Product2",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/grandpa3.jpg"
    },
    {
        name: "Product3",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/goatastic4.jpg"
    },
    {
        name: "Product4",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/gypsy5.jpg"
    },
    {
        name: "Product5",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/greatgoat6.jpg"
    },
    {
        name: "Product6",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/gitter7.jpg"
    },
    {
        name: "Product7",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/grassy8.jpg"
    },
    {
        name: "Product8",
        description: "Spicy jalapeno bacon ipsum dolor amet tongue shankle tenderloin, meatloaf turkey shank flank swine beef. Shank swine pastrami chicken ground round pork loin. Turducken meatball alcatra, sirloin beef ribs pork drumstick kielbasa corned beef chicken chuck andouille capicola. ",
        price: "$9,999.99",
        url: "images/grassman9.jpg"
    }
];

//get div
const parent = document.getElementById("parent");

//iterate
for (let product in products) {

//get keys and access values
//and build up the string all at once

    let card = `<article
                class="products">
                <h2>${products[product].name}</h2>
                <img src="${products[product].url}" class="prod-pic" alt="product">
                <p>Description:</p>
                <p>${products[product].description}</p>
                <p>Price:</p>
                <p>${products[product].price}</p>
                </article>`;

 //put it in the div

        parent.innerHTML += card;
};