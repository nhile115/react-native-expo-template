export interface IUser {
    id: string;
}

export interface ICreateUser {
    userName: string;
    email: string;
    password: string;
}


export type ISignInDto = Pick<ICreateUser, 'email' | 'password'>