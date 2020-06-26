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
