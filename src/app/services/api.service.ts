import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Contactschema } from 'src/model/contact-schema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL= 'http://localhost:3000'

  // service constructor 

  constructor(private http :HttpClient) { }

  // handle error

  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    // errorMsg=`Error:${error.message}`
    if(error.error){

      // client error 
      errorMsg=`Error:${error.message}`
    }
    else{
      errorMsg=`status:${error.status}\n
      Error:${error.message} `
    }
    return throwError(()=>errorMsg)
  }
    
    // Api call

    // create a function in api.service.ts 

    // get all contact api 
    getAllContact(){

      // url: http://localhost:3000/contacts          req:get

      // this.http.get('http://localhost:3000/contacts')

      // return   this.http.get('http://localhost:3000/contacts')

       return this.http.get(`${this.BASE_URL}/contacts`)


 



    }

    // view component 


    viewContact(id:any){

      // api call url:/ url: http://localhost:3000/contacts /id       req:get

      return this.http.get(`${this.BASE_URL}/contacts/${id}`)

    }

    // api call gor getting particular group 

    getGroup(id:any){


      return this.http.get(`${this.BASE_URL}/groups/${id}`)

    }

  // api call to get groups
    getGroups(){
      return this.http.get(`${this.BASE_URL}/groups`)
    }

    // to add contact api -post

    addContact(contact:Contactschema){

      return this.http.post(`${this.BASE_URL}/contacts`,contact)

    }

    deleteContact(id:any){
    //  api call 
    return  this.http.delete(`${this.BASE_URL}/contacts/${id}`)

    }


      //editcontact
  editcontact(id:any,body:Contactschema){
    //make api call to http://localhost:3000/contacts/id
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,body)
  }






   
}
