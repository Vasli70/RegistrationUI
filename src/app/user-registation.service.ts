import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post("http://localhost:9191/Register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:9191/getallusers");
  }

  public findUserById(id){
    return this.http.get("http://localhost:9191/getuser/"+id);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9191/deleteuser/"+id);
  }

  public getUserbymail(email){
    return this.http.delete("http://localhost:9191/getuserbyemail"+email);
  }


 


}
