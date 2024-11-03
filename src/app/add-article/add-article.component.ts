import { Component, Output,EventEmitter, Input } from '@angular/core';
import { article } from "../model/article";

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  @Input() id=0;
  @Output()  ArticleCreated= new EventEmitter<article>()  
  addArticle(desc:string, title:string, photo:string,date:string){
    const newArticle=new article(this.id+1,photo,title,date,desc,0);
    this.ArticleCreated.emit(newArticle);

    console.log(newArticle);
  }
}
