import { Component, Input, OnInit,  Inject, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import paginate from 'jw-paginate';

import { QuestionsService } from "../questions.service";
import { CookieService } from 'ngx-cookie';
import { Questions } from '../questions';


@Component({
  selector: 'app-question-homepage',
  templateUrl: './question-homepage.component.html',
  styleUrls: ['./question-homepage.component.css']
})
export class QuestionHomepageComponent implements OnInit {

  totalLength:any;
  totalLeng:any;
  page:number=1;
  para:number=1;
  questionObject:any;
  levelObject:any;
  paraObject:any;
  responseObject:any;
  que:any[];

  errorMessage:string='';

  newAns : any;
  newAns1= [] ;
  questionare:any[];
  questionares:any;
  sections:any;
  TestEnvsection:any;
  TestAutosection:any;
  questArray:[];
  level1questions = []; 
  parameter1= [];
  question1=[];
  
  parameter:any;
  level:any;
  questions:any;
  response:any;


  // new:{ sections:{section:string;
  //      parameters:{parameter:string;
  //      level:{ questionLevel:number;
  //      questions:{ questionNo:number;
  //           questionDescription:string;
  //           response:{option:string;points:number}[],}[],}[],}[],}[],
  //          }[]= New;

  

  currentSection=0;
  currentParameter=0;
  currentLevel=0;
  currentQuestion =0;
  currentNew=0;

  
  //conv: {section:string,parameter:string,questionLevel:string,questionNo:string,questionDescription,response:{option:string,points:number}[],}[]= Conv;
  currentConv :any;
   

  
  
  
  current=0;
  answerSelected = false;
  totalPoints :number;
  btnDisabled = true;
  fileHide =true;
  commentHide = true;
  options:string;
  point:number;
  
  secObj:any;
  paraObj:any;
  levObj:any;
  queObj:any;
  


 

  constructor(private router: Router, private route: ActivatedRoute, private questionsService: QuestionsService, private cookieService:CookieService) { }

  

  ngOnInit(): void {

   //  console.log(this.questionsService.getQuestionare()["sections"],"from the questionsService")
   //this.questionare = this.questionsService.getQuestionare()["sections"];
   
   this.route.paramMap.subscribe(
    params => {
      //console.log(params);
      const section= params.get('currentSection');
      const parameter=params.get('currentParameter');
      const level=params.get('currentLevel');
      const question=params.get('currentQuestion');
     // console.log(section,parameter,level,question);
    }
  );

   this.questionsService.getQuestionares().subscribe({
     next: questionaires =>{ 
       this.questionare = questionaires['sections'];
       this.getParams();
      },
     error: err => this.errorMessage = err
   });

   


   
     

    // this.sections = this.new["sections"];
       // console.log(this.sections)
 // this.TestEnvsection = this.new["sections"][0];
  //this.TestAutosection = this.new["sections"][1];
  //console.log(this.TestEnvsection);
      
  // console.log(this.TestEnvsection.parameters,"sdsa");

// First section starts here
  // this.TestEnvsection.parameters.forEach(sectionlevel => {
  //   sectionlevel.level.forEach(parameterlevel => {
  //     parameterlevel.questions.forEach(questionsl1 => {
  //       console.log(questionsl1,"questions");

  //       this.level1questions.push(questionsl1)
  //     });
  //   });
  // });


    // this.TestEnvsection.parameters.forEach(parameterlevel => {
    //   this.parameter1.push(parameterlevel)
    //  // console.log(parameterlevel,"paralevel");
    //   parameterlevel.level.forEach(questionlevel => {
    //     this.question1.push(questionlevel)
    //    // console.log(questionlevel,"questionlevel");
    //     questionlevel.questions.forEach(questionsl1 => {
    //     //  console.log(questionsl1,"questions");
  
    //       this.level1questions.push(questionsl1)
    //     });
    //  });
    // });



 // console.log(this.level1questions,"test");


  // active = this.TestEnvsection

  // if(localvariable){
  //     Active = this.TestEnvsection
  // }

  // Second section starts here
  // this.TestAutosection.parameters.forEach(sectionlevel => {
  //   console.log(sectionlevel,"section level")
  //   sectionlevel.level.forEach(parameterlevel => {
  //     console.log(parameterlevel,"parameter");
  //     parameterlevel.questions.forEach(questions => {
  //       console.log(questions,"questions");
  //     });
  //   });
  // });





    //  this.parameter=this.section.parameters;
    //  console.log(this.parameter, "ppppppp");
     
    //  this.level = this.parameter;
    //  this.level.forEach(element => {
    //    console.log(element,'level');
    //  });

    //  console.log(this.level, "lllll");

     
      

    //  this.questions = this.level[0].questions;
    // this.level.forEach(element => {
      // this.questArray = element.questionLevel;
      // this.questArray.push(element.questions)
      // console.log(element.questions[0],"elements")
      
    // });
    //  console.log(this.questArray, "qqqqq")

    //  this.response = this.questions[0].response;
    //  console.log(this.response, "rrrr");


  //   this.questionare = this.sections.map((sec)=>{
  //    // console.log(sec,"section")
  //     this.paraObject = sec.parameters.map((para)=>{
  //      // console.log(para, "parameter")
  //       this.levelObject = para.level.map((lev)=>{
  //       //  console.log(lev, "level")
  //         this.questionObject = lev.questions.map((que)=>{
  //        //   console.log(que, "question")
  //           this.responseObject = que.response.map((res)=>{
  //          //   console.log(res, "response")      
  //               return {option:res.option, points:res.points};     
  //           });
  //           // que.option = this.responseObject;
  //           return {questionNo: que.questionNo,questionDescription:que.questionDescription};
  //         });
  //        // lev.questionNo = this.questionObject;
  //        // console.log(this.questionObject,"qo")
          
  //         return lev;
  //       });
  //      // para.questionLevel = this.levelObject;
        
  //       return para;
  //       //return this.parameter.find((para, index) => {return index === para});
  //   });
  // //  sec.parameter = this.paraObject;
  
  //   return sec;    
    
  // });
  





  }

  


getParams(){
  if(this.questionare){
  this.secObj = this.questionare[this.currentSection].section;
  this.paraObj = this.questionare[this.currentSection].parameters[this.currentParameter].parameter;
  this.levObj = this.questionare[this.currentSection].parameters[this.currentParameter].level[this.currentLevel].questionLevel;
  this.queObj = this.questionare[this.currentSection].parameters[this.currentParameter].level[this.currentLevel].questions[this.currentQuestion].questionNo;
  // console.log('section:', this.secObj)
  // console.log('para:', this.paraObj)
  // console.log('level:', this.levObj)
  // console.log('question', this.queObj)
  this.router.navigate(['/questions','section',this.secObj,'parameter',this.paraObj,'level',this.levObj,'question',this.queObj])
  // this.router.navigate(['/questions',{ section:this.secObj, parameter:this.paraObj, level:this.levObj, question:this.queObj}])
  } 
}
  

  onClick(option:string,points:number){
    this.btnDisabled = false;
    this.fileHide = false;
    this.commentHide= false;
    this.options=option;
    this.point=points;
    
  }



  nextClick(questionareObj:any, option:string,points:number,currentSection:number,currentQuestion:number,currentParameter:number,currentLevel:number){
  setTimeout(() => {
    if(option=="yes"){
       console.log(this.currentQuestion, "qq");
       console.log(this.currentLevel, "l");
      this.totalPoints = points;
      console.log("first if")
        if( currentSection==0){
             if(currentParameter==0){
                if(currentLevel==0){ 
                  this.currentParameter++;
                }else if(currentLevel >= 1 && currentLevel <= 3){
                    if(1===1){
                      console.log('full object',questionareObj,"Curent level",currentLevel);
                    }
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentLevel++;
                      this.currentQuestion = 0;
                      console.log("cl");
                    }
                    // console.log("current level", currentLevel)
                }else if(currentLevel == 4){
                    this.currentParameter++;
                    this.currentLevel=0;
                    this.currentQuestion=0;
                    console.log("pppp")
                }
             }
             else if(currentParameter==1){
                if(currentLevel < 2){ 
                   this.currentSection++;
                   this.currentParameter=0;
                   this.currentLevel=0;
                }else if(currentLevel >= 2 && currentLevel <= 3){
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentLevel++;
                      this.currentQuestion = 0;
                      console.log("cl");
                    }
                }else if(currentLevel == 4){
                  this.currentSection++;
                  this.currentParameter=0;
                  this.currentLevel=0;
                }

             }
          
        }else if(currentSection==1){
            if(currentParameter==0){
                if(currentLevel <= 3){
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentLevel++;
                      this.currentQuestion = 0;
                      console.log("cl");
                    }
                }else if(currentLevel == 4){
                    if(questionareObj.length > 1 && currentQuestion < questionareObj.length-1  ){
                      this.currentQuestion++;
                      console.log(this.currentQuestion, "cq");
                    } else{
                      this.currentParameter++;
                      this.currentQuestion = 0;
                      console.log("cl");
                      this.router.navigate(['thankyou']);
                    }
                }
            }
        }
    }else if(option=="no"){
      console.log(this.currentQuestion, "qq else");
      console.log(this.currentLevel, "l else");
      this.totalPoints= points;
      if( currentSection==0){
          if(currentParameter==0){
              if(currentLevel ==0 ){
                this.currentLevel++;
              }else if(currentLevel >= 1 && currentLevel<=4){
                this.currentParameter++;
                this.currentLevel=0;
                this.currentQuestion=0;
              }
                
          }else if(currentParameter==1){
              if(currentLevel < 2){
                this.currentLevel++;
              }else if(currentLevel >=2 && currentLevel <=4){
                this.currentSection++;
                this.currentParameter=0;
                this.currentLevel=0;
                this.currentQuestion=0;
              }
          }
     
      }else if(currentSection==1){
          if(currentParameter==0){
              if(currentLevel <=4 ){
                this.currentParameter++;
                this.router.navigate(['thankyou']);
              }
          }
      }
      
    }else{
      this.currentQuestion++;
      console.log("na")
    }
    this.getParams();
   // this.router.navigate(['/questions','section',this.currentSection,'parameter',this.currentParameter,'level',this.currentLevel,'question',this.currentQuestion]);
    this.answerSelected = false; 
    },1000);
    

    this.btnDisabled = true;
    this.fileHide = true;
    this.commentHide= true;

  }



  
 
  

//   uploadFile($event) {
//     console.log($event.target.files[0]); // outputs the first file
// }
 
//adding  files
@ViewChild('attachments') attachment: any;
fileList: File[] = [];
listOfFiles: any[] = [];

onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile.name)
  }

  this.attachment.nativeElement.value = '';
}
//removing files
removeSelectedFile(index) {
 // Delete the item from fileNames list
 this.listOfFiles.splice(index, 1);
 // delete file from FileList
 this.fileList.splice(index, 1);
}


 
 
  
 








}
