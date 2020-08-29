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


// var io = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     // 관찰 대상이 viewport 안에 들어온 경우 image 로드
//     if (entry.isIntersecting) {
//       // data-src 정보를 타켓의 src 속성에 설정
//       //entry.target.src = entry.target.dataset.src;
//       // 이미지를 불러왔다면 타켓 엘리먼트에 대한 관찰을 멈춘다.
//       //observer.unobserve(entry.target);
//       infinityScroll();
//       observer.unobserve(entry.target);
      
//     }
//   })
// }, {});

// var i = 0;

// window.onload = function() {
//   io.observe(document.querySelector('.card:last-child'));
// }

// var infinityScroll = function() {
//   console.log(++i);
//   // var cardContainer = document.querySelector('.card-container');
//   // var absoluteTop = window.pageYOffset +  document.querySelector('.card:last-child').getBoundingClientRect().top; // 절대좌표
//   // if (absoluteTop - window.pageYOffset < window.innerHeight && flag) {
//   //   var nextContent = '<div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div>';
//   //   cardContainer.innerHTML += nextContent;
//   // }

//     //var cardContainer = document.querySelector('.card-container');
//     //var nextContent = '<div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div> <div class="card"> <div class="card__image"> <img src="https://placeimg.com/480/270/any/5665" alt="이미지가 없어용!!"> <div class="card__badge card__badge--round"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart badge-heart" data-filled="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display:block;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill badge-heart" data-filled="true" fill="#ff7777" xmlns="http://www.w3.org/2000/svg" style="display: none;" data-filled-id="157"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path> </svg> </div> <div class="card__badge card__badge--square"> NEW </div> </div> <div class="card__content"> <div class="card__title"> <h1>Beige limón</h1> </div> <div class="card__description"> <p>Maiores quasi vitae magni illo praesentium nihil eius. Incidunt quisquam ratione nobis quas eaque ullam. In voluptatibus natus enim quod. Eaque deserunt ipsam porro consectetur.</p> </div> </div> </div>';
//     //cardContainer.innerHTML += nextContent;

//     // setTimeout(function() {
//     //   io.observe(document.querySelector('.card:last-child'));
//     // }, 3000);

//     io.observe(document.querySelector('.card:last-child'));
// }

var hearts = document.querySelectorAll('.badge-heart');

hearts.forEach(function(o, i) {
  o.addEventListener('click', function(event) {
    console.log("click_event_base.js")
    var filled = this.getAttribute("data-filled") === "true";
    var filled_id = this.getAttribute("data-filled-id");
    var another = document.querySelector('[data-filled-id="'+filled_id+'"][data-filled="'+(!filled)+'"]');
    var pk = $(this).attr('name')
        $.ajax({ // ajax로 서버와 통신
            type: "POST", // 데이터를 전송하는 방법
            url: `like/${filled_id}/`, // 통신할 url을 지정
            data: { 'pk': pk, 'csrfmiddlewaretoken': csrftoken }, // 서버로 데이터 전송시 옵션, pk를 넘겨야 어떤 video인지 알 수 있음
            dataType: "json",
            success: function (response) { // 성공
                // alert(response.message);
                console.log("성공")
                console.log(response.count)
                console.log(filled_id)
                $(`.like_count_${filled_id}`).text("좋아요 " + response.count + "명"); // 좋아요 개수 변경
            },
            error: function (request, status, error) { // 실패
                console.log("로그인이 필요합니다.")
                // window.location.replace("/") // 로그인 페이지로 넘어가기
            },
        });
    this.style.display = "none";
    another.style.display="block";
    event.preventDefault();
  });
});
