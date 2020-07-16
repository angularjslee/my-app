import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/aperator/map';

@Injectable({ 
  providedIn: 'root'
})
export class DataService {
//  请求本地的Json 数据
  constructor(private http: HttpClient) { }

  fetchData(){
//      this.http.get('../../public/people.json').subscribe(
      return this.http.get('../assets/people.json');
//          .map((res) => res.json())

//          .subscribe(
////          处理对应的数据
//          (data) => console.log(data)
//      )
  }
}
