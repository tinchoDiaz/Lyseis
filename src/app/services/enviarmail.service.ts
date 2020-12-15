import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosMail } from '../model/mail';
import { HttpHeaders } from '@angular/common/http';
/*
import { environment } from '../../environments/environment';
*/

import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class EnviarmailService {

  url= environment.baseUrl;

  constructor(private http: HttpClient
             ) { }

  enviarmail(articulo: DatosMail
              ) {
/*
    window.alert("URL=" + this.url + "/enviarMail.php");
    window.alert("name=" + articulo.name);
    window.alert("email=" + articulo.email);
    window.alert("message=" + articulo.message);
*/
    return this.http.post(`${this.url}/enviarMail.php`,  articulo);
  }
}
