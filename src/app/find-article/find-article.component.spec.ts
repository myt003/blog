import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindArticleComponent } from './find-article.component';

describe('FindArticleComponent', () => {
  let component: FindArticleComponent;
  let fixture: ComponentFixture<FindArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
