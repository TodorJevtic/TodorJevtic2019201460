import { Injectable } from "@angular/core";

export interface User {
    id: number;
    forename: string;
    surname: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;

}
@Injectable()
export class UserService{
    defaultUser: User = UserService.dummyUserList[0];
    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> =[
        {
            id: 1,
            forename: "Profile",
            surname: "Profile",
            email: "example@gmail.com",
            password: "password", 
        },
        {
            id: 2,
            forename: "Todor",
            surname: "Jevtic",
            email: "todorjevtic@gmail.com",
            password: "todor159",
            phone: "0645306268",
            address: "Nemanjina68"  
        },
        {
            id: 3,
            forename: "Marko",
            surname: "Markovic",
            email: "markomarkovic@gmail.com",
            password: "marko159",
            phone: "0655306268",
            address: "Nemanjina70"  
        }]

    getUserName(user: User): string {
        return user.email;
    }
    getUserById(id: number) : User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user =>{
            if(user.id == id){
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
        //return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!; 
       
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;      
    }
    registerUser(forename: string, surname: string,email: string, password: string, phone: string, address: string): User{
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user =>{
            if(maxId < user.id){
                maxId = user.id;
            }
        })
        var id = ++maxId;
        var user: User = {id, forename, surname, email, password, phone, address};

        UserService.dummyUserList.push(user);
        this.currentUser = user;
        console.log(user);
        return user;
    }

}