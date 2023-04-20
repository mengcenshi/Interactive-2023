// function checkName(){
// 	var myName="Nina";
// 	console.log(myName);

// }
// var myName="another name";
// console.log("myName");

//----------/* part 2*/----------------
// function checkName(){
// 	let myName="Blue and Zorro";
// 	console.log(myName);

// }


// console.log(myName);

// ----/* part 2*/----

// const myName="Lizzle";
// function checkName(){

// console.log(myName);
// }
// console.log("heres my name again" + myName);
// var myName="gato";

// ----/* part 3*/----

// function createPurpleCircle(){
//  const purpleCircle = document.createElement('div');
//  purpleCircle.className = "purpleCircle";
//  document.body.appendChild(purpleCircle);

// }

// document.body.addEventListener('click', createPurpleCircle);

// function changeToYellow(){
//  const updateSquares = document.querySelectorAll('div.purpleCircle');
//  for( const square of updateSquares){
//    square.className="yellowSquare";
//  }
// }

// var yellowButton = document.querySelector('button');
// yellowButton.addEventListener('click', changeToYellow);


var paragraph = document.querySelector('p.paragraph');
let rainbow = document.querySelector('div#rainbow');
let dark = document.querySelector('div#dark');


function toggleClass(){

 if(paragraph.className === 'paragraph'){
  paragraph.className = 'rainbowClass';
 }else if(paragraph.className === 'rainbowClass'){
  paragraph.className = "dark";
 }else if(paragraph.className === "dark"){
  paragraph.className = 'rainbowClass';
 }
}

rainbow.addEventListener('click', toggleClass);
dark.addEventListener('click', toggleClass);









