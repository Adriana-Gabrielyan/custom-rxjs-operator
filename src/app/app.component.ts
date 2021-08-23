import { Component, OnInit, Injectable } from '@angular/core';
import { getDataService } from './services/get-data.service';
import { orderByProperty } from './_helpers/orderBy.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'Custom rxJs Operator';
  data: any = [];
  constructor(private _http: getDataService) {}

  ngOnInit(): void {
    this._http.getAPIData().subscribe((data) => {
      this.data = data;
    });
  }
  sortBy(propertyName: string) {
    this._http
      .getAPIData()
      .pipe(orderByProperty(propertyName))
      .subscribe((data) => {
        this.data = data;
      });
  }
}
