//==Slide show==//
// array of object
const images = [
    { src: 'images/North-island.png', name: 'North-island' },
    { src: 'images/Auckland.png', name: 'Auckland' },
    { src: 'images/Hamilton.png', name: 'Hamilton' },
    { src: 'images/Rotorua.png', name: 'Rotorua' },
    { src: 'images/Wellington.png', name: 'Wellington' },
    { src: 'images/South-Island.png', name: 'South-Island' },
    { src: 'images/Christchurch.png', name: 'Christchurch' },
    { src: 'images/Dunedin.png', name: 'Dunedin' },
    { src: 'images/Nelson.png', name: 'Nelson' },
    { src: 'images/Queenstown.png', name: 'Queenstown' }
];

let currentIndex = 0;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.getElementById('selected-image')
const imageName = document.getElementById('image-name')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const thumbnails = document.querySelectorAll('.thumbnail')

// to update the selected image and the displayed image name
function updateGallery() {
    console.log(currentIndex, 'updating gallery')
    selectedImage.src= images[currentIndex].src
    imageName.innerHTML = images[currentIndex].name
}

// to change current index to the next one
// if at end of gallery, start from beginning again 
// call update gallery
function nextImage() {
    console.log("next image clicked")
    currentIndex++
    if (currentIndex === images.length){
        currentIndex = 0
    }
    updateGallery()
}

// to change current index to the previous one
// if at beginning of gallery, change to end
// call update gallery
function prevImage() {
   console.log("prev image clicked")
    currentIndex--
    if (currentIndex < 0){
        currentIndex = images.length-1
    }

   updateGallery()
}

// change current index to selected thumbnail index
// call updateGallery
function selectThumbnail(index){
   console.log("thumbnail clicked", index)

    currentIndex= index


   updateGallery()
}

// change current index to selected thumbnail index
// call updateGallery
leftArrow.addEventListener('click', prevImage)
rightArrow.addEventListener('click', nextImage)
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => selectThumbnail(index))
})

//==Calculator==//

const userInput1 = document.getElementById("input-num1"); 
const userInput2 = document.getElementById("input-num2"); 
const result = document.getElementById("result");
const sumBtn = document.getElementById("sum-btn");

sumBtn.addEventListener('click', function() {
    console.log(userInput1.value); 
    console.log(userInput2.value)

 
    result.textContent = `You stay in ${userInput1.value} nights, rent is $${userInput2.value}. You owe us $${parseInt(userInput1.value) * parseInt(userInput2.value)}`
});

//=========Reset button==========//

const elements = {
    reset: "input[value='reset']"
};

//Assign Dom Elements to variables
const reset = document.querySelector(elements.reset);

 //function to clear values
const resetForm = () => {
result.textContent = '';
userInput1.value = '';
userInput2.value = '';
};

 //Event listener for clicking calculate
reset.addEventListener('click', resetForm)