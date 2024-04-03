import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { SpageService } from 'src/app/spage.service';

@Component({
  selector: 'app-dashbcomp',
  templateUrl: './dashbcomp.component.html',
  styleUrls: ['./dashbcomp.component.scss'],
})
export class DashbcompComponent  implements OnInit {

  constructor(private spage:SpageService) { }

  ngOnInit() {}

}
