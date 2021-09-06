import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  backendRequest(){
    this.http.get('http://localhost:8090/greeting').subscribe(
      (data: any) => console.log(data),
      (err: any) => console.error(err)
    );
  }
}
