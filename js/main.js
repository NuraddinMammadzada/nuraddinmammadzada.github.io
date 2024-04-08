
const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2018,
        price: 27000,
        probeg: 15000,
        image: "toyota_corolla.jpg",
        url: "https://www.cars.com/research/toyota-corolla-2018/"
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019,
        price: 43000,
        probeg: 50000,
        image: "honda_civic.jpg",
        url: "https://www.cars.com/research/honda-civic/2016/"
    },
    {
        brand: "Ford",
        model: "Fusion",
        year: 2014,
        price: 18700,
        probeg: 225000,
        image: "ford_focus.jpg",
        url: "https://www.cars.com/research/ford-fusion/"
    },
    {
        brand: "Mercedes",
        model: "E200",
        year: 2013,
        price: 35700,
        probeg: 48756,
        image: "E200.jpg",
        url: "https://www.carexpert.com.au/mercedes-benz/e200/2013-base-model-fa518ade"
    },
    {
        brand: "Bmw",
        model: "M5F90",
        year: 2019,
        price: 122000,
        probeg: 25000,
        image: "F90.jpg",
        url: "https://www.bmw-me.com/en/all-models/m-series/m5-sedan/2021/bmw-5-series-sedan-m-automobiles-overview.html"
    },
    {
        brand: "Nissan",
        model: "Skylyne-R34",
        year: 2003,
        price: 40000,
        probeg: 325000,
        image: "r34.jpg",
        url: ""
    },
    {
        brand: "Mercedes",
        model: "CLS63-AMG-Restyle",
        year: 2015,
        price: 63700,
        probeg: 125041,
        image: "cattouch.jpg",
        url: ""


    },
    {
        brand: "Mercedes-Maybach",
        model: "S600",
        year: 2019,
        price: 340000,
        probeg: 5000,
        image: "S600.jpg",
        url: ""
    },
    {
        brand: "Mercedes",
        model: "E63amg",
        year: 2018,
        price: 70000,
        probeg: 65450,
        image: "E63.jpg",
        url: ""
    },
    {
        brand: "Bmw-Alpina",
        model: "M5f10",
        year: 2012,
        price: 55000,
        probeg: 225000,
        image: "M5F10.jpg",
        url: ""
    },
    {
        brand: "Porche",
        model: "Cayenne",
        year: 2014,
        price: 65000,
        probeg: 109430,
        image: "Cayenne.jpg",
        url: ""
    },
    {
        brand: "RangeRover",
        model: "Sport",
        year: 2015,
        price: 78000,
        probeg: 75471,
        image: "RRsport.jpg",
        url: ""
    }

];


function createCarCard(car) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
       <a href="${car.url}" target="_blank">
        <img src="images/${car.image}" alt="${car.brand} ${car.model}"onclick="">
        </a>
        <h2>${car.brand} ${car.model}</h2>
        <p><strong>IL:</strong> ${car.year}</p>
        <p><strong>Qiymet:</strong> ${car.price} AZN</p>
        <p><strong>Km:</strong> ${car.probeg}</p>
        
    `;
    return card;
}


function displayCars() {
    const carList = document.getElementById("car-list");
    cars.forEach(car => {
        const card = createCarCard(car);
        carList.appendChild(card);
    });
}


window.onload = displayCars;
