import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let mockUserService:UserService;
  let mockRouter : Router;
  let Booking : BookingComponent;
  
  beforeEach(()=>{
    Booking =  new BookingComponent(mockUserService,mockRouter);
  })
  it('should called without error', () => {
    let result = Booking.formSubmit();
    expect(result).toBe("Booking");
  });
  it('should called without error', () => {
    let result = Booking.remove();
    expect(result).toBe("All Input is refreshed");
  });
});