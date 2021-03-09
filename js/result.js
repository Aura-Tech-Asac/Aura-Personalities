'use strict';

function getData() {
  const sectionData = JSON.parse(localStorage.getItem('Section'));
  const personalityData = JSON.parse(localStorage.getItem('Personality'));
  sectionAll = sectionData;
  personalityAll = personalityData;
}
let sectionAll = [];
let personalityAll = [];
getData();

function result() {
  for (let i in sectionAll) {
    for (let j in sectionAll[0].userAnswer) {
      if (sectionAll[i].userAnswer[j] > 0) {
        personalityAll[sectionAll[i].order[j] - 1].value += sectionAll[i].userAnswer[j];
      }
    }
  }
  for (let i in personalityAll) {
    personalityAll[i].percentege = Math.round((personalityAll[i].value * 100) / 70);
  }
}

let color = ['#E5C828', '#8F759F', '#4fd39e', '#4fd39e', '#51a9ab', '#8F749C', '#808080', '#8F759F'];
result();
localStorage.setItem('resultpersonality', JSON.stringify(personalityAll));
function renderResult() {
  for (let i in personalityAll) {
    let BarTitleElement = document.querySelectorAll('.barTitle a p');

    BarTitleElement[i].style.color = color[i];
    BarTitleElement[i].textContent = personalityAll[i].name;

    let percentageBarElement = document.querySelectorAll('.personalityPercent');
    percentageBarElement[i].style.backgroundColor = color[i];
    percentageBarElement[i].style.width = `${personalityAll[i].percentege}%`;

    let textPecentageElement = document.querySelectorAll('.percent p');
    textPecentageElement[i].style.color = color[i];
    textPecentageElement[i].textContent = `${personalityAll[i].percentege} %`;

  }
}
renderResult();


// let BarTitleElement= document.getElementById('p1_bar');
//     BarTitleElement.textContent=personalityAll[0].name;

function setComment() {

  let name = document.getElementById('name').value;
  let comment = document.getElementById('bodyText').value;
  if (name && comment) {
    const addcomment = new CommentSection(name, comment);

    localStorage.setItem('comment', JSON.stringify(CommentSection.arr));
    window.location = './test.html';
  }
}


function CommentSection(name, comment) {
  this.name = name;
  this.comment = comment;
  CommentSection.arr.push(this);
}
CommentSection.arr = [];
