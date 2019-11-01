/* import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "./../material.module";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { CommentDialogComponent } from "./comment-dialog.component";
import { UserService } from "../services/user.service";
import { ArticleMockService } from "../mock/article.mock.service";
import { UserMockService } from "../mock/user.mock.service";
import { Article } from "../models/Article";
import { Router } from "@angular/router";
import { CommentService } from "../services/comment.service";
import { ArticleService } from "../services/article.service";
import { FormsModule } from "@angular/forms";
import { CommentMockService } from "../mock/comment.mock.service";
import { MatDialogModule, MatDialog } from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Component, NgModule } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
//import { DeprecatedFormsModule } from "@angular/common";

describe("CommentDialogComponent", () => {
  let component: CommentDialogComponent;
  let fixture: ComponentFixture<CommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentDialogComponent],
      imports: [
        MaterialModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: UserService, useClass: UserMockService },
        { provide: ArticleService, useClass: ArticleMockService },
        { provide: CommentService, useClass: CommentMockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDialogComponent);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
*/