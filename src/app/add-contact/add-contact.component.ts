import { Component, OnInit } from '@angular/core';
import { Contactschema } from 'src/model/contact-schema';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  contact:Contactschema={}
   groups:any=[]

  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId= "select a group"
  }
  ngOnInit(): void {
    
    this.api.getGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.groups=response
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })

  }

  create(groupId:any){
    console.log(groupId.model);
    
  }

  addContact(contact:Contactschema){
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        // data added in to sever 
        console.log(response);

        // navigate to all contact page
        this.addContactRouter.navigateByUrl('')
      
        
      },

      error:(err:any)=>{
        console.log(err.message);
        
      }

    })
  }


}
