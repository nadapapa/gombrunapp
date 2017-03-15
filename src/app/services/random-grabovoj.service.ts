import { GrabovojModel } from '../models/grabovoj.model';
import { StorageInterface } from '../interfaces/storage.interface';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';

@Injectable()
export class RandomGrabovojService {
    private data;
    private keys: Array<string>;

    public getRandomGrabovojInterval(storage: StorageInterface, interval: number) {
        return storage.getAll()
            .map((data) => {
                this.data = data.json();
                this.keys = Object.keys(this.data);
            })
            .flatMap((res) => {
                return Observable
                    .interval(interval)
                    .map((x) => {return this.getGrabovojFromData()})
                    .share()
                    .startWith(this.getGrabovojFromData());
            }
        );
    }

    private getGrabovojFromData() : GrabovojModel {
        let number = this.getRandomNumberFromData();
        let text = this.data[number];
        let model: GrabovojModel = {
            number: number,
            text: text
        };

        return model;
    }

    private getRandomNumberFromData() {
        return this.keys[this.keys.length * Math.random() << 0];
    }
}
