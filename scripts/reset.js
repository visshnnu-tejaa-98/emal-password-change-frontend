let resetbtn = document.getElementById('resetbtn');
resetbtn.addEventListener('click', (e) => {
	e.preventDefault();
	// let data = {
	// 	email: document.getElementById('email').value,
	// 	password: document.getElementById('password').value,
	// };

	const updatData = async () => {
		let response = await fetch(`https://password-change-using-email.herokuapp.com/api/users`);
		let data = await response.json();
		console.log(data);
		let user = data.find((user) => user.email == document.getElementById('email').value);
		console.log(user);
		console.log(user._id);
		let dataObj = {
			_id: user._id,
			password: document.getElementById('password').value,
		};
		let userRes = await fetch(
			`https://password-change-using-email.herokuapp.com/api/users/${user._id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataObj),
			}
		);
		console.log('updated');
	};
	updatData();
});
