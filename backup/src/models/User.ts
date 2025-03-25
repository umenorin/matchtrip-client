class User {
    email:string;
    nationality: string;
    gender:string;
    password:string;
    id?:string;
    name?:string;
    numberPhone?:string;
    uniqueIdentification?:string;
    age?:number;
    rating?:any;
    travels?: any; 

    constructor(
        { id, email, name ,password,uniqueIdentification,age,numberPhone,nationality,gender}: 
        { id?: string | undefined; email: string; name?: string;password:string;
            numberPhone?:string,uniqueIdentification:string;age:number;nationality:string;gender:string;},
    ){
        this.id=id;
        this.email=email;
        this.name=name;
        this.password = password;
        this.numberPhone = numberPhone;
        this.uniqueIdentification = uniqueIdentification;
        this.age = age;
        this.nationality = nationality;
        this.gender = gender;
    }
}

export default User;