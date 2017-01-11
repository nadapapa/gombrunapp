import { TestBed, async } from '@angular/core/testing';
import { MagicService } from './magic.service';

let win:any = window || {};

describe('MagicService', () => {

  beforeEach(() => {

  });

  it('should change the path to ios platform specific', () => {
    // mock a {N} env
    win.NSObject = {};
    win.NSString = "test";
    win.android = undefined;
    win.java = undefined;

    expect(MagicService.IS_NATIVESCRIPT()).toBe(true);
    expect(MagicService.IS_IOS()).toBe(true);
    expect(MagicService.IS_ANDROID()).toBe(false);
    expect(MagicService.TEMPLATE_URL('./components/test.component.html', true)).toBe('./components/test.component.ios.html');
    expect(MagicService.STYLE_URLS(['./components/test.component.css'], true)).toEqual(['./components/test.component.ios.css']);
  });

  it('should change the path to android platform specific', () => {
    // mock a {N} env
    win.android = {};
    win.java = {};
    win.NSObject = undefined;
    win.NSString = undefined;

    expect(MagicService.IS_NATIVESCRIPT()).toBe(true);
    expect(MagicService.IS_IOS()).toBe(false);
    expect(MagicService.IS_ANDROID()).toBe(true);
    expect(MagicService.TEMPLATE_URL('./components/test.component.html', true)).toBe('./components/test.component.android.html');
    expect(MagicService.STYLE_URLS(['./components/test.component.css'], true)).toEqual(['./components/test.component.android.css']);
  });

  it('should change the path to tns', () => {
    // mock a {N} env
    win.NSObject = {};
    win.NSString = "test";

    expect(MagicService.IS_NATIVESCRIPT()).toBe(true);
    expect(MagicService.TEMPLATE_URL('./components/test.component.html')).toBe('./components/test.component.tns.html');
    expect(MagicService.STYLE_URLS(['./components/test.component.css'])).toEqual(['./components/test.component.tns.css']);
  });

  it('should let the path untouched if the env is not {N}', function(){
    win.NSObject = undefined;
    win.NSString = undefined;
    win.android = undefined;
    win.java = undefined;

    expect(MagicService.IS_NATIVESCRIPT()).toBe(false);
    expect(MagicService.IS_IOS()).toBe(false);
    expect(MagicService.IS_ANDROID()).toBe(false);
    expect(MagicService.TEMPLATE_URL('./components/test.component.html')).toBe('./components/test.component.html');
    expect(MagicService.STYLE_URLS(['./components/test.component.css'])).toEqual(['./components/test.component.css']);
  });

});
