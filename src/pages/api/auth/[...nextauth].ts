import NextAuth, { NextAuthOptions } from "next-auth"
import CognitoProviders from "next-auth/providers/cognito"
import FacebookProviders from "next-auth/providers/facebook"

export const authOptions: NextAuthOptions = {
    providers:[
        CognitoProviders({
            clientId: process.env.COGNITO_CLIENT_ID as string,
            clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
        }),
    ]
}



export default NextAuth(authOptions)