import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HomeComponent } from './home.component';
import { AlbumsService, PhotosService, MyLoaderService, ApiService } from '../core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { OrderService } from '../shared/services/order.service';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HomeComponent],
            providers: [
                AlbumsService,
                ApiService,
                HttpClient,
                HttpHandler,
                PhotosService,
                OrderService,
                MyLoaderService,
            ],
        })
            .compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => { fixture.destroy(); });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('testing sorting', () => {
        expect(component.home.sortOrder).toBe('asc');
    });

    it('testing album title', () => {
        const title = fixture.nativeElement;
        expect(title.querySelector('.main-heading').textContent).toContain('My Albums');
    });

    it('testing user id', () => {
        expect(component.home.userId).toBe(2);
    });

});