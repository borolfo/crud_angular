import { iLogin } from "src/app/interfaces/auth/ilogin";

export class AdminLogin implements iLogin{
    username: string = 'admin';
    password: string = '111111';
}