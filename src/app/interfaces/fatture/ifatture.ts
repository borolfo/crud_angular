import { ICustomer } from "../customer/icustomer";
import { IStatoFatture } from "../stato-fatture/istato-fatture";

export interface IFatture {
    id:number,
    data:string,
    numero:number,
    anno:number,
    importo:number,
    stato:IStatoFatture,
    cliente: ICustomer
}


