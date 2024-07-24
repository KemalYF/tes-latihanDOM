document.querySelector('button').addEventListener('click', (e) => {
	console.log(e);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
			console.log('tombol panah atas');
			break;
		case 'ArrowDown':
			console.log('tombol panah bawah');
			break;
		case 'ArrowLeft':
			console.log('tombol panah kiri');
			break;
		case 'ArrowRight':
			console.log('tombol panah kanan');
			break;
		default:
			console.log('tombol diabaikan');
	}
});
 
// input.addEventListener('keyup', () => {
// 	console.log('tombol dilepas');
// });