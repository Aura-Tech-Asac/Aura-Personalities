let clicks = 57;
getData();
updateCounter();

document.getElementById( 'testBtn' ).addEventListener( 'click', updateCounter );





function updateCounter() {
  clicks++;
  document.getElementById( 'counter' ).innerHTML= clicks;

  localStorage.setItem( 'counter Update', clicks );



}

function getData() {


  const data = localStorage.getItem( 'counter Update' );
  if ( data ){

    clicks= parseInt( data ) ;

  }



}




