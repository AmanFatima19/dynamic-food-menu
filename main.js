let data = {
    products:[ 
     {
       "id" : 1,
       "title" : "Buttermilk Pancakes",   
       "description" : "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
       "category" : "Breakfast",
       "price" : "$15.99",
       "tags" :  [
        "breakfast",
        "Buttermilk Pancakes"
       ],
       "image":"https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg"
    },
    {
        "id" : 2,
        "title" : "Diner Double",   
        "description" : "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        "category" : "Lunch",
        "price" : "$13.99",
        "tags" :  [
         "Lunch",
         "Dinner Double"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg"
    } ,
    {
        "id" : 3,
        "title" : "Godzilla Milkshake",   
        "description" : "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        "category" : "Shakes",
        "price" : "$6.99",
        "tags" :  [
         "Shakes",
         "Godzilla"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg"
    } ,
    {
        "id" : 4,
        "title" : "Country Delight",   
        "description" : "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        "category" : "Breakfast",
        "price" : "$20.99",
        "tags" :  [
         "Breakfast",
         "country delight"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg"
    } ,
    {
        "id" : 5,
        "title" : "Egg Attack",   
        "description" : "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        "category" : "Lunch",
        "price" : "$22.99",
        "tags" :  [
         "Lunch",
         "Egg attack"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg"
    } ,
    {
        "id" : 6,
        "title" : "Oreo Dream",   
        "description" : "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        "category" : "Shakes",
        "price" : "$18.99",
        "tags" :  [
         "Shakes",
         "Oreo Dream"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg"
    } ,
    {
        "id" : 7,
        "title" : "Bacon Overflow",   
        "description" : "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        "category" : "Breakfast",
        "price" : "$8.99",
        "tags" :  [
         "Breakfast",
         "Bacon overflow"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg"
    } ,
    {
        "id" : 8,
        "title" : "American Classic",   
        "description" : "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        "category" : "Lunch",
        "price" : "$12.99",
        "tags" :  [
         "Lunch",
         "American Classic"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg"
    } ,
    {
        "id" : 9,
        "title" : "Quarantine Buddy",   
        "description" : "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        "category" : "Shakes",
        "price" : "$16.99",
        "tags" :  [
         "Shakes",
         "quarantine"
        ],
        "image":  "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg"
    } 
]
}
let products = document.querySelector(".item-wrapper");
 function getProducts(){
    let mappedData = data.products.map((value)=>{
        return `<div class="container">
         <div class="item-img">
          <img src="${value.image}" alt="" />
         </div>
          <div class="item-desc">
          <div class="item-title">
            <h3>${value.title}</h3>
            <button>${value.price}</button>
          </div>
          <p>${value.description}</p>
        </div>
       </div>`
    }).join("");
    products.innerHTML = mappedData;
 }
 getProducts();


 function getBreakfastItems(){
 let filteredData = data.products.filter((value)=>value.category === "Breakfast");
let mappedData = filteredData.map((value)=>{
    return `<div class="container">
     <div class="item-img">
      <img src="${value.image}" alt="" />
     </div>
      <div class="item-desc">
      <div class="item-title">
        <h3>${value.title}</h3>
        <button>${value.price}</button>
      </div>
      <p>${value.description}</p>
    </div>
   </div>`
}).join("");
products.innerHTML = mappedData;
 }


function getLunchItems(){
 let filteredData = data.products.filter((value)=>value.category === "Lunch");
 let mappedData = filteredData.map((value)=>{
    return `<div class="container">
     <div class="item-img">
      <img src="${value.image}" alt="" />
     </div>
      <div class="item-desc">
      <div class="item-title">
        <h3>${value.title}</h3>
        <button>${value.price}</button>
      </div>
      <p>${value.description}</p>
    </div>
   </div>`
}).join("");
products.innerHTML = mappedData;
}


function getShakeItems(){
let filteredData = data.products.filter((value)=>value.category === "Shakes");
let mappedData = filteredData.map((value)=>{
    return `<div class="container">
     <div class="item-img">
      <img src="${value.image}" alt="" />
     </div>
      <div class="item-desc">
      <div class="item-title">
        <h3>${value.title}</h3>
        <button>${value.price}</button>
      </div>
      <p>${value.description}</p>
    </div>
   </div>`
}).join("");
products.innerHTML = mappedData;
}
