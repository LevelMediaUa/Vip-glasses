(() => {
    const refs = {
      openBtn: document.querySelector("[menu-button-open]"),
      closeBtn: document.querySelector("[menu-button-close]"),
      menu: document.querySelector("[data-menu]"),
      navLinks: document.getElementsByClassName("menu-item__link"),
    };
  
    refs.openBtn.addEventListener("click", toggleModal);
    refs.closeBtn.addEventListener("click", toggleModal);
    [...refs.navLinks].forEach((elem) =>
      elem.addEventListener("click", toggleModal)
    );
  
    function toggleModal() {
      refs.menu.classList.toggle("is-open");
    }
  })();

//index
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
        document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();

  // index
  $(document).ready(function () {
    $('.hero-img').slick({
      infinite: true,
      slidesToScroll: 1,
      arrows: false,
      arrows: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      centerMode: true,
      variableWidth: true, 
    });
  });


  // $(document).ready(function () {
  //   $('.first').slick({
  //     infinite: true,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     variableWidth: true,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //     dots: true,
  //     centerMode: true,
  //     variableWidth: true, 
  //   });
  // });



  //2 slider on index
  const prev = document.querySelector('.previous');
  const next = document.querySelector('.next');
  const slides = document.querySelectorAll('.slide');
  
  let index = 0;
  
  const activeSlide = n => {
    for (let slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
  }
  
  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      activeSlide(index);
    }
    else {
      index++;
      activeSlide(index);
    }
  }
  
  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      activeSlide(index);
    }
    else {
      index--;
      activeSlide(index);
    }
  }
  
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);






// //card
const counter = {
  value: 1,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const decrementBtn = document.getElementById("counter").firstElementChild;
const incrementBtn = document.getElementById("counter").lastElementChild;
const valueEl = document.getElementById("value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});
incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});





const tabs = document.querySelector(".card_delivery");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("valid");
    });
    e.target.classList.add("valid");

    contents.forEach(content => {
      content.classList.remove("valid");
    });
    const element = document.getElementById(id);
    element.classList.add("valid");
  }
};





function openCard(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




//filter
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



//card 
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  cssEase: 'linear'
});



