 
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 
 @Injectable({
   providedIn: 'root'
 })
 export class PostService {
   private baseUrl = 'http://localhost:8080/api/posts';
 
   constructor(private http: HttpClient) { }
 
   getPostDetail(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
   }
 }
 