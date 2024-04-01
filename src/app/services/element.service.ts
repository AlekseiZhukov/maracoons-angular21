import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ElementService {
  // @ts-ignore
  private readonly element: BehaviorSubject<HTMLElement | null> = new BehaviorSubject<HTMLElement | null>(null)
  constructor() {
  }

  public setElement(element: HTMLElement):void {
    this.element.next(element)
  }

  public getElement(): Observable<HTMLElement | null> {
    return this.element.asObservable()
  }


}
