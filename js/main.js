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

  

  document.querySelectorAll(".select").forEach((el)=> {
    el.addEventListener("click", function (e){
      if (e.target && e.target.matches(".option")) {
        this.querySelector(".shown").innerHTML = e.target.innerHTML;
      }
      this.classList.toggle("collapsed");
    });
  }); 





  $(document).ready(function () {
    $('.hero-img').slick({
      infinite: true,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      
    });
  });



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





function openCity(evt, cityName) {
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




document.querySelectorAll(".select").forEach((el)=> {
  el.addEventListener("click", function (e){
    if (e.target && e.target.matches(".option")) {
      this.querySelector(".shown").innerHTML = e.target.innerHTML;
    }
    this.classList.toggle("collapsed");
  });
});





function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}









