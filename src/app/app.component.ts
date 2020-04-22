import { Component, OnInit } from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public hash = new Map<string, number>();
  public keys;

  parseText(text: string) {
    this.hash.clear();
    const words = text.split(' ');
    words.forEach((w) => {
      let word = this.filter(w);
      if (word == '') {
        ;
      }
      else if(this.hash.has(word)) {
        let value = this.hash.get(word);
        this.hash.delete(word);
        this.hash.set(word, (++value));
      } else {
        this.hash.set(word, 1);
      }
    });
    this.keys = this.hash.keys();
  }

  public filter(input: string): string {
    return input.replace(/\W/g, '').toUpperCase();
  }
}
