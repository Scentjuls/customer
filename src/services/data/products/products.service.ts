import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = environment.apiBaseURL;
  constructor(
    private http: HttpClient
  ) { }

    getProductDetailsHome(productId) {
      return this.http.get<any>(this.baseUrl + 'home/' + productId);
    }
}
