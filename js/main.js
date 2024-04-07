
const cars = [
    { brand: "Toyota", model: "Corolla", year: 2018, price: 25000, probeg: 125000, image: "toyota_corolla.jpg" },
    { brand: "Honda", model: "Civic", year: 2019, price: 27000,probeg: 125000, image: "honda_civic.jpg" },
    { brand: "Ford", model: "Fusion", year: 2017, price: 20000,probeg: 125000, image: "ford_focus.jpg" },
    { brand: "Mercedes", model: "E200", year: 2018, price: 25000,probeg: 48000, image: "E200.jpg" },
    { brand: "Bmw", model: "Civic", year: 2019, price: 27000,probeg: 125000, image: "honda_civic.jpg" },
    { brand: "Nissan", model: "Fusion", year: 2017, price: 20000,probeg: 125000, image: "ford_focus.jpg" },
    { brand: "Mercedes-Amg", model: "Corolla", year: 2018, price: 25000,probeg: 125000, image: "toyota_corolla.jpg" },
    { brand: "Mercedes-Maybach", model: "Civic", year: 2019, price: 27000,probeg: 125000, image: "honda_civic.jpg" },
    { brand: "Mercedes", model: "Fusion", year: 2017, price: 20000,probeg: 125000, image: "ford_focus.jpg" },
    { brand: "Bmw-Alpina", model: "Corolla", year: 2018, price: 25000,probeg: 125000, image: "toyota_corolla.jpg" },
    { brand: "Porche", model: "Civic", year: 2019, price: 27000,probeg: 125000, image: "honda_civic.jpg" },
    { brand: "RangeRover", model: "Fusion", year: 2017, price: 20000,probeg: 125000, image: "ford_focus.jpg" }

];


function createCarCard(car) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <aside>
        <img src="images/${car.image}" alt="${car.brand} ${car.model}">
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
