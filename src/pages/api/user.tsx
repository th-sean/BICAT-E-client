import { Amplify, withSSRContext } from "aws-amplify";
import awsconfig from '../../aws-exports'

Amplify.configure({...awsconfig, ssr: true})

export default async function user(req: any, res:any){
    const { Auth } = withSSRContext({req})
    try{
        const user = await Auth.currentAuthenticatedUser()
        res.json({user: user.username})
    } catch(err){
        res.statusCode = 401;
        res.json({user:null});
    }
}