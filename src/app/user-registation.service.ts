import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

   ROOT_URL:String='http://userservice-env.eba-npdjp5cm.us-east-1.elasticbeanstalk.com/';

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post( this.ROOT_URL + "/Register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.ROOT_URL + "/getallusers");
  }

  public findUserById(id){
    return this.http.get(this.ROOT_URL + "/getuser/"+id);
  }

  public deleteUser(id){
    return this.http.delete(this.ROOT_URL +  "/deleteuser/"+id);
  }

  public getUserbymail(email){
    return this.http.delete(this.ROOT_URL +  "/getuserbyemail"+email);
  }


 


}
