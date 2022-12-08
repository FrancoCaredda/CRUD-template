import { Component, OnInit } from '@angular/core';
import { TemporaryDataModel } from 'src/app/core/model/temporaryDataModel';
import { DataService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {
  public data: Array<TemporaryDataModel> = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.data = this.service.getData();  
  }
}
