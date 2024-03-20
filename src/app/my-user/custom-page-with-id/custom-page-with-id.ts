import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'custom-page-with-id.html',
 
})
export class MyCustomPageWithId implements OnInit{
  id:any;
  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id')
  }
}
