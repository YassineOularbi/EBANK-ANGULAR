import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authReq :any;
  const token = localStorage.getItem('auth-token');
  if (token != null) {

    authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });

  }
  
  return next(authReq);
};
