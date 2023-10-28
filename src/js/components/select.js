import Choices from 'choices.js';
const select = document.querySelector('.js-choice');
const choices = new Choices(select, {
  allowHTML: true,
  searchEnabled: false,
});
