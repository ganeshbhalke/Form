import { Injectable } from "@angular/core";


Injectable({
    providedIn:'root'
})

export interface IData{
    UserName:string;
    email:string;
    password:number;
}