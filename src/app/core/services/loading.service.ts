import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MyLoaderService {
    
    public isLoading = new BehaviorSubject<boolean>(false);

    constructor() {}
}