import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';


export const ApplicationGuardGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(!authService.isLoggedIn){
    router.navigate(['/login']);
    return false;
  }
    
    return true;

}

// export class ApplicationGuardGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router){}

//   canActivate(){
//     console.log('le guard est present');
//     if(this.authService.isLoggedIn){
//       return true;
//     }
//       this.router.navigate(['/login']);
//       return false;
    
//   }
    
// };


