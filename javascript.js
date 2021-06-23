// const navMenu = document.querySelector('#nav-menu');
// const navToggle = document.querySelector('#nav-toggle');
// const navClose = document.querySelector('#nav-close');

// navToggle.addEventListener('click',()=>{
// 	navMenu.classList.toggle('show');
// });
// navClose.addEventListener('click',()=>{
// 	navMenu.classList.remove('show');
// });

// const NavLink = document.querySelectorAll('.nav__link');
// function linkAction(){
// 	for(let i = 0;  i < NavLink.length;i++){
// 		NavLink[i].classList.remove('active');
// 		this.classList.add('active');

// 		navMenu.classList.remove('show');
// 	}
// }
// for(let i = 0;  i < NavLink.length;i++){
// 	NavLink[i].addEventListener('click',linkAction);
// }

const btn = document.querySelector('button.btn');
const navbar = document.querySelector('#navSection');
const close = document.querySelector('.close');
btn.addEventListener('click',()=>{
	navbar.classList.add('show');
});

close.addEventListener('click',()=>{
	navbar.classList.remove('show');
});