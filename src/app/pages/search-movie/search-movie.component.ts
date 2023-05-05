import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  constructor(private userService:UserService){}
  public movieName="";
  movies : {
    position: number,
    movieName: string,
    theaterName: string,
    ticketStatus: string,
    }[] = [];
  ngOnInit() : void {}
  search(){
    this.movies = [];
    console.log("Movie "+this.movieName+" is Searched");
    this.userService.serachMovie(this.movieName).subscribe(
      (data:any) =>{
        let count = data.length;
        let i=1
        while(i <= count){
          this.movies.push({
            position: i, movieName: data[i-1].movieName, theaterName: data[i-1].theatreName, ticketStatus: data[i-1].ticketsStatus
          });
          i++;
        }
        console.log("from search-movies Componenet"+this.movies);
      },
      (error)=>{
        console.log("from search-movies Componenet :"+error);
      }
    );
    console.log("Searching Movie");
  }
  onClickBuyTicket(){
    console.log("Buying Ticket");
    window.location.href='/api/v1.0/moviebooking/add';
  }
}
