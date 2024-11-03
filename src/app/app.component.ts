import { Component ,Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { AddArticleComponent } from './add-article/add-article.component';
import { FindArticleComponent } from './find-article/find-article.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArticlesListComponent,AddArticleComponent,FindArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
 
 
}
