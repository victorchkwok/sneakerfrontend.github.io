const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products =[
    {
        id: 1,
        img: "./Simg/SBj4.webp",
        Title: "AIR JORDAN 4 x SB",
        Price: "$400",
        Desc: "Nike SB’s collaboration with Jordan helps create the ultimate sneaker for the skatepark to the basketball court, with the release of the Jordan 4 Retro SB Pine Green. The Jordan 4 Retro SB Pine Green used a white leather upper with a Neutral Grey suede mudguard. The limited edition sneakers sit on top of a white and Pine Green midsole which is highlighted by a red air unit. Nike used a gum outsole to help with increased grip while skateboarding. \n \n"
        , SKU: "SKU: DR5415-103"

    }
    ,{
        id: 2,
        img: "./Simg/SatinAJ1.webp",
        Title: "AIR JORDAN 1 Satin Bred",
        Price: "$180",
        Desc: "Unveiling the epitome of timeless design with the Jordan 1 Retro High OG Satin Bred (Women's) in the ever-classic Black/University Red/White colorway. The sophisticated satin finish adorns the iconic silhouette, exuding a blend of vintage charm and modern-day chic. Every step in these sneakers resonates with the legacy of the Jordan brand, making a bold statement in today's fashion scene. The contrasting hues of black and university red, punctuated with white accents, embody a narrative of enduring style and basketball heritage. \n \n"
        , SKU: "SKU: FD4810-061"
    }
    ,{
        id: 3,
        img: "./Simg/CraftAJ4.webp",
        Title: "AIR JORDAN 4 Craft",
        Price: "$250",
        Desc: "The Air Jordan 4 SE Phototon Dust is constructed with leather and suede uppers consisting of various shades of grey. Jordan Brand is changing directions with the Air Jordan 4s mesh cage and replacing it with a soft suede and a cracked leather cage wing."
        , SKU: "SKU: DV3742-021"
        
    }
    ,{
        id: 4,
        img: "./Simg/PinkAJ1.jpg",
        Title: "AIR JORDAN 1 Washed Pink",
        Price: "$180",
        Desc: "​The Air Jordan 1 Retro High OG Washed Pink is constructed using pink suede and white leather across the uppers, with muslin and sail accents around the collar and midsole to help give the sneaker a vintage themed look. White laces tie the sneaker together over the muslin colored tongue."
        , SKU: "SKU: FD2596-600"
    }
    ,{
        id: 5,
        img: "./Simg/RedCAJ4.webp",
        Title: "AIR JORDAN 4 Red Cement",
        Price: "$250",
        Desc: "Constructed with white premium leather uppers, a mix of fire red and black is applied throughout, while the iconic mesh detailing and Jumpman logo retain their traditional placements. Sat atop a black, white, and fire red midsole, the style stays true to its roots, showcasing why the Jordan 4 model remains one of the most iconic Jordan models of all time."
        , SKU: "SKU: DH6927-161"
    }
    ,{
        id: 6,
        img: "./Simg/ELEAJ1LOW.jpeg",
        Title: "AIR 1 low Elephant",
        Price: "$140",
        Desc: "Sporting an impressive black upper, with iconic elephant print overlays on the heel and toe box these kicks are crafted from a mix of high-grade leather and suede, boasting durability and sophistication. Complementing the uppers is a clean white midsole, offering a stark contrast and enhancing the sneaker's visual appeal. A Nike Air logo resides on the tongue, adding a dash of bold color to the muted palette. The Jordan 1 Retro Low OG Black Cement promises a fitting tribute to the legacy of Jordan Brand."
        , SKU: "SKU: CZ0790-001"
    }
    ,{
        id: 7,
        img: "./Simg/AMAAJ12.webp",
        Title: "AIR JORDAN 12 A Ma Maniere",
        Price: "$200",
        Desc: "​A Ma Maniére is using nothing but the best quality materials on their latest collaboration, using premium black nubuck on the uppers, and burgundy suede mudguards. The limited edition sneakers are tied together with black wax rope laces and come with an A Ma Maniére branded keychain."
        , SKU: "SKU: DV6989-001"
    }
]//https://www.youtube.com/watch?v=b3Gqq_k-g24

let choosenProduct = products[0];

const curProductImg = document.querySelector(".productImg");
const curProductTitle = document.querySelector(".productTitle");
const curProductPrice = document.querySelector(".productPrice");
const curProductDesc = document.querySelector(".productDesc");
const curProductSKU = document.querySelector(".SKU");


menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{

        //transition change
        console.log("you clicked!");
        wrapper.style.transform = `translateX(${-70 * index}vw)`;
        
        // choose product
        choosenProduct = products[index];
        curProductTitle.textContent =  choosenProduct.Title;
        curProductImg.src = choosenProduct.img; 
        curProductPrice.textContent = choosenProduct.Price;
        curProductDesc.textContent = choosenProduct.Desc;
        curProductSKU.textContent = choosenProduct.SKU;



    });
});


const buyButtons = document.querySelectorAll('.buyButton');

// Get the payment div element
const paymentDiv = document.querySelector('.payment');
const closeButton = document.querySelector('.close');
const pay= document.querySelector('.payButton');
buyButtons.forEach(button => {
button.addEventListener('click', () => {
    // Toggle the visibility of the payment div
    paymentDiv.style.display = "block";
  });

closeButton.addEventListener('click', () => {
    // Toggle the visibility of the payment div
    paymentDiv.style.display = "none";
});
pay.addEventListener('click', () => {
    // Toggle the visibility of the payment div
    paymentDiv.style.display = "none";
});
});