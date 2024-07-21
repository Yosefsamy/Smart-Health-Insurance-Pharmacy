import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  baseUrl: string = 'https://vn3rcgzz-3000.uks1.devtunnels.ms/api/';

  constructor(private _httpClient: HttpClient) {}

  MyPrescription(): Observable<any> {
    return this._httpClient.get(this.baseUrl + 'prescription/my-prescription', {
      headers: {
        Authorization: `${localStorage.getItem('patientToken')}`,
      },
    });
  }

  GetQRCode(): Observable<any> {
    return this._httpClient.get(this.baseUrl + 'qrCode', {
      headers: {
        Authorization: `${localStorage.getItem('patientToken')}`,
      },
    });
  }

  GetMyProfile() : Observable<any> {
    return this._httpClient.get(this.baseUrl + 'user/Get-MyProfile', {
      headers: {
        Authorization: `${localStorage.getItem('patientToken')}`,
      },
    });
  }

}
