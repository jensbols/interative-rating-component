'use strict';

const containers = document.querySelector('.container');
const ratingCircles = document.querySelectorAll('.circle');
const submitButton = document.querySelector('.submit_btn');
const printedResult = document.querySelector('.printed-result');
const thankYouCard = document.querySelector('.thankYouCard');
let rating;

ratingCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    ratingCircles.forEach((ratingCircle) => {
      if (circle == ratingCircle) {
        ratingCircle.classList.add('circle-clicked');
      } else {
        ratingCircle.classList.remove('circle-clicked');
      }
    });
    rating = Number(circle.textContent);
  });
});


submitButton.addEventListener('click', () => {
  if (!rating) {
    alert('Please select a rating before proceeding');
  } else {
    containers.classList.add('hidden');
    printedResult.innerHTML = `You selected ${rating} out of 5`;
    thankYouCard.classList.remove('hidden');
  }
})
