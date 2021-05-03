import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Questions } from '../questions';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened=true;
  sections:any;
  section;parameter;level;question;
 // p:Questions[] =[];
  p: Questions | undefined;
  constructor(private questionsService: QuestionsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sections = this.questionsService.getQuestionare()["sections"];    
    
  this.route.paramMap.subscribe(
      params => {
        //console.log(params);
        this.section= params.get('currentSection');
        this.parameter=params.get('currentParameter');
        this.level=params.get('currentLevel');
        this.question=params.get('currentQuestion');
       // console.log(this.section,this.parameter,this.level,this.question);
      }
    );
    this.getProduct(this.section);
   // this.getQuestions(); 
  }

  getProduct(section:string){
    this.questionsService.getProduct(section).subscribe(
      data=>{
        console.log(data[0].section);
          this.p =data[1].section;
          console.log(this.p);
      }
      );
   
  }



  // getQuestions(){
  //    this.questionsService.getQuestionares()
  //   .pipe(
  //     map((s:any[])=>s
  //       .find(
  //         q =>{ 
  //            console.log(q,"qq");
  //             //console.log(q.sections.section===this.section);
    
  //         }
  //         )
  //     )
  //   )
  // }
  
}


