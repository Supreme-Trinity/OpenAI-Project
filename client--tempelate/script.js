import bot from './assets/bog.svg';
import user from './assets/user.svg';

const form= document.querySelector('form');
const chat_container= document.querySelector('#chat_container');

let loadInterval;

function Loader(element){
  element.textContent ='';
  loadInterval= setInterval(() =>{
    element.textContent+='.';
    if(element.textContent==='....'){
      element.textContent='.';
    }
  },300)
}