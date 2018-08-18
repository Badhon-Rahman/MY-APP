import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {

  title: string = "Form Creator";
  closeResult: string;
  simpleDrop: any;
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content,{ size:'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'ESC the Form Creator.';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'clicked back of form Creator.';
    } else {
      return  `with: ${reason}`;
    }
  }

  transferData1: Object= {id:1, msg:'button'};
  transferData2: Object = {id:2, msg:'textEditor'};
  transferData3: Object = {id:3, msg:'checkBox'};
  transferData4: Object= {id:4, msg:'select'};
  transferData5: Object= {id:5, msg:'text2'};
  transferData6: Object= {id:6, msg:'radio'};
  transferData7: Object= {id:7, msg:'fileInput'};
  transferData8: Object= {id:8, msg:'dateOfBirth'};
  transferData9: Object= {id:9, msg:'textArea'};
  receivedData: Array<any> = [];
  goalText:string = '';
  goals =[];

  transferDataSuccess($event: any) {
      this.receivedData.push($event);
      this.goalText=$event.dragData.msg;
      this.goals.push(this.goalText);
      this.goalText=''; 
  }
 
  ngOnInit() {}

}
