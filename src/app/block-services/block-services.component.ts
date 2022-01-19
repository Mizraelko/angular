import { Component, OnInit } from '@angular/core';
import {AppServices} from "./services/app-services.service";
import {LocalServiceService} from "./services/local-service.service";

@Component({
  selector: 'app-block-services',
  templateUrl: './block-services.component.html',
  styleUrls: ['./block-services.component.scss'],
  //регистрация локального сервиса
  providers: [LocalServiceService]
})
export class BlockServicesComponent implements OnInit {
  constructor(public services: AppServices, public localService: LocalServiceService) { }

  ngOnInit(): void {
  }

}
