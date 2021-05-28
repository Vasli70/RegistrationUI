import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

  users:any;
  email:string;
  id:number;
  
  constructor(private service:UserRegistationService) { }

public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data)=>this.users=data);
}


public findUserById(id){
  let resp= this.service.findUserById(id);
  resp.subscribe((data)=>this.users=data);
 }

 public findUserByemail(email){
  let resp= this.service.getUserbymail(email);
  resp.subscribe((data)=>this.users=data);
 }


  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
