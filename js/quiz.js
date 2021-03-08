let answersArray = [0, 0, 0, 0, 0, 0, 0, 0];
let sectionNumber = 0;

function render( num ) {


  let sectionHeaderElement = document.querySelector( '.sectionHeader' );
  sectionHeaderElement.textContent = Section.all[num].header;

  let optionLabel = document.querySelectorAll( 'label.optionLabel' );
  for ( let i = 0; i < optionLabel.length; i++ ) {
    optionLabel[i].textContent = Section.all[num].options[i];
  }


}

let sectionDivv = document.querySelectorAll( 'div.rating-system1' );
render( 0 );

// console.log(xx)
for ( let z = 0; z < sectionDivv.length; z++ ) {
  sectionDivv[z].addEventListener( 'click', gg );

}
// tt.addEventListener('click', gg ,false);


// console.log( aa );

function gg( evt ) {

  let targeted = evt.target;
  console.log( targeted );
  let ques1 = targeted.value;
  switch ( targeted.parentElement.id ) {
  case 'ratingA1':
    answersArray[0] = parseInt( ques1 );
    break;
  case 'ratingA2':
    answersArray[1] = parseInt( ques1 );
    break;
  case 'ratingA3':
    answersArray[2] = parseInt( ques1 );
    break;
  case 'ratingA4':
    answersArray[3] = parseInt( ques1 );
    break;
  case 'ratingA5':
    answersArray[4] = parseInt( ques1 );
    break;
  case 'ratingA6':
    answersArray[5] = parseInt( ques1 );
    break;
  case 'ratingA7':
    answersArray[6] = parseInt( ques1 );
    break;
  case 'ratingA8':
    answersArray[7] = parseInt( ques1 );
    break;

  }

}


let progress = 0;
// eslint-disable-next-line no-unused-vars
function showMe() {

  let chboxs = document.getElementsByName( 'checkA' );
  let vis = 'none';
  for ( let i = 0; i < chboxs.length; i++ ) {

    let iddiv = `ratingA${i + 1}`;

    let starsNo = `rateA${i + 1}`;
    let ele = document.getElementsByName( starsNo );

    if ( chboxs[i].checked ) {
      vis = 'inline-block';
    } else {
      vis = 'none';
      answersArray[i] = 0;
      for ( let j = 0; j < ele.length; j++ ) {
        ele[j].checked = false;
      }
    }
    document.getElementById( iddiv ).style.display = vis;


  }

}

// eslint-disable-next-line no-unused-vars
function next() {



  let correctAnswer = checkAnswers();
  if ( correctAnswer && sectionNumber <= 6 ) {

    if ( sectionNumber < 6 ) {
      render( sectionNumber + 1 );
    }

    progress += 100 / 7;
    let completedBar = document.querySelector( 'div.progress' );
    completedBar.style.width = progress + '%';
    let textBar = document.getElementById( 'completed_text' );
    textBar.textContent = `${Math.ceil( progress )} %`;

    for ( let i = 0; i < 8; i++ ) {

      let x = answersArray[i] / summarray( answersArray );
      //
      // eslint-disable-next-line no-undef
      Section.all[sectionNumber].userAnswer[i] = ( x * 10 );
    }


    answersArray = [0, 0, 0, 0, 0, 0, 0, 0];

    let chboxs = document.getElementsByName( 'checkA' );
    let vis = 'none';
    for ( let i = 0; i < chboxs.length; i++ ) {


      let iddiv = `ratingA${i + 1}`;

      let starsNo = `rateA${i + 1}`;
      let ele = document.getElementsByName( starsNo );
      if ( chboxs[i].checked ) {
        chboxs[i].checked = false;
        vis = 'none';
        for ( let j = 0; j < ele.length; j++ ) {
          ele[j].checked = false;
        }
      } else {
        vis = 'none';
        answersArray[i] = 0;
        for ( let j = 0; j < ele.length; j++ ) {
          ele[j].checked = false;
        }





      }
      document.getElementById( iddiv ).style.display = vis;
    }

    sectionNumber++;


    if ( sectionNumber === 7 ) {
      finalResult();
    }






  }
  //   if ( sectionNumber === 6 ) {
  //     progress += 100/7 ;
  //     let completedBar = document.querySelector( 'div.progress' );
  //     completedBar.style.width= progress +'%' ;
  //     let textBar = document.getElementById( 'completed_text' );
  //     textBar.textContent=`${Math.ceil( progress )} %`;

  //     for ( let i = 0; i < 8; i++ ) {

  //       let x = answersArray[i]/summarray( answersArray );
  //       //
  //       Section.all[sectionNumber].userAnswer[i] = ( x * 10 );
  //     }


  //     answersArray = [0,0,0,0,0,0,0,0];

  //     result();

  //   }


}







// helper functions
function summarray( array ) {
  let sum = 0;
  for ( let i = 0; i < array.length; i++ ) {
    sum += array[i];

  }
  return sum;
}

function checkAnswers() {
  if ( summarray( answersArray ) === 0 ) {
    let warningDiv = document.querySelector( '.warningDiv' );
    warningDiv.style.display = 'inline-block';
    return false;
  } else {
    let warningDiv = document.querySelector( '.warningDiv' );
    warningDiv.style.display = 'none';
    return true;
  }

}



function finalResult(){
  //update

  localStorage.setItem( 'Personality', JSON.stringify( Personality.all ) );
  localStorage.setItem( 'Section', JSON.stringify( Section.all ) );
  window.location = '../result.html';

}

