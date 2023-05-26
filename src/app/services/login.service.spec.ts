import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let mockHttp:HttpClient;
  let Booking : LoginService;
  
  beforeEach(()=>{
    Booking =  new LoginService(mockHttp);
  })
  it('should call if admin not login', () => {
    let result = Booking.adminLoggedIn();
    expect(result).toBe(false);
  });
  it('should call if user is not login', () => {
    let result = Booking.userLoggedIn();
    expect(result).toBe(false);
  });
  it('should call logout', () => {
    let result = Booking.logout();
    expect(result).toBe(true);
  });
});
