import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../servicios/token.service';
import { inject } from '@angular/core';

export const usuarioInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  
  const isApiUrl = req.url.includes("api/auth");
  const urlListas = req.url.includes("api/publico");
  
  if (!tokenService.isLogged() || isApiUrl || urlListas) {
    return next(req);
  }
  const token = tokenService.getToken();
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(authReq);
};
