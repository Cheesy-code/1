'use strict'

var uuidv4Generator = function () {
  //IE 9 kompatibilis
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class PopupModal {
  constructor(body) {
    this.modalBody = body;
    this.modalDOMString = body;
  }
  open() {
    jQuery(this.modalDOMString).dialog({
      modal: true,
      resizable: false,
      draggable: false,
      height: "auto",
      width: "55%",
      dialogClass: "no-close",
      buttons: [
        {
          class: "btn",
          text: "Bezár",
          click: function () {
            $(this).dialog("close");
          }
        }
      ]
    });

    $('.ui-dialog-titlebar').remove();

  }
}

$('.carousel').carousel({
  interval: 2000
})

function OpenSlideShow(id) {
  var slideshow = "<div id='carouselExampleControls' class='carousel slide' data-ride='carousel'><div class='carousel-inner'>"

  for (var i = 1; i < Object.keys(Datas[id].Imgs).length + 1; i++) {
    if (i == 1) {
      slideshow += "<div class='carousel-item active'><img class='d-block w-100' src='" + Datas[id].Imgs[i] + "' alt='First slide'></div>";
    } else {
      slideshow += "<div class='carousel-item'><img class='d-block w-100' src='" + Datas[id].Imgs[i] + "' alt='First slide'></div>";
    }
  }

  var proba = new PopupModal(
    slideshow.toString() +
    '</div>' +
    '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    '</a>' +
    '</div>' +
    '#' + uuidv4Generator()
  )

  proba.open();


}

var Datas = {
  1: {
    'Imgs': {
      1: './img/Projekt1/img1.avif',
      2: './img/Projekt1/img2.avif'
    }
  },
  2: {
    'Imgs': {
      1: './img/Projekt2/img3.avif',
      2: './img/Projekt2/img4.avif'
    }
  }
}