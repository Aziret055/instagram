import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<AUTH.GetResponse, AUTH.GetRequest>({
			query: () => ({
				url: 'auth/user',
				method: 'GET'
			}),
			providesTags: ['auth']
		}),
		signUp: build.mutation({
			query: (data) => ({
				url: 'auth/sign-up',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['auth']
		}),
		forgot: build.mutation<AUTH.PostForgotResponse, AUTH.PostForgotRequest>({
			query: (forgotData) => ({
				url: 'auth/forgot',
				method: 'POST',
				body: forgotData
			}),
			invalidatesTags: ['auth']
		})
	})
});
export const { useGetMeQuery, useSignUpMutation, useForgotMutation } = api;
