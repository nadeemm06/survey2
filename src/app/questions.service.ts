import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from "rxjs/operators";

import { Questions } from "./questions";
import New from './question-homepage/new.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  //quest: Questions = new Questions();
  private questionareUrl = 'assets/data/new.json';

  constructor(private http: HttpClient) { }
  

  getQuestionares():Observable<Questions[]>{
    return this.http.get<Questions[]>(this.questionareUrl)
    // .pipe(
    //   tap(data => {
    //     console.log('All: ', JSON.stringify(data))
    //   })
    // );
  }

 getProduct(section:string): Observable<Questions | undefined>{
    return this.getQuestionares()
    .pipe(
      map((s:Questions[])=>s['sections']
      // .find(p=>{
      //   console.log(s);
      //   console.log(p);
      //   p.section===section;
      // })
      )
    );
  }



  newQuestionare:[] = New;
  getQuestionare(){
    return this.newQuestionare
  }






/*

 //----------------Properties------------------
  readonly rootUrl = 'http://localhost:8088';
  qns: any[];
  qnProgress: number;
  correctAnswerCount: number = 0;

  constructor(private http: HttpClient) { }

  //--------------Http Methods-----------------
  getQuestions(){
    return this.http.get(this.rootUrl + '/questions');
  }

  getAnswers(){
    var body = this.qns.map(x => x.QnID);
    return this.http.post(this.rootUrl + '/answers', body);
  }

  upload(formdata:FormData){
    let url = 'http://localhost:8585/pic-upload';
    return this.http.post(url, formdata);
  }

  */

 }


