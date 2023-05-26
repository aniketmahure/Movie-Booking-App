import { UserService } from 'src/app/services/user.service';

import { ForgotComponent } from './forgot.component';

describe('ForgotComponent', () => {
  let mockUserService:UserService;
  let Booking : ForgotComponent;
  
  beforeEach(()=>{
    Booking =  new ForgotComponent(mockUserService);
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
