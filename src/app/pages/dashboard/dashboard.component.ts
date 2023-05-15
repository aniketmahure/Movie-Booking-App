import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private userService:UserService){}
  public movieName ="";
  public deleteMovieName ="";
  ngOnInit():void {}
  onSubmitDelete(){
    console.log(" delete movie ="+this.deleteMovieName);
    if(this.deleteMovieName == '' || this.deleteMovieName == null){
      Swal.fire('No Input','Enter Movie Name','info');
    }
    else{
      this.userService.deleteMovie(this.deleteMovieName).subscribe(
      (data:any) =>{
        Swal.fire('Sucess',data,'success');
        console.log(data);
        this.deleteMovieName="";
      },
      (error:any) =>{
        Swal.fire('Sucess','something went wrong!!','error');
        console.log("something went wrong!!"+JSON.stringify(error));
      }
      );
    }
  }
  onSubmitUpdate(){
    if(this.movieName == '' || this.movieName == null){
      Swal.fire('No Input','Enter Movie Name','info');
    }
    else{
      console.log(" update status = "+ this.movieName);
      this.userService.serachMovie(this.movieName).subscribe(
        (data:any) =>{
          let movie = ''
          console.log("from dashboard Componenet == "+data[0].movieName+" == "+JSON.stringify(data[0]._id));
          movie = data[0].movieName;
          this.userService.updateTicketStatus(data[0].movieName,'945dfdf34153b4a988065237').subscribe(
            (data)=>{
              console.log(" data after updateTicketStatus() fun");
              Swal.fire('Updated',movie+' movie Status is Updated','success');
            },
            (error)=>{
              console.log(" Error occured after updateTicketStatus() fun !"+ JSON.stringify(error));
              Swal.fire('Error Occured','Something went wrong!!','error');
            }
          );
        },
        (error)=>{
          console.log("from dashboard Componenet :"+error);
        }
      );
      this.movieName = ""
    }
  }
}
