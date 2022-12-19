import { MessagesService } from './messages.service';
import { HEROES } from 'src/app/mocks/mock-heroes';
import { Hero } from 'src/app/types/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  #heroesUrl = 'api/heroes';
  #httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messagesService: MessagesService,
    private storageService: LocalStorageService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    this.messagesService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private myTap<T>(message: string) {
    return tap((_: T) => this.log(message));
  }

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.#heroesUrl)
      .pipe(
        this.myTap('fetched heroes'),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.#heroesUrl}/${id}`;
    return this.http
      .get<Hero>(url)
      .pipe(
        this.myTap(`fetched hero id=${id}`),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.#heroesUrl, hero, this.#httpOptions)
      .pipe(
        this.myTap(`updated hero id=${hero.id}`),
        catchError(this.handleError<Hero>(`updateHero id=${hero.id}`))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.#heroesUrl, hero, this.#httpOptions)
      .pipe(
        this.myTap(`added hero`),
        catchError(this.handleError<Hero>(`addHero`))
      );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.#heroesUrl}/${hero.id}`;
    return this.http
      .delete<Hero>(url, this.#httpOptions)
      .pipe(
        this.myTap(`deleted hero id=${hero.id}`),
        catchError(this.handleError<Hero>(`deleteHero id=${hero.id}`))
      );
  }
}
