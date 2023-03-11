function init() {
  const titleEl = document.getElementById("title-el");
  const descriptionEl = document.getElementById("description-el");
  const cardEl = document.getElementById("card-el");
  const submitEl = document.getElementById("submit-el");
  let rateSelectorEl = document.getElementById("rate-selector-el");

  let view = {
    renderThankYouPage(rating) {
      cardEl.innerHTML = `<div>   <img class="illus-thankyou" src="images/illustration-thank-you.svg" alt=""></div>
    <div class="rating-msg"><p>You selected ${rating} out of 5 </p></div>
    <h1 id="title-el">Thank you!</h1>

   <p class="msg"> We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch! </p>`;
    },
    higlightBtn(target) {
      if (model.selectedBtn) {
        model.selectedBtn.classList.remove("highlight");
      }
      model.setSelectedBtn(target);
      model.selectedBtn.classList.add("highlight");
    },
  };
  let model = {
    rating: 0,
    selectedBtn: null,
    setRating(rating) {
      this.rating = rating;
    },
    setSelectedBtn(btn) {
      this.selectedBtn = btn;
    },
  };
  let controller = {
    eventListen() {
      rateSelectorEl.addEventListener("click", function (event) {
        const target = event.target;

        if (target.tagName != "BUTTON") {
          return;
        }
        model.setRating(target.value);
        view.higlightBtn(target);
      });
      submitEl.addEventListener("click", function () {
        if (model.rating != 0) {
          view.renderThankYouPage(model.rating);
          return;
        }
        alert("Please select a rating score!");
      });
    },
  };
  controller.eventListen();
}
window.onload = init();
