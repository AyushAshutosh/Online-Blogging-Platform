import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http!: HttpClient;

  constructor(private injector: Injector) { 
    setTimeout(() => {
      this.http = this.injector.get(HttpClient);
   });
  }

  createNewPost(data:any): Observable<any>{
    return this.http.post(BASIC_URL + `api/posts`, data);
  }

  getAllPosts(): Observable<any>{
    return this.http.get(BASIC_URL + `api/posts`);
  }

}
