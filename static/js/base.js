const header = document.querySelector('.wheel_move')

window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY){
    // console.log('up')
    header.classList.add('nav-down')
    header.classList.remove('nav-up')
  }else {
    // console.log('down')
    header.classList.add('nav-up')
    header.classList.remove('nav-down')
  }
  this.oldScroll = this.scrollY;
}


var hearts = document.querySelectorAll('.badge-heart');

hearts.forEach(function(o, i) {
  o.addEventListener('click', function(event) {
    var filled = this.getAttribute("data-filled") === "true";
    var filled_id = this.getAttribute("data-filled-id");
    var another = document.querySelector('[data-filled-id="'+filled_id+'"][data-filled="'+(!filled)+'"]');

    this.style.display = "none";
    another.style.display="block";
    event.preventDefault();
  });
});