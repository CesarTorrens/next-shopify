import { GraphQLClientSingleton } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customAccessTokenCreate";
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string) => {
    const cookiesStore = cookies()
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customerAccessTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, {
        'email': email,
        'password': password
    })
    const { customerAccessToken } = customerAccessTokenCreate

    if (customerAccessToken.accessToken) {
        cookiesStore.set('accessToken', customerAccessToken.accessToken, {
            path: "/",
            expires: new Date(customerAccessToken.expiresAt),
            httpOnly: true,
            sameSite: 'strict'
        })
    }
    return customerAccessToken.accessToken
}