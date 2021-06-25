//this class is used by Behaviour subject to store auth-response-data from firebase response
export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    public _tokenExpirationDate: Date
  ) {}

  //its gitter that used to return property
  get token() {
    //to check that the expiration date is older than the current date
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
