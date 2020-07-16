console.log('%c HI', 'color: firebrick')

const fetchDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => json.message.map(img => build(img) ))
}
fetchDogs()

const build = (image) =>  {
    let img = document.createElement('img')
    img.src = image
    let div = document.querySelector('div')
    div.appendChild(img)
};

const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => Object.keys(json.message).map(breed => {buildBreeds(breed);
    breeds.push(breed) })) 
};
fetchBreeds()

const buildBreeds = (breed) => {
    // console.log(breed)
    let li = document.createElement('li')
    li.innerText = breed
    let ul = document.querySelector('ul')
    li.addEventListener('click', function(e) {
        li.style.color = 'pink'})
    ul.appendChild(li)
};

let breeds = []
let filterBreed = []

const findAlpha = (breeds) => {
    let alpha = document.getElementById('breed-dropdown')
    let li = document.querySelectorAll('li')
    alpha.addEventListener('change', (e) => {
        let ul = document.querySelector('ul')
        ul.innerHTML = ""
        let filterBreed = breeds.filter(name => name[0] === e.target.value)
        filterBreed.forEach(breed => buildBreeds(breed))

        console.log(filterBreed)
    })
}
findAlpha(breeds);