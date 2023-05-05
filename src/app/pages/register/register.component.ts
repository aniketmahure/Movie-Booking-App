import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor(private userService: UserService){}
    public user = {
      loginId: '',
      firstName : '',
      lastName : '',
      email:'',
      contactNumber:'',
      password:'',
      admin:false,
      users:false,
      roles:''
    }

    ngOnInit():void {}

    formSubmit(){
      if(this.user.loginId == '' || this.user.loginId == null){
          alert("User Name is required !")
          return;
      }
      if(this.user.firstName == '' || this.user.firstName == null){
        alert("First Name is required")
        return;
      }
      if(this.user.lastName == '' || this.user.lastName == null){
        alert("Last Name is required !")
        return;
      }
      if(this.user.admin == false && this.user.users == false){
        alert("Select Role !")
        return;
      }
      if(this.user.email == '' || this.user.email == null){
        alert("Email is required !")
        return;
      }
      if(this.user.contactNumber == '' || this.user.contactNumber == null){
        alert("Enter Correct Contact Number !")
        return;
      }
       if(this.user.password == '' || this.user.password == null || this.user.password.length < 7){
        alert("Enter Valid Password!")
        return;
      }
      if(this.user.admin == true){
        this.user.roles = 'admin';
      }
      else{
        this.user.roles = 'user';
      }
      this.userService.register(this.user).subscribe(
        (data:any)=>{
          //sucess
          console.log(data);
          Swal.fire('Success',' user is registered','success');
        },
        (error)=>{
          //failure
          console.log(error)
          Swal.fire('Oops!', 'Something went wrong!','error');
        }
      );
      
    }
}
