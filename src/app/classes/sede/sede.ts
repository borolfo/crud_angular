import { Comuni } from 'src/app/classes/comuni/comuni';
import { ISede } from 'src/app/interfaces/sede/isede';
export class Sede implements ISede {
    id!: number;
    via!: string;
    civico!: string;
    cap!: string;
    localita!: string;
    comune: Comuni = new Comuni;
}
