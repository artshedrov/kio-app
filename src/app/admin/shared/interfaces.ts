export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Section {
  id?: string;
  title: string;
  text: string;
}

export interface FireBaseCreateResponse {
  name: string;
}

