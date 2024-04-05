import * as setup from './pagesetup.js';
import './style.css';

const homeBtn = document.getElementById('home');
console.log(homeBtn.innerHTML);
const menuBtn = document.getElementById('menu');
const aboutUsBtn = document.getElementById('aboutUs');

setup.setHome
homeBtn.addEventListener("click",setup.setHome);
menuBtn.addEventListener("click",setup.setMenu);
aboutUsBtn.addEventListener("click",setup.setAboutUs);

console.log("hello world");