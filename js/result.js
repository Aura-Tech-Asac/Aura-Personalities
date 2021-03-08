'use strict';

function getData() {
  const sectionData = JSON.parse( localStorage.getItem( 'Section' ) );
  const personalityData = JSON.parse( localStorage.getItem( 'Personality' ) );
  sectionAll = sectionData;
  personalityAll = personalityData;
}
let sectionAll = [];
let personalityAll = [];
getData();

function result() {
  for ( let i in sectionAll ) {
    for ( let j in sectionAll[0].userAnswer ) {
      console.log( sectionAll[i].order[j] - 1 );
      if( sectionAll[i].userAnswer[j] > 0 ){
        personalityAll[sectionAll[i].order[j] - 1].value += sectionAll[i].userAnswer[j];
        //   console.log( personalityAll[personalityAll.order[j]-1].value );
      }
    }
  }
  for( let i in personalityAll ){
    personalityAll[i].percentege = Math.round( ( personalityAll[i].value * 100 )/70 );
  }
}
result();
localStorage.setItem( 'resultpersonality', JSON.stringify( personalityAll ) );
function renderResult(){
  for( let i in personalityAll ){
    let x = 'p' +i+1 +'_name';
    console.log( typeof( x ) );
    let y = `p${x}_bar`;
    let z = `p${x}_percent_text`;
    let BarTitleElement= document.querySelectorAll( '.barTitle p' );

    BarTitleElement[i].textContent=personalityAll[i].name;

    let percentageBarElement= document.querySelectorAll( '.personalityPercent' );
    console.log( percentageBarElement );
    percentageBarElement[i].style.width=`${personalityAll[i].percentege }%`;

    let textPecentageElement= document.querySelectorAll( '.percent p' );
    textPecentageElement[i].textContent=`${personalityAll[i].percentege} %`;

  }
}
renderResult();


// let BarTitleElement= document.getElementById('p1_bar');
//     BarTitleElement.textContent=personalityAll[0].name;
