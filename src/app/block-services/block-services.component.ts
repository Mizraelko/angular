import { Component, OnInit } from '@angular/core';
import {AppServices} from "./services/app-services.service";

@Component({
  selector: 'app-block-services',
  templateUrl: './block-services.component.html',
  styleUrls: ['./block-services.component.scss']
})
export class BlockServicesComponent implements OnInit {
  constructor(public services: AppServices) { }

  ngOnInit(): void {
  }

}
