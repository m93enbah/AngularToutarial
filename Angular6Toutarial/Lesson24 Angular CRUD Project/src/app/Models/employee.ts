import {ISkill} from './skills';
export class IEmployee {
    id: number;
    fullName: string;
    email: string;
    confirmEmail:string;
    phone: number;
    contractPreference: string;
    Skills: Array<ISkill>;
}