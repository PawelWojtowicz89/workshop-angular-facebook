import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ,],
  exports: [
    PostListComponent,
    PostItemComponent
  ]
})
export class SharedPostsModule { }
