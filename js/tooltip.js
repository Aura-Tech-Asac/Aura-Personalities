const tooltips = document.querySelectorAll( '.all-tooltips .tooltip' );
// const fullDiv = document.querySelector( 'section' );
// const container = document.querySelector( '.container' );




window.addEventListener( 'DOMContentLoaded', contentPosition );
// window.addEventListener( 'resize', contentPosition );


function contentPosition () {

  tooltips.forEach( tooltip => {

    const pin = tooltip.querySelector( '.pin' );
    const content = tooltip.querySelector( '.tooltip-content' );
    // const arrow = tooltip.querySelector( '.arrow' );

    content.style.left = pin.offsetLeft - content.offsetWidth/2 + 'px';
    content.style.top= pin.offsetTop + 200 + 'px';
    // arrow.style.left = pin.offsetLeft - content.offsetLeft + pin.offsetWidth/2 + 'px';


  } );


}


let timeoutId;

// tooltips.forEach( tooltip=>{
//   const pin = tooltip.querySelector( '.pin' );
//   const content = tooltip.querySelector( '.tooltip-content' );

//   pin.addEventListener( 'mouseover', ()=>{
//     tooltip.classList.add( 'active' );

//   } );

//   pin.addEventListener( 'mouseleave', ()=>{

//     timeoutId= setTimeout( () => {
//       tooltip.classList.remove( 'active' );
//     }, 1000 );

//   } );

//   content.addEventListener( 'mouseover', ()=>{
//     tooltip.classList.add( 'active' );

//   } );

//   content.addEventListener( 'mouseleave', ()=>{

//     timeoutId= setTimeout( () => {
//       tooltip.classList.remove( 'active' );
//     }, 5000 );

//   } );



// } );




tooltips.forEach( ( tooltip ) => {
  const pin = tooltip.querySelector( '.pin' );
  const content = tooltip.querySelector( '.tooltip-content' );
  pin.addEventListener( 'mouseover', () => {
    tooltip.classList.add( 'active' );
  } );
  pin.addEventListener( 'mouseleave', () => {
    timeoutId = setTimeout( () => {
      if ( !tooltip.classList.contains( 'content-hover' ) ) {
        tooltip.classList.remove( 'active' );
      }
    }, 200 );
  } );

  content.addEventListener( 'mouseover', () => {
    clearTimeout( timeoutId );
    tooltip.classList.add( 'active' );
    tooltip.classList.add( 'content-hover' );
  } );
  content.addEventListener( 'mouseleave', () => {
    timeoutId = setTimeout( () => {
      tooltip.classList.remove( 'active' );
      tooltip.classList.remove( 'content-hover' );
    }, 200 );
  } );
} );

