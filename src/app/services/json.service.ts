import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '../interfaces/storage.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService implements Storage {

    private url : string = '/assets/texts.json';

    constructor(private http: Http) {}

    public getData() {
        return this.getLocalJson();
    }

    private getLocalJson() {
        return this.http.get(this.url)
                .map((res:Response) => res.json());
    }
}