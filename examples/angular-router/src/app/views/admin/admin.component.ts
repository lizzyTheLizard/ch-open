import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async makeRequest(){
    this.http.get('http://localhost:8090/greeting').subscribe(
      (data: any) => console.log(data),
      (err: any) => console.error(err)
    );
  }
}
