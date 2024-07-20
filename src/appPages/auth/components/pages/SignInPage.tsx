'use client';
import axios from 'axios';
import { useState } from 'react';

const SignInPage = () => {
	const [email, setEmail] = useState<string>('');
	const [photo, setPhoto] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	async function registration() {
		try {
			const obj = {
				email: email,
				password: password
			};
			const { data } = await axios.post(
				`https://api-instagram.elcho.dev/api/v1/auth/sign-in`,
				obj
			);
			const res = data.accessToken;
			localStorage.setItem('accessToken', JSON.stringify(res));
		} catch (error) {
			alert(error);
		}
	}

	function checkUser() {
		const user = JSON.parse(localStorage.getItem('accessToken') || '');
		if (user) {
			alert('Access token');
		}
	}
	return (
		<section>
			<h1>sign in</h1>
			<input
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				placeholder="email"
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="password"
			/>
			<button onClick={registration}>sign in</button>
		</section>
	);
};

export default SignInPage;
