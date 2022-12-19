import { MessagesService } from './messages.service';
import { Hero } from 'src/app/types/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.#heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url).pipe(
      map((heroes) => heroes[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
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

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.#heroesUrl}/?name=${term}`).pipe(
      tap((heroArr) =>
        heroArr.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes, []'))
    );
  }
}
