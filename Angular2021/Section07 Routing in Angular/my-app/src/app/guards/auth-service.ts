export class AuthService {

  loggedIn = false

  // isAuthenticated(){
  //   const promise = new Promise(async (resolve, reject) => {
  //     setTimeout(() =>{
  //      resolve(this.login());
  //     }, 800);
  //   });
  //   return promise;
  // }

  login(){
   return this.loggedIn = true;
  }

  logout(){
   return this.loggedIn = false;
  }
}