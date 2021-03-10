let data;

function getComment(){
  data =JSON.parse( localStorage.getItem( 'comment' ) );
}
getComment();

function render(){

  let dinamicDivElement=document.getElementById( 'dinamicReviews' );
  for( let i in data ){
    let divElement = document.createElement( 'div' );
    dinamicDivElement.appendChild( divElement );
    divElement.className='post';


    let imgCommaElement = document.createElement( 'img' );
    divElement.appendChild( imgCommaElement );
    imgCommaElement.src='images/homePage/comma.JPG';
    imgCommaElement.style.width='50px';



    let pElement = document.createElement( 'p' );
    pElement.textContent=data[i].comment;
    pElement.className='width';
    divElement.appendChild( pElement );

    let imgElement = document.createElement( 'img' );
    divElement.appendChild( imgElement );
    imgElement.src='images/homePage/userFeedbackImg2.svg';
    imgElement.style.width='100px';

    let hElement = document.createElement( 'h3' );
    hElement.textContent=data[i].name;
    divElement.appendChild( hElement );
  }

}
render();

home
header image linke
borger minue company mtkrera

result 
