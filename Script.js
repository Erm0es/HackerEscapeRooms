console.log ("Script is running..");

const headerMenuUL = document.querySelector('.headerMenuUL');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
headerMenuUL.style.display = 'flex';
headerMenuUL.style.top = '-10px';



}

function close(){
  headerMenuUL.style.top = '-300%';
}