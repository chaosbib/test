export interface JwtDecoded {
  iss: string;
  nbf: number;
  aud: string;
  sub: string;
  email: string;
  email_verified: string;
  azp: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
}