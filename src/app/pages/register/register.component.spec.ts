import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let mockUserService:UserService;
  let Booking : RegisterComponent;
  let mockRouter : Router
  
  beforeEach(()=>{
    Booking =  new RegisterComponent(mockUserService, mockRouter);
  })
  it('should say Input username', () => {
    Booking.user.loginId = '';
    Booking.user.firstName ="firstname";
    Booking.user.lastName = 'lastName';
    Booking.user.email='email@mail.com';
    Booking.user.admin = false;
    Booking.user.users = false;
    let result = Booking.formSubmit();
    expect(result).toBe("input username");
  });
  it('should say Input FirstName', () => {
    Booking.user.loginId = 'username';
    Booking.user.firstName ="";
    Booking.user.lastName = 'lastName';
    Booking.user.email='email@mail.com';
    Booking.user.admin = false;
    Booking.user.users = false;
    let result = Booking.formSubmit();
    expect(result).toBe("input firstname");
  });
  it('should say Input LastName', () => {
    Booking.user.loginId = 'usernamer';
    Booking.user.firstName ="firstname";
    Booking.user.lastName = '';
    Booking.user.email='email@mail.com';
    Booking.user.admin = false;
    Booking.user.users = false;
    let result = Booking.formSubmit();
    expect(result).toBe("input lastname");
  });
  it('should say Select Role', () => {
    Booking.user.loginId = 'usernamer';
    Booking.user.firstName ="firstname";
    Booking.user.lastName = 'lastName';
    Booking.user.email='email@mail.com';
    Booking.user.admin = false;
    Booking.user.users = false;
    let result = Booking.formSubmit();
    expect(result).toBe("select role");
  });
  it('should say Input email', () => {
    Booking.user.loginId = 'usernamer';
    Booking.user.firstName ="firstname";
    Booking.user.lastName = 'lastName';
    Booking.user.email= '';
    Booking.user.admin = false;
    Booking.user.users = true;
    let result = Booking.formSubmit();
    expect(result).toBe("input email");
  });

});
