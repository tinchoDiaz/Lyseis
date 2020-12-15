import { Component, OnInit } from '@angular/core';
import { EnviarmailService } from '../../services/enviarmail.service';
import { HttpClient } from '@angular/common/http';
import { DatosMail } from '../../model/mail';
import { HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  myForm: FormGroup;
  art= new DatosMail("","","");

  show: boolean = false;
  submitted = false;

  constructor(
                private enviarmailservice : EnviarmailService,
                private fb: FormBuilder
            ) {

              this.myForm = this.fb.group({
                name: ['', [Validators.required,Validators.minLength(5)]],
                email: ['', [Validators.required,Validators.minLength(5)]],
                message: ['', [Validators.required,Validators.minLength(5)]],
              });
            }

      get f() { return this.myForm.controls; }

      onsubmit() {

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.submitted = true;

      if (this.myForm.invalid) {
        return;
      }
      else
      {

        this.enviarmailservice.enviarmail(this.art)
        .subscribe(
          (data:any)=>{
            this.show=true;

            this.art.name="";
            this.art.email="";
            this.art.message="";
          })
      }
    }

    ngOnInit() {
    }

}
