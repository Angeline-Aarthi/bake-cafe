import Img1 from "./images/cake.jpg";
import Img2 from "./images/cookies.jpg";
import Img3 from "./images/donuts.jpg";

import Cat1 from "./images/sandwich.jpg";
import Cat2 from "./images/hamburger.jpg";
import Cat3 from "./images/cakeslice.jpg";
import Cat4 from "./images/shakes.jpg";
import Cat5 from "./images/pastry.jpg";

import Prod1 from "./images/burger1.jpg";
import Prod2 from "./images/donut1.jpg";
import Prod3 from "./images/icedtea1.jpg";
import Prod4 from "./images/nuggets1.jpg";
import Prod5 from "./images/cupcake1.jpg";
import Prod6 from "./images/pizza.jpg";
import Prod7 from "./images/frenchfry1.jpg";
import Prod8 from "./images/strawberryshake.jpg";

export const sliderItems = [
    {
        id: 1,
        title: "Weekend Sale",
        desc: "Get Flat 10%  on all cakes",
        buttonText: "SHOW NOW",
        img: Img1,
        bgColor: "#CACACA"
    },
    {
        id: 2,
        title: "Bulk Offers",
        desc: "Get Flat 15%  on bulk orders!",
        buttonText: "SHOW DETAILS",
        img: Img2,
        bgColor: "#fbf0f4"
    },
    {
        id: 3,
        title: "Event Offers",
        desc: "Get Customised offers for your special events",
        buttonText: "LEARN MORE",
        img: Img3,
        bgColor: "#fcf1ed"
    },
];
export const sliderStartNum = 0;
export const sliderEndNum = sliderItems.length - 1;

export const categories = [
    {
        id: 1,
        img: Cat1,
        title: "Sandwiches"
    },
    {
        id: 2,
        img: Cat2,
        title: "Burgers"
    },
    {
        id: 3,
        img: Cat3,
        title: "Cakes"
    },
    {
        id: 4,
        img: Cat4,
        title: "Shakes"
    },
    {
        id: 5,
        img: Cat5,
        title: "Pastries"
    },
];

export const popularProducts = [
    {
        id: 1,
        img: Prod1
    },
    {
        id: 2,
        img: Prod2
    },
    {
        id: 3,
        img: Prod3
    },
    {
        id: 4,
        img: Prod4
    },
    {
        id: 5,
        img: Prod5
    },
    {
        id: 6,
        img: Prod6
    },
    {
        id: 7,
        img: Prod7
    },
    {
        id: 8,
        img: Prod8
    },
]