// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreeds();

    let f = document.getElementById("breed-dropdown")
        f.addEventListener("change", function() {
            let letter = f.value
            filterDogBreed(letter)
        })
});
  
function loadImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(image => addImage(image.message));
}

function addImage(image) {

    let container = document.getElementById("dog-image-container");

    image.forEach(imgUrl => {
        let img = document.createElement('img')  
        img.src = `${imgUrl}`
        container.appendChild(img);
    })
}

function loadBreeds(letter) {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breed => addBreedList(breed.message, letter))
}

function addBreedList(breed, letter) {
    
    let container = document.getElementById("dog-breeds")
    
    for (key in breed) {
        let brd = document.createElement('li')
        container.appendChild(brd);
        brd.innerText = key
        addEventListener("click", handleClick);

        
        // console.log(letter)

        // if (letter) {
        //     if (key[0] === letter) {
        //         container.append(brd);
        //     } else {
        //         // container.append(breed);
        //         return;
        //     }
        // }
    }
   
}

const handleClick = function(e){
    e.target.style.color = "red"
}



function filterDogBreed(letter) {
    // let letters = document.getElementById("breed-dropdown").children
    let container = document.getElementById("dog-breeds")
    // console.log(letters)
    // console.log(container)
    console.log("made it inside filterDogBreed")
    console.log(container)
    for (let i = 0; i < container.children.length; i += 1) {
        // for(j = 0; j < letters.length; j += 1){
        //     if (letters[j] === container[i].charAt(0)){
        //         return container[i]
        console.log("made it inside for loop")
        console.log(container.children[i])

        if (letter === container.children[i].innerText.charAt(0)){
            
            container.children[i].style.display = "block";
        } else {
            container.children[i].style.display = "none";
        }

        

    }
}


// function clickChangeColor(breed) {

//     breed.addEventListener("click", handleClick {
//         breed.style.color = "red"
//     })
// }

