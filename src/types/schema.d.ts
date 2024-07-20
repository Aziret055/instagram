interface User {}

namespace AUTH {
	type PostForgotResponse = {
		success: boolean;
	};
	type PostForgotRequest = {
		email: string;
	};
}
