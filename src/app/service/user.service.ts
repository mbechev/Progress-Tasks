import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private httpClient: HttpClient) {

    }
    getUsersData(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
}
