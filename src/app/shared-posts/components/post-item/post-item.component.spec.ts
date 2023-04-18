import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemComponent } from './post-item.component';
import { Post } from '../../../interfaces/post.interface';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;
  let $component: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post body', () => {
    component.post = {
      body: 'jakis tekst',
      author: {},
      images: [] as string[]
    } as Post;

    fixture.detectChanges();

    const text = $component.querySelector('.card-text')?.textContent?.trim();

    expect(text).toEqual('jakis tekst');
  })
});
