const tooltips = document.querySelectorAll( '.all-tooltips .tooltip' );
const fullDiv = document.querySelector( 'section' );
const container = document.querySelector( '.container' );



window.addEventListener( 'DOMContentLoaded', contentPosition );
window.addEventListener( 'resize', contentPosition );


function contentPosition () {

  tooltips.forEach( tooltip => {

    const pin = tooltip.querySelector( '.pin' );
    const content = tooltip.querySelector( '.tooltip-content' );
    const arrow = tooltip.querySelector( '.arrow' );

    content.style.left = pin.offsetLeft - content.offsetWidth/2 + 'px';
    content.style.top= pin.offsetTop + 200 + 'px';
    // arrow.style.left = pin.offsetLeft - content.offsetLeft + pin.offsetWidth/2 + 'px';


  } );


}

// contentPosition();
