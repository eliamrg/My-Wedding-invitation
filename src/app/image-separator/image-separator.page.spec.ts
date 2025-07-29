import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageSeparatorPage } from './image-separator.page';

describe('ImageSeparatorPage', () => {
  let component: ImageSeparatorPage;
  let fixture: ComponentFixture<ImageSeparatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSeparatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
