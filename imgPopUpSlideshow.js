'use strict'

var uuidv4Generator = function () {
  //IE 9 kompatibilis
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


var PopupModal = function (title, body, DOMString) {
  this.modalTitle = title;
  this.modalBody = body;
  this.modalDOMString = DOMString;
}

PopupModal.prototype.open = function () {
  var modal = ('<div id="' + this.modalDOMString.substr(1) + '" class="general-modal-style" title=""></div>') //

  jQuery('body:last-child').append(modal);

  jQuery(this.modalDOMString).empty();
  jQuery(this.modalDOMString).append(this.modalBody);
  jQuery(this.modalDOMString).dialog({
    widget: true,
    draggable: false,
    resizable: false,
    height: "auto",
    width: 1000,
    title: this.modalTitle,
    modal: true,
    close: function (event, ui) {
      jQuery(this).dialog('close');
      jQuery(this).remove();
    }
  });
}

PopupModal.prototype.close = function () {

  jQuery(this.modalDOMString).dialog('close');
  jQuery(this.modalDOMString).remove();

}

function closeModal() {
  jQuery('.ui-dialog').remove();
  jQuery('.ui-widget-overlay').remove();
  // location.reload();
}

function OpenSlideShow(id) {
var slideshow = "<div id='carouselExampleControls' class='carousel slide' data-ride='carousel'><div class='carousel-inner'>";

for (var i = 1; i < Object.keys(Datas[id].Imgs).length+1; i++) {
  if (i == 1) {
    slideshow += "<div class='carousel-item active'><img class='d-block w-100' src='" + Datas[id].Imgs[i] + "' alt='First slide'></div>";
  } else {
    slideshow += "<div class='carousel-item'><img class='d-block w-100' src='" + Datas[id].Imgs[i] + "' alt='First slide'></div>";
  }
  
}

  var proba = new PopupModal(
    'PopUp Ablak... ',
    slideshow.toString() +
  '</div>'+
  '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">'+
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
    '<span class="sr-only">Previous</span>'+
  '</a>'+
  '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">'+
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
    '<span class="sr-only">Next</span>'+
  '</a>'+
'</div>',
    '#' + uuidv4Generator()
  )

  proba.open();
}







var Datas = {
  1 : {
    'Imgs': {
      1 : './img/Projekt1/img1.avif',
      2 : './img/Projekt1/img2.avif'
    }
  },
  2 : {
    'Imgs': {
      1 : './img/Projekt2/img3.avif',
      2 : './img/Projekt2/img4.avif'
    }
  }
}