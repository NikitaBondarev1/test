"use strict";

let profileName = document.querySelector(".profile__name"),
    profileSubtitle = document.querySelector(".profile__subtitle"),
    popupInfo = document.querySelector(".popup__info"),
    nameInput = document.querySelector(".popup__name_element_input"),
    subtitleWork = document.querySelector(".popup__subtitle");
const buttonEdd = document.querySelector(".profile__edit"),
      popup = document.querySelector(".popup"),
      popupReg = document.querySelector(".popup_reg_card"),
      buttonEddReg = document.querySelector(".profile__add-button"),
      popupContainer = document.querySelector(".popup__container"),
      popupClose = document.querySelector(".popup__close");

/*Открытие popup редактирования*/
function openSubmit() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  subtitleWork.value = profileSubtitle.textContent;
}

buttonEdd.addEventListener("click", openSubmit);

/*Открытие popup добавления*/
function openRegSubmit() {
  popupReg.classList.add("popup_opened_reg"); /*ПРОПИСАТЬ ПУТЬ ДО ФАЙЛА И ПРОВЕРИТЬ*/
  nameInput.value = profileName.textContent;
  subtitleWork.value = profileSubtitle.textContent;
}

buttonEddReg.addEventListener("click", openRegSubmit);

function formSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = subtitleWork.value;
  closeSubmit();
}

function closeSubmit() {
  popup.classList.remove('popup_opened');
}
popupInfo.addEventListener("submit", formSubmit);

popupClose.addEventListener('click', closeSubmit);