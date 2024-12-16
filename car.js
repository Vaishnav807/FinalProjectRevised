const cars = [
    {
        image: "https://purepng.com/public/uploads/large/purepng.com-red-porsche-911-gt3-rs-4-carcarvehicletransportporsche-961524661235vbivb.png",
        name: "Porsche 911 GT3 RS",
        engine: "Engine: 4.0L Flat-6",
        horsepower: "Horsepower: 518 HP",
        time: "0-60 mph: 3.0 sec",
        speed: "Top Speed: 184 mph",
        price: "Price: From $241,300"
    },
    {
        image: "https://pngimg.com/d/nissan_PNG52.png",
        name: "Nissan GT-R Premium",
        engine: "Engine: 3.8L Twin Turbocharged V6",
        horsepower: "Horsepower: 565 HP",
        time: "0-60 mph: 3.0 sec",
        speed: "Top Speed: 196 mph",
        price: "Price: From $121,090"
    },

    {
        image: "https://www.pngarts.com/files/8/Ferrari-SF90-Stradale-PNG-Image-Background.png",
        name: "Ferrari SF90 Stradale",
        engine: "Engine: 90 degree 4.0L Twin Turbocharged V8",
        horsepower: "Horsepower: 769 HP",
        time: "0-60 mph: 2.5 sec",
        speed: "Top Speed: 211 mph",
        price: "Price: From $524,814"
    },

    {
        image: "https://images.carprices.com/pricebooks_data/usa/colorized/2025/BMW/View2/M8_Competition_Coupe/4.4L/258F_300.png",
        name: "BMW M8 Competition Coupe",
        engine: "Engine: 4.4L TwinPower Turbo V8",
        horsepower: "Horsepower: 617 HP",
        time: "0-60 mph: 3.0 sec",
        speed: "Top Speed: 190 mph",
        price: "Price: From $138,800"
    },   
    {
        image: "https://www.maserati.com/content/dam/maserati/international/Models/default/2024/granturismo/png/granturismo-modena.png",
        name: "Maserati GranTurismo Trofeo",
        engine: "Engine: 3.0L Nettuno Twin Turbo V6",
        horsepower: "Horsepower: 542 HP",
        time: "0-60 mph: 3.3 sec",
        speed: "Top Speed: 199 mph",
        price: "Price: From $190,000"
    },  
];

let currentIndex = 0;

let carImage = document.querySelector(".pic1");
let carName = document.querySelector(".carName");
let carEngine = document.querySelector(".carEngine");
let carHp = document.querySelector(".carHp");
let carTime = document.querySelector(".carTime");
let carSpeed = document.querySelector(".carSpeed");
let carPrice = document.querySelector(".carPrice");



updateCar();

function updateCar(){
    carImage.src = cars[currentIndex].image;
    carName.textContent = cars[currentIndex].name;
    carEngine.textContent = cars[currentIndex].engine;
    carHp.textContent = cars[currentIndex].horsepower;
    carTime.textContent = cars[currentIndex].time;
    carSpeed.textContent = cars[currentIndex].speed;
    carPrice.textContent = cars[currentIndex].price;
}

function prevButton(){
    if(currentIndex > 0){
        currentIndex--;
    } else {
        currentIndex = cars.length - 1;
    }
    updateCar();
}

function nextButton(){
    if(currentIndex < cars.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCar();
} 
