import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, from } from 'rxjs';
import { concatAll, map, filter, tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ApiListing {
  constructor(
    private _http: HTTP,
    private _httpClient: HttpClient,
    private _platform: Platform,
  ) {}

  getUsers(): Observable<any> {
    if (this._platform.is('mobileweb') || this._platform.is('desktop')) {
      return this._httpClient
        .get<Observable<any>>('https://jsonplaceholder.typicode.com/users')
        .pipe(
          map((data: any) => {
            return data.filter((user: any) => {
              user.name = 'desktop ' + user.name;
              return user;
            });
          }),
        );
    } else {
      return from(
        this._http.get('https://jsonplaceholder.typicode.com/users', {}, {}),
      ).pipe(
        tap(data => console.log(data.data, Array.isArray(data.data))),
        // map((data: any) => JSON.parse(data.data)),
        tap(data => console.log(data.data, Array.isArray(data.data))),
        map((data: any) => {
          const users = JSON.parse(data.data);
          return users.filter((user: any) => {
            user.name = 'Mobile ' + user.name;
            return user;
          });
        }),
      );
    }
  }
}
