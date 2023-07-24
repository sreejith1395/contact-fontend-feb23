import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Contactschema } from 'src/model/contact-schema';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

  allGroups:any=[]
  contact:Contactschema={}
  constructor(private editRoute:ActivatedRoute,private api:ApiService,private navigate:Router){}

  ngOnInit(): void {
    //get parameter from url
    this.editRoute.params.subscribe({
      next:(parameter:any)=>{
        const {id} = parameter
        console.log(id);
        //make a call to service to get contact
        this.api.viewContact(id).subscribe({
          next:(res:any)=>{
            console.log(res);
            this.contact=res
          }
        })
        //make an call to service to get all groups
        this.api. getGroups().subscribe({
          next:(res:any)=>{
            this.allGroups = res
          }
        })
      }
    })
  }

  updatecontact(id:any,contact:any){
    //make a call to service
    this.api.editcontact(id,contact).subscribe({
      next:(res:any)=>{
        alert("Successfully updated..")
        this.navigate.navigateByUrl("")
      }
    })
  }

}
