import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Lodging } from '../../data/lodging.model';
import { Review } from 'src/app/data/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  private readonly apiUrl$: Observable<string>;

  /**
   * Represents the _Review Service_ `constructor` method
   *
   * @param config ConfigService
   * @param http HttpClient
   */
  constructor(private readonly config: ConfigService, private readonly http: HttpClient) {
    this.apiUrl$ = config.get().pipe(map((cfg) => `${cfg.api.lodging}/Review`));
  }

  /**
   * Represents the _Review Service_ `delete` method
   *
   * @param id string
   */
  delete(id: string): Observable<boolean> {
    return this.apiUrl$.pipe(
      concatMap((url) => this.http.delete<boolean>(url, { params: { id } }))
    );
  }

  /**
   * Represents the _Review Service_ `get` method
   *
   * @param id string
   */
  get(id?: string): Observable<Review[]> {
    const options = id ? { params: new HttpParams().set('id', id) } : {};
    return this.apiUrl$.pipe(concatMap((url) => this.http.get<Review[]>(url, options)));
  }

  /**
   * Represents the _Review Service_ `post` method
   *
   * @param review Review
   */
  post(review: Review): Observable<boolean> {
    return this.apiUrl$.pipe(concatMap((url) => this.http.post<boolean>(url, review)));
  }

  /**
   * Represents the _Review Service_ `put` method
   *
   * @param review Review
   */
  put(review: Review): Observable<Lodging> {
    return this.apiUrl$.pipe(concatMap((url) => this.http.put<Lodging>(url, review)));
  }
}
