
//response comes from https://firebase.google.com/docs/reference/rest/auth firebase response for signin, signup
export class AuthResponseData {
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;
}