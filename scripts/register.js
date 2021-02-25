register.addEventListener('click', (e) => {
	e.preventDefault();
	let register = document.getElementById('register');
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let password = document.getElementById('password');
	if (name.value !== '' && email.value !== '' && password.value !== '') {
		let data = {
			name: name.value,
			email: email.value,
			password: password.value,
		};
		console.log(data);

		const putData = async () => {
			let apiResponse = await fetch('https://password-change-using-email.herokuapp.com/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			console.log('Data inserted');
		};
		putData();
		name.value = '';
		email.value = '';
		password.value = '';

		document.getElementById('hidden').classList.remove('hidden');
		setTimeout(() => {
			document.getElementById('hidden').classList.add('hidden');
		}, 1000);
		window.location.replace('https://dazzling-nobel-b0e887.netlify.app/login.html');
	} else {
		document.getElementById('hidden').innerHTML = `
			<div class=" failure">
				<p class=""><i class="fas fa-user-check "></i>Enter Details</p>
			</div>
			`;
		document.getElementById('hidden').classList.remove('hidden');
		setTimeout(() => {
			document.getElementById('hidden').classList.add('hidden');
		}, 1000);
	}
});
