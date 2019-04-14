document.querySelector('.signin')
	.addEventListener('click', function() {
		document.querySelector('.login-form').style.display = 'none';
		document.querySelector('.register-form').style.display = 'flex';
	});

document.querySelector('.signup')
	.addEventListener('click', function() {
		document.querySelector('.register-form').style.display = 'none';
		document.querySelector('.login-form').style.display = 'flex';
	});