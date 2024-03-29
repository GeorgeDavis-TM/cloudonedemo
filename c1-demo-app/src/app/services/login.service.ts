import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClientModule
  ) { }

  public postLogin(): boolean {
    this.http.post()
    return true;
  }
}
