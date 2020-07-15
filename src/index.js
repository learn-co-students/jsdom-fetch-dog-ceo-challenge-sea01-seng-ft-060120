console.log('%c HI', 'color: firebrick');

const fetchImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json() )
    .then(json => json.message.map(url => selectImage(url)))
};

fetchImage();

const selectImage = (url) => {
    let id = document.getElementById('dog-image-container')
    let imageElement = document.createElement('img')
    imageElement.src = url
    id.appendChild(imageElement)
};

let breeds = []

const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json() )
    .then(json => Object.keys(json.message).forEach(breed => {
        breedList(breed);
        breeds.push(breed)
    }))
};
// console.log(breeds)
fetchBreeds();

const breedList = (breed) => {
    let id = document.getElementById('dog-breeds')
    let breedElement = document.createElement('li')
        breedElement.textContent = breed
        breedElement.addEventListener('click', () => {
            breedElement.style.color="blue"
        })
    id.appendChild(breedElement)
};

let filterBreed = []

const getLetter = (breeds) => {
    let letter = document.getElementById('breed-dropdown')
        console.log(letter)
    let li = document.querySelectorAll('li')
    letter.addEventListener('change', (e) => {
        let ul = document.querySelector('ul')
        ul.innerHTML = ""
        let filterBreed = breeds.filter(name => name[0] === e.target.value)
        filterBreed.forEach(breed => breedList(breed))

        console.log(filterBreed)
    })

}

getLetter(breeds);