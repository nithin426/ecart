import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: Array<any> = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getProductsTest();

  }
  getProductsTest() {
    this.userservice.getProducts().subscribe((res: any) => {
      console.log(res);
       this.data = res.data;
    }, err => {
      console.log(err);
    });
  }
}
