'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFromForgotPassword {
	email: string;
	frontEndUrl: string;
}

const ForgotPassword = () => {
	const { register, handleSubmit } = useForm<IFromForgotPassword>();

	const onSubmit: SubmitHandler<IFromForgotPassword> = async (data) => {
		const newData = {
			email: data.email,
			frontEndUrl: window.location.href
		};
		console.log(newData);
	};
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					style={{
						marginBottom: '20px',
						width: '300px',
						padding: '10px',
						border: '1px solid #ccc',
						borderRadius: '5px',
						fontSize: '16px'
					}}
					type="text"
					placeholder="emaill"
					{...register('email', { required: true })}
				/>

				<button
					style={{
						backgroundColor: 'red',
						color: 'white',
						border: 'none',
						padding: '10px 20px',
						cursor: 'pointer',
						fontSize: '16px',
						marginTop: '50vh',
						borderRadius: '5px'
					}}
				>
					Забыли пароль
				</button>
			</form>
		</div>
	);
};

export default ForgotPassword;
