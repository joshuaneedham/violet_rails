import { Turbo } from "@hotwired/turbo-rails";

window.Turbo = Turbo

$(document).on("turbolinks:load", () => {
  console.log("Violet Rails uses turbolinks!");
});

$(document).on("turbo:load", () => {
  console.log("Violet Rails uses turbo!");
});
  
$(document).on("turbo:before-cache", () => {
  $(".g-recaptcha").each(function () { this.innerHTML = "" });
});

$(document).on("turbo:frame-missing", (event) => {
  const { detail: { response, visit } } = event;
  event.preventDefault();
  visit(response.url);
});