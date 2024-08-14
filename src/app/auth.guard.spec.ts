import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, Router]
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation when logged in', () => {
    spyOn(guard['authService'], 'isLoggedIn').and.returnValue(true);

    const canActivate = guard.canActivate();
    expect(canActivate).toEqual(true);
  });

  it('should redirect to login page when not logged in', () => {
    spyOn(guard['authService'], 'isLoggedIn').and.returnValue(false);
    spyOn(router, 'navigate');

    const canActivate = guard.canActivate();
    expect(canActivate).toEqual(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
