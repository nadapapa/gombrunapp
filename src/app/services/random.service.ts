import { GrabovojModel } from '../models/grabovoj.model';

export class RandomService {
    constructor(private items : Array<GrabovojModel>) {}

    public getRandomGrabovoj() {
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
}