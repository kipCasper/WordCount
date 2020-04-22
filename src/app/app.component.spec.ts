import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = new AppComponent();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  describe('parse', () => {
    it('should set hash to empty map if no input', () => {
      component.parseText('');
      const emptyMap = new Map<string, number>();
      expect (component.hash).toEqual(emptyMap);
    });

    it('should return a count of each key', () => {
      const myString = 'Foo Bar! Foo Foo Bar, and a one two three for good measure~';
      component.parseText(myString);
      expect(component.hash.get('FOO')).toBe(3);
      expect(component.hash.get('BAR')).toBe(2);
      expect(component.hash.get('A')).toBe(1);
    });
  });

  describe('filter', () => {
    it('should return empty string if empty', () => {
      const output = component.filter('');

      expect(output).toBe('');
    });

    // also tests uppercase functionality
    it('should parse out special characters', () => {
      const myString = 'd*a!v,i.d';
      expect(component.filter(myString)).toBe('DAVID');
    });
  });
});
