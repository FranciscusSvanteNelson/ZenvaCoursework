// 1. Select 
let sign = document.getElementById('sign');

// 2. Modify Text
console.log(sign.textContent);
sign.textContent = 'Welcome, Travelers!';


// 3. Modify HTML Content or Add
sign.innerHTML = sign.innerHTML + '<p> hello </p>';


// Change style/color etc
sign.style.color = 'blue';
