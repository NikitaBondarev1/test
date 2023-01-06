let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
const buttonEdd = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const popupClose = document.querySelector(".popup__close");
let popupInfo = document.querySelector(".popup__info");
let nameInput = document.querySelector(".popup__name_input");
let subtitleWork = document.querySelector(".popup__subtitle");

buttonEdd.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.classList.add("popup_active");

  nameInput.value = profileName.textContent;
  subtitleWork.value = profileSubtitle.textContent;
});

popupClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  popup.classList.remove("popup_active");
});

function formSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = subtitleWork.value;
  popup.classList.remove("popup_active");
}
popupInfo.addEventListener("submit", formSubmit);