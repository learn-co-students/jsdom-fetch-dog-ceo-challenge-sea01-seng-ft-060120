const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function getTheDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json=> putUptheBreed(json))
    // debugger
}

getTheDogs()

function putUptheBreed(breed){
    const phil = document.getElementById("dog-image-container")
    for(let i = 0; i<breed["message"].length; i++){
    const newLi = document.createElement("img")
        newLi.src = breed["message"][i]
        phil.appendChild(newLi)
    }
    // debugger
}

function theList(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json=> makeTheList(json))
}

theList()

function makeTheList(dogs){
  const ulItem = document.getElementById("dog-breeds")
    for (const key in dogs["message"]) {
    const liItem = document.createElement("li")
        liItem.innerText = key
        ulItem.appendChild(liItem)
    liItem.addEventListener("click",function(liItem){
        clicked(liItem)
    })
      }
}

function clicked(liItem){
    liItem.target.style.color = "red"
    debugger
}
