//on the ISkill class we write the following code

export class ISkill {
    skillName: string;
    experienceOfYear: number;
    proffeicency: string;
    empId:number;
}
//on the IEmployee class we write the following code
export class IEmployee {
    Id: number;
    fullName: string;
    email: string;
    confirmEmail:string;
    phone: number;
    contractPreference: string;
    Skills: Array<ISkill>;}
