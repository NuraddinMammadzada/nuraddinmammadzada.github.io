document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carForm');
    const carIndexInput = document.getElementById('carIndex');
    const carModelInput = document.getElementById('carModel');
    const carYearInput = document.getElementById('carYear');
    const carPriceInput = document.getElementById('carPrice');
    const carMileageInput = document.getElementById('carMileage');
    const carPhotoInput = document.getElementById('carPhoto');
    const carsList = document.getElementById('carsList');

    let cars = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const index = carIndexInput.value;
        const model = carModelInput.value;
        const year = carYearInput.value;
        const price = carPriceInput.value;
        const mileage = carMileageInput.value;
        const reader = new FileReader();

        reader.onload = function(event) {
            const photo = event.target.result;
            const carData = { model, year, price, mileage, photo };

            if (index === '-1') {
                cars.push(carData);
            } else {
                cars[index] = carData;
            }

            renderCars();
            form.reset();
            carIndexInput.value = '-1';
        };

        if (carPhotoInput.files.length > 0) {
            reader.readAsDataURL(carPhotoInput.files[0]);
        } else {
            const photo = '';
            const carData = { model, year, price, mileage, photo };
            if (index === '-1') {
                cars.push(carData);
            } else {
                cars[index] = carData;
            }
            renderCars();
            form.reset();
            carIndexInput.value = '-1';
        }
    });

    function renderCars() {
        carsList.innerHTML = '';
        cars.forEach((car, index) => {
            const carItem = document.createElement('li');
            carItem.innerHTML = `
                <a href="${car.photo}" target="_blank">
                    <img src="${car.photo}" alt="Car Image" style="width: 100px; height: auto;">
                </a>
                <h2>${car.model} - ${car.year}</h2>
                <p><strong>Year:</strong> ${car.year}</p>
                <p><strong>Price:</strong> ${car.price} AZN</p>
                <p><strong>Mileage:</strong> ${car.mileage} Km</p>
                <button onclick="editCar(${index})">Edit</button>
            `;
            carsList.appendChild(carItem);
        });
    }

    window.editCar = function(index) {
        const car = cars[index];
        carModelInput.value = car.model;
        carYearInput.value = car.year;
        carPriceInput.value = car.price;
        carMileageInput.value = car.mileage;
        carIndexInput.value = index;
    };
});
