const animatebutton = document.getElementById('animateButton');
const animateimage = document.getElementById('animateImage');
const animateText = 'animateText';

// Function for localStorage
function setLocaIStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value)); 
    console.log('Stored ${key}: ${value}');
}
// To retrieve data from LocalStorage
function getLocalStorage(key){
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Function to trigger animation
function triggerAnimation(){
    animateimage.classList.add('kitty-animations');
    storeLocalStorage('animateText', true);
    setTimeout(() => {
        animateimage.classList.remove('kitty-animations');
    },500);
}

// Check if the animation was triggered before
const wasAnimated = getLocalStorage('animateText');
if(wasAnimated)
    animateimage.classList.add('kitty-animations');
    setTimeout(() => {
animateimage.classList.add('animateText');
console.log('Animation triggered from localStorage.');
setTimeout(() => {
    animateimage.classList.remove('kitty-animations');
},1000);
    })
// Event Listener for button click
animatebutton.addEventListener('click', triggerAnimation);

