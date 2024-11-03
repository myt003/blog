import { Component,Input } from '@angular/core';
import { AddArticleComponent } from "../add-article/add-article.component";
import { article } from "../model/article";
import { FindArticleComponent } from "../find-article/find-article.component";
@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AddArticleComponent, FindArticleComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
   Articles=[new article(1,"economie.png","Economie","29/02/2020","L'économie, ou science économique, provenant du grec ancien οἰκονομία / oikonomía, contraction de οἶκος / oikos (« maison ») et de νόμος / nomós (« loi »), ce qui signifie « administration d'un foyer », est une discipline des sciences sociales qui étudie l'économie en tant qu'activité humaine, qui consiste en la production, la distribution, l'échange et la consommation de biens et de services.",0),
    new article(2,"aero.jpg","Aerospace","29/05/2023","Aerospace is a term used to collectively refer to the atmosphere and outer space. Aerospace activity is very diverse, with a multitude of commercial, industrial, and military applications. Aerospace engineering consists of aeronautics and astronautics. Aerospace organizations research, design, manufacture, operate, maintain, and repair both aircraft and spacecraft.",0)];
    action="";
    @Input() id=0;
    changeAction(action:string){
      this.action=action;
      if(action==="find"){
        this.action="delete";
      }
    }
     plus(index:number){
        this.Articles[index-1].score++;
        console.log("i="+(index-1));
        console.log("score article : "+this.Articles[index-1].score);
        this.sortArticles();
    }
    minus(index:number){
      if (this.Articles[index-1].score>0) {
        this.Articles[index-1].score--;
        this.sortArticles()
      }
      
      console.log("i="+(index-1));
      console.log("score article : "+this.Articles[index-1].score);
  }
  addArticle(Article :  article){
    this.Articles=[...this.Articles,Article];
    this.changeAction("");

  }
   filteredArticles= [new article(0,"","","","",0)];
  searching(ch:string,acces:string){
    this.action=acces;
     this.filteredArticles=this.Articles.filter(search=>search.title==ch)
    
    };
    sortArticles(){
      this.Articles.sort((a,b)=>a.score-b.score)
    }
  }
