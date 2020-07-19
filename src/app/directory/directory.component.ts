import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';



@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
//    移动到app.module.js
//  providers:[LoggingService]
})
export class DirectoryComponent implements OnInit {
//路由参数
//  person: string;
//  constructor(private route: ActivatedRoute) {
//    this.person = route.snapshot.params['person'];
//  }
  classes = {'blue': false, 'red': true, 'underline': true};
  bool = false;
//    src/app/directory/directory.component.html:40:46 - error TS2339: Property 'term'
//    does not exist on type 'DirectoryComponent'.
//    to resolve the above the issue, add the variable
  term_test: String = "";

  people = [
//      数组方式取数据
      {name: "Henry", color: "blue", phone: "400-123", sex: "female"},
      //{name: "Bucky", color: "green", phone: "400-456"},
      {name: "Jacky", color: "yellow", phone: "400-789"}

//      http 请求 加 JSON 方式取数据

  ];
//  constructor(private logger: LoggingService) {
  constructor(private logger: LoggingService, private dataServer: DataService) {

  }

  logIt(){
      this.logger.log();
  }

  ngOnInit(): void {
//      this.dataServer.fetchData();
      this.dataServer.fetchData().subscribe(
          //(data) => this.people = data
      );
  }

}
