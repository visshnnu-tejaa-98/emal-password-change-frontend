let emailSubmit = document.getElementById('forgotSubmit');

console.log(emailSubmit);
emailSubmit.addEventListener('click', async (e) => {
	e.preventDefault();
	let email = document.getElementById('email').value;
	console.log(email);
	let getUser = await fetch('https://password-change-using-email.herokuapp.com/api/users');
	let userData = await getUser.json();

	let userId = userData.find((user) => user.email === email)._id;
	console.log(userId);

	let putId = await fetch('https://password-change-using-email.herokuapp.com/api/users/' + userId, {
		method: 'POST',
	});
	let putData = await putId.json();
	console.log(putData);

	console.log(userData);
});
