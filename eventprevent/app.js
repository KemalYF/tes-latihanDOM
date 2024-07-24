const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// Tambahkan event listener untuk event 'change'
input.addEventListener('change', function (e) {
    console.log('Nilai berubah setelah kehilangan fokus:');
});

// Tambahkan event listener untuk event 'input'
input.addEventListener('input', function (e) {
    console.log('Nilai berubah saat sedang diketik:');
});

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const noteValue = input.value;
	const newList = document.createElement('li');
	newList.innerText = noteValue;
	list.append(newList);
	input.value = '';
});

list.addEventListener('click', function (e) {
	if (e.target.nodeName === 'LI') {
		e.target.remove();
		console.log('Element dihapus');
	} else {
		console.log('Element bukan li');
	}

});

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
// 	li.addEventListener('click', function (e) {
// 		e.target.remove();
// 	});
// }