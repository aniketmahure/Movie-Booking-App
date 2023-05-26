import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let mockLoginService:LoginService;
  let Booking : LoginComponent;
  let mockRouter : Router;
  
  beforeEach(()=>{
    Booking =  new LoginComponent(mockLoginService, mockRouter);
  })
  it('should say Input username', () => {
    Booking.user.loginId = '';
    let result = Booking.formSubmit();
    expect(result).toBe("input username");
  });
  it('should say Input Password', () => {
    Booking.user.loginId='abc'
    Booking.user.password = '';
    let result = Booking.formSubmit();
    expect(result).toBe("input password");
  });
});
