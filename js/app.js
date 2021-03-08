// The App JS Contains global js code for all the website pages


// Dynamic Header Script
const icon = document.querySelector( '.icon' );
const nav = document.querySelector( 'nav' );

icon.addEventListener( 'click', () => {
  icon.classList.toggle( 'close' );
  nav.classList.toggle( 'show' );
} );


// Dynamic Contact Us

const touchButton = document.querySelector( '.float-text' );
const card = document.querySelector( '.float-card-info' );
const close1 = document.querySelector( '.fa-times' );

touchButton.addEventListener( 'click', moveCard );
close1.addEventListener( 'click', removeCard );

let y;
function moveCard( evt ) {
  y =evt.target;

  y.parentElement.nextElementSibling.style.display='block';
  console.log( 'this is y', y );
  card.classList.toggle( 'active' );

}

let x;
function removeCard( event ){

  x = event.target;
  console.log( x );
  x.parentElement.style.display='none';


}
// Creat Obejcts
let orderArray = [5,7,4,2,8,3,1,6,1,2,5,6,3,7,4,8,2,8,3,4,7,5,6,1,7,3,6,1,4,8,5,2,6,1,7,3,5,2,8,4,4,7,2,8,6,1,3,5,3,6,8,5,1,4,2,7];
let optionsText = ['I think I can quickly see and take advantage of new opportunities.',
  'I can work well with a very wide range of people.',
  'Producing ideas is one of my natural assets.',
  'My ability rests in being able to draw people out whenever I detect they have something of value to contribute to group objectives.',
  'My capacity to follow through has much to do with my personal effectiveness.',
  'I am ready to face temporary unpopularity if it leads to worthwhile results in the end.',
  'I can usually sense what is realistic and likely to work.',
  'I can offer a reasoned case for alternative courses of action without introducing bias or prejudice.',
  'I am not at ease unless meetings are well structured and controlled and generally well conducted.',
  'I am inclined to be too generous towards others who have a valid viewpoint that has not been given a proper airing.',
  'I have a tendency to talk too much once the group gets on to new ideas.',
  'My objectives outlook makes it difficult for me to join in readily and enthusiastically with colleagues.',
  'I am sometimes seen as forceful and authoritarian if there is a need to get something done.',
  'I find it difficult to lead from the front, perhaps because I am overresponsive to group atmosphere.',
  'I am apt to get too caught up in ideas that occur to me and so lose track of what is happening.',
  'My colleagues tend to see me as worrying unnecessarily over detail and the possibility that things may go wrong.',
  'I have an aptitude for influencing people without pressuring them.',
  'My general vigilance prevents careless mistakes and omissions being made.',
  'I am ready to press for action to make sure that the meeting does not waste time or lose sight of the main objective.',
  'I can be counted on to contribute something original.',
  'I am always ready to back a good suggestion in the common interest.',
  'I am keen to look for the latest in new ideas and developments.',
  'I believe my capacity for judgment can help to bring about the right decisions.',
  'I can be called upon to see that all essential work is organised',
  'I have a quiet interest in getting to know colleagues better.',
  'I am not reluctant to challenge the views of others or to hold a minority view myself.',
  'I can usually find a line of argument to refute unsound propositions.',
  'I think I have a talent for making things work once a plan has to be put into operation.',
  'I have a tendency to avoid the obvious and to come out with the unexpected.',
  'I bring a touch of perfectionism to any job I undertake.',
  'I am ready to make use of contacts outside the group itself.',
  'While I am interested in all views I have no hesitation in making up my mind once a decision has to be made.',
  'I enjoy analysing situations and weighing up all the possible choices.',
  'I am interested in finding practical solutions to problems.',
  'I like to feel I am fostering good working relationships.',
  'I can have a strong influence on decisions.',
  'I can meet people who may have something new to offer.',
  'I can get people to agree on a necessary course of action.',
  'I feel in my element where I can give a task my full attention.',
  'I like to find a field that stretches my imagination.',
  'I would feel like retiring to a corner to devise a way out of the impasse before developing a line.',
  'I would be ready to work with the person who showed the most positive approach.',
  'I would find some way of reducing the size of the task by establishing what different individuals might best contribute.',
  'My natural sense of urgency would help to ensure that we did not fall behind schedule.',
  'I believe I would keep cool and maintain my capacity to think straight.',
  'I would retain a steadiness of purpose in spite of the pressures.',
  'I would be prepared to take a positive lead if I felt the group was making no progress.',
  'I would open up discussions with a view to stimulating new thoughts and getting something moving.',
  'I am apt to show my impatience with those who are obstructing progress.',
  'Others may criticise me for being too analytical & insufficiently intuitive.',
  'My desire to ensure that work is properly done can hold up proceedings.',
  'I tend to get bored rather easily and rely on one or two stimulating members to spark me off.',
  'I find it difficult to get started unless the goals are clear.',
  'I am sometimes poor at explaining and clarifying complex points that occur to me.',
  'I am conscious of demanding from others the things I cannot do myself.',
  'I hesitate to get my points across when I run up against real opposition.'];
let SectionTitle = [
  'What I believe I can contribute to a team',
  'If I have a possible shortcoming in teamwork, it could be that',
  'When involved in a project with other people',
  'My characteristic approach to group work is that',
  'I gain satisfaction in a job because',
  'If I’m suddenly given a difficult task with limited time and unfamiliar people',
  'With reference to the problems to which I am subject in working in groups',
];

let imagePath=[
  'https://placehold.it/100x100/ddd',
  'https://placehold.it/100x100/ddd',
  'https://placehold.it/100x100/ddd',
  'https://placehold.it/100x100/ddd',
  'https://placehold.it/100x100/ddd',
  'https://placehold.it/100x100/ddd',
  'https://placehold.it/100x100/ddd'];

function Personality( name, shortcutName ) {
  this.name = name;
  this.value = 0;
  this.percentege = 0;
  this.shortcutName = shortcutName;
  Personality.all.push( this );
}
Personality.all = [];
let PersonalityName = ['COMPANY WORKER', 'CHAIRPERSON', 'SHAPER', 'PLANT', 'RESOURCE INVESTIGATOR',
  'MONITOR EVALUATOR', 'TEAM WORKER', 'COMPLETERFINISHER'];
let PersonalityShortcutName = ['CW', 'CP', 'SH', 'PL', 'RI', 'ME', 'TW', 'CF'];
for ( let index = 0; index < PersonalityShortcutName.length; index++ ) {
  const PersonalityObject = new Personality( PersonalityName[index], PersonalityShortcutName[index] );
}
Section.all = [];
function Section( SectionNumber, header, options, order ,imagePath ) {
  this.SectionNumber = SectionNumber;
  this.header = header;
  this.options = options;
  this.order = order;
  this.userAnswer = [];
  this.imagePath = imagePath;
  Section.all.push( this );
}
let zeroArray = new Array( 8 ).fill( 0 );
let index = 0;
for ( let i in SectionTitle ) {
  let tempArray = [];
  let tempOrder=[];
  for ( let j in zeroArray ) {
    tempArray.push( optionsText[index] );
    tempOrder.push( orderArray[index] );
    index++;
  }
  const SectionObject = new Section( i + 1, SectionTitle[i], tempArray, tempOrder,imagePath );
}
// localStorage.setItem( 'Personality', JSON.stringify( Personality.all ) );
// localStorage.setItem( 'Section', JSON.stringify( Section.all ) );
// *********************************************************************



