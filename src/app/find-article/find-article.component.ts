import { Component,Input } from '@angular/core';
import { article } from '../model/article';
@Component({
  selector: 'app-find-article',
  standalone: true,
  imports: [],
  templateUrl: './find-article.component.html',
  styleUrl: './find-article.component.css'
})
export class FindArticleComponent {
  
  @Input() ArticlesF:any

  }
