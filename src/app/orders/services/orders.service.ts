import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  //private collection
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
   }

   private refreshCollection() {
     this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
       this.collection$.next(data);
     });
   }

   public get collection(): BehaviorSubject<Order[]> {
     return this.collection$;
   }

   public set collection(col: BehaviorSubject<Order[]>) {
     this.collection$ = col;
   }

   // change state
   public changeItem(item: Order, state: StateOrder): Observable<Order> {
     //déstructuration de l'objet item
     const obj = { ...item };
     //modification du state avec nouveau state
     obj.state = state;
     //mise à jour dans l'API
     return this.update(obj);
   }

   // update item in collection
   public update(item: Order): Observable<Order> {
     return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item)
            .pipe(
              tap((res) => { this.refreshCollection() })
            );
   }

   //suppression d'un item dans la collection
   public deleteItem(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`)
           .pipe(
             tap((res) => {
               this.refreshCollection();
             })
           );
   }

   //ajout d'un item dans la collection
   public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap((res) => {
        this.refreshCollection();
      })
    );
   }

   //get item dans la collection par son ID
   public getItemById(id: number): Observable<Order> {
     return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
   }

}
