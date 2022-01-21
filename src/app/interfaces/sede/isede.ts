import { IComuni } from 'src/app/interfaces/comuni/icomuni';
export interface ISede {
    id: number;
    via: string;
    civico: string;
    cap: string;
    localita: string;
    comune: IComuni;
}
