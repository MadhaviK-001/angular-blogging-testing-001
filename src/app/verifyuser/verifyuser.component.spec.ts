import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerifyuserService } from "../services/verifyuser.service";
import { VerifyuserComponent } from './verifyuser.component';
import { VerifyUserMockService } from '../mock/verify-user-mock.service';

describe('ContactComponent', () => {
    let comp: VerifyuserComponent;
    let fixture: ComponentFixture<VerifyuserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                VerifyuserComponent
            ],
            providers: [
                { provide: VerifyuserService, useClass: VerifyUserMockService }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(VerifyuserComponent);
            comp = fixture.componentInstance; // UserComponent test instance
        });
    }));

    it(`should have one user`, async(() => {
      console.log(comp);
        expect(comp.users.length).toEqual(1);
    }));

    it(`html should render one user`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('user1');
    }));
});
