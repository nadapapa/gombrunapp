import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StorageInterface } from '../interfaces/storage.interface';
import { Observable } from "rxjs";

@Injectable()
export class FileStorageService implements StorageInterface {
    private url: string;

    constructor(private http: Http) {}

    public getAll() {
        return this.getLocalJson(this.url);
    }

    public setUrl(url: string) {
        this.url = url;
    }

    public get(key: string) {}

    public set(key: string, value: any) {}

    private getLocalJson(path: string) : Observable<any> {
        return this.http.get(path);
    }
}