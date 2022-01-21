import { StatoFatture } from './../stato-fatture/stato-fatture';
import { Customer } from '../customer/customer';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
export class Fatture implements IFatture{
    id!:number;
    data!:string;
    numero!:number;
    anno!:number;
    importo!:number;
    stato: StatoFatture = new StatoFatture;
    cliente: Customer = new Customer;
}
