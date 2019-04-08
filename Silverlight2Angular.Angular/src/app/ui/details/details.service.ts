import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DetailsService {

  constructor(private httpClient: HttpClient) { }

  public getPage(id: number) {
    return this.httpClient.get(environment.baseUrl + '/getpage/' + id);
  }

  public getData(id: number) {
    return this.httpClient.get(environment.baseUrl + '/getdata/' + id);
  }

  public save(entity) {
    return this.httpClient.post(environment.baseUrl + '/save', entity);
  }

}
