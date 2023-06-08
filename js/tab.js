const orderingTabs = document.querySelector(".ordering");
const order_btn = document.querySelectorAll(".order_btn");
const contentOrder = document.querySelectorAll(".contentOrder");

orderingTabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    order_btn.forEach(btn => {
      btn.classList.remove("true");
    });
    e.target.classList.add("true");

    contentOrder.forEach(content => {
      content.classList.remove("true");
    });
    const element = document.getElementById(id);
    element.classList.add("true");
  }
}

