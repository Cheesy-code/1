'use stict'

const panelsData = {
    1: {
        'text': "Lakossági villany",
        'img': "img/img1.avif",
        'href': "./lakossagi.html"
    },
    2: {
        'text': "Ipari villany",
        'img': "img/img2.avif",
        'href': "./ipari.html"
    },
    3: {
        'text': "Rendezvények",
        'img': "img/img3.avif",
        'href': "./rendezvenyek.html"
    }

}


for (var i = 1; i < 4; i++) {
    var div = "<div class='panel' style='background-image: url(" + panelsData[i].img + ");'><h3>" + panelsData[i].text + "</h3><a href='"+panelsData[i].href+"' ><button class='btn'>Részletek</button></a></div>"

    document.getElementById("FirstContainer").innerHTML += div;

}


const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}