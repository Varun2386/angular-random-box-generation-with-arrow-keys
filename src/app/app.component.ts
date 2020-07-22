import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  OnInit
} from "@angular/core";
import { ArrowDivDirective } from "./arrow-div.directive";
import { KeyBoardService } from "./keyboard.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isDelete: boolean = false;
  dataSource = [];
  columns: number = 4;
  @ViewChildren(ArrowDivDirective) inputs: QueryList<ArrowDivDirective>;

  constructor(private keyboardService: KeyBoardService) {}
  ngOnInit() {
    this.keyboardService.keyBoard.subscribe(res => {
      this.move(res);
    });
  }
  onAddData() {
    this.dataSource.push({
      value: this.dataSource.length,
      id: Math.floor(Math.random() * 100) + 1
    });
  }
  move(ele) {
    const inputToArray = this.inputs.toArray();
    let index = inputToArray.findIndex(x => x.element == ele.element);
    switch (ele.action) {
      case "UP":
        this.isDelete = false;
        index -= this.columns;
        break;
      case "DOWN":
        this.isDelete = false;
        index += this.columns;
        break;
      case "LEFT":
        this.isDelete = false;
        index--;
        break;
      case "RIGTH":
        this.isDelete = false;
        index++;
        break;
      case "DELETE":
        this.isDelete = true;
    }

    if (index >= 0 && index < this.inputs.length) {
      inputToArray[index].element.nativeElement.focus();
    }
    if (this.isDelete) {
      this.dataSource.splice(index, 1);
    }
  }
}
