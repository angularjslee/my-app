import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LoggingService } from '../logging.service';
//OnInit
//revoke this component, it will auto run OnInit component.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {
// 学习指令之前的例子
////    2. prepare the data
//  homeTitle = "HomeTitle";
//
//  myString = "I like pizza";
//
//  person = {
//      name: "Henry",
//      color: "yellow"
//  }
////  为父模块传递给子模块用
//  @Input() woman;
//
//
////  为子模块传递给父模块用
//  @Output() onYell = new EventEmitter;
//
//  clickMe(value){
//      alert(value);
//  }
//
//  clickYou(){
//      alert("I like you");
//  }
//
////  当点击子模块的按钮 <button (click) = "fireYellEvent()">Hit me</button>
////    触发父模块的 onYell 事件
//  fireYellEvent(){
//      this.onYell.emit();
//  }



    // 学习指令之后的例子

  constructor(private logger : LoggingService) {

  }

  logIt(){
      this.logger.log();
  }

  ngOnInit(): void {
  }

}
