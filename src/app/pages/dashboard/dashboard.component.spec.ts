import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let dashboard: DashboardComponent;
  let mockUserService : UserService;
  beforeEach(()=>{
    dashboard =  new DashboardComponent(mockUserService);
  })
  it('should called without error', () => {
    let result = dashboard.onSubmitDelete();
    expect(result).toBe("No Input");
  });
  it('should called without error', () => {
    let result = dashboard.onSubmitUpdate();
    expect(result).toBe("No Input");
  });
  it('should called without error', () => {
    let result = dashboard.reset();
    expect(result).toBe("reset input");
  });
});
