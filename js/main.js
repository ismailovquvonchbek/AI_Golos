let ellist = document.querySelector('.list')
let elid = document.getElementById('plate').content
let elinp = document.querySelector('.inp')
let elpre = document.querySelector('.pre')
let elnext = document.querySelector('.next')
let elselect = document.getElementById('.value')

function getpost(array) {
    ellist.innerHTML = null

    array.forEach(element => {

        let mono = elid.cloneNode(true)

        mono.querySelector('.pic').src = element.Poster
        mono.querySelector('.heading').textContent = element.Title
        mono.querySelector('.year').textContent = element.Year

        ellist.appendChild(mono)
    });
}

let AIPEKEY = 'e41b7463'
let inppvalue = "hulk"
let nexo = 1
let pero = 4
let min = 1

async function film() {

    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${AIPEKEY}&s=${inppvalue}&page=${nexo}`)
    let data = await response.json()

    if (data.Response === 'True') {
        getpost(data.Search, ellist)
    }


}

film()

elinp.addEventListener('input', () => {
    inppvalue.innerHTML = null

    let inpvalue = elinp.value.trim()

    inppvalue = inpvalue

    film()
})


elnext.addEventListener('click', () => {

    if (nexo === pero) {
        nexo
    } else if (nexo < pero) {
        nexo++
    }

    film()
})

elpre.addEventListener('click', () => {

    if (nexo <= pero) {
        nexo--
    } else if (nexo === min) {
        nexo
    }

    film()
})


const elButton = document.querySelector(".button");
const recording = new webkitSpeechRecognition()

recording.lang = 'uz-UZ'
recording.onresult = (result) => {

  const value = result.results[0][0].transcript;

   inppvalue = value

    film()
}

elButton.addEventListener("click", () => {
    recording.start()
})