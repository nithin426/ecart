import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public rootUrl: string = environment.rootUrl;

  constructor(private http: HttpClient) {

  }
  getProducts() {
    return this.http.get(this.rootUrl + "/catlog/products");
  }
}
