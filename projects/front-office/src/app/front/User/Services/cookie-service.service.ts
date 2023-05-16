import { Injectable } from '@angular/core';
import { CookieService as NgxCookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor(private ngxCookieService: NgxCookieService ) { }

  set(key: string, value: string, expireDate?: Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'Strict' | 'None'): void {
    this.ngxCookieService.set(key, value, expireDate, path, domain, secure, sameSite);
  }

  get(key: string): string {
    return this.ngxCookieService.get(key);
  }

  delete(key: string, path?: string, domain?: string): void{
     return this.ngxCookieService.delete(key, path, domain);
  }

  check(key: string): boolean {
    return this.ngxCookieService.check(key);
  }
}
