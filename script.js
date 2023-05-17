let bascket_id = document.getElementById('bascket');
let close = document.getElementById('close');
let bascket = document.getElementsByClassName('bascket');


bascket_id.addEventListener('click', index);
close.addEventListener('click', closed);


function index() {
	bascket[0].classList.add("bascket_drop");
	
}
function closed() {
	bascket[0].classList.remove("bascket_drop");
}