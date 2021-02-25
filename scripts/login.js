const loginbtn = document.getElementById('loginbtn');
console.log(loginbtn);
loginbtn.addEventListener('click', async (e) => {
	e.preventDefault();
	let email = document.getElementById('email');
	let password = document.getElementById('password');
	console.log(email, password);
	if (email.value !== '' && password.value !== '') {
		let data = {
			email: email.value,
			password: password.value,
		};
		console.log(data);
		let verifyData = async () => {
			let verifyResponse = await fetch(
				'https://password-change-using-email.herokuapp.com/api/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			);

			let result = await verifyResponse.json();
			console.log(result.token);
			if (result.token !== 'undefined') {
				localStorage.setItem('token', result.token);
			}
			// let resultData = await result.json();
			// console.log(resultData);

			window.location.replace('https://dazzling-nobel-b0e887.netlify.app/homePage.html');
		};
		verifyData();

		console.log('verified');
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
