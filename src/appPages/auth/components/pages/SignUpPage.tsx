'use client';
import { useSignUpMutation } from '@/redux/api/auth';
import { useState } from 'react';

const SignUpPage = () => {
	const [email, setEmail] = useState<string>('');
	const [photo, setPhoto] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [mutate, {}] = useSignUpMutation();

	async function registration() {
		try {
			const obj = {
				email: email,
				password: password,
				photo:
					'data:image/jpeg;base64,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',
				username: 'aziret'
			};
			const { data } = await mutate(obj);
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
			<h1>sign up</h1>
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
			<button onClick={registration}>submit</button>
			<button onClick={checkUser}>check</button>
		</section>
	);
};

export default SignUpPage;
