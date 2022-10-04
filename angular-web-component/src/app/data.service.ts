import { Injectable } from '@angular/core'; 
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient) { }  
 
  getHits(){
    return this.httpClient.get(`https://hn.algolia.com/api/v1/search_by_date`).pipe(map((data: any) => data.hits));
  }

}
