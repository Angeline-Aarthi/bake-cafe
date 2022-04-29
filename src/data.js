import Img1 from "./images/cake.jpg";
import Img2 from "./images/cookies.jpg";
import Img3 from "./images/donuts.jpg";

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