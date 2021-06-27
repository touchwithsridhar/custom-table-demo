import { Component, OnInit, Input,Output,EventEmitter,} from '@angular/core';
import { users } from '../model/users';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.less']
})
export class ShowDataComponent implements OnInit {
  @Input() selectedSharedObj;
  @Input() selectedSharedIndex = -1;
  @Output() myOutput:EventEmitter<any>= new EventEmitter(); 
  outputSharedObj = {};
  constructor() { }

  ngOnInit(): void {
  }
  getData(){
    this.outputSharedObj = this.selectedSharedObj;
    this.myOutput.emit(this.outputSharedObj); 
  }
}
