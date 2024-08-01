import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { NgIf , NgFor , NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,NgClass,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'first-project';

  constructor(){
  }
  point = 0;
  time = 10;
  word = " ";
  randomWord = '';
  input = '';

  buttons = [
    {
      top : ["q","w","e","r","t","y","u","i","o","p"],
    },
    {
      middle : ["a","s","d","f","g","h","j","k","l"],
    },
    {
      bottom : ["z","x","c","v","b","n","m"],
    }
  ]

  myWords = ["hello","world","tui","name"]
  changeWord() {
    let index = Math.floor(Math.random() * this.myWords.length);
    console.log(index);
    this.word = this.myWords[index];
    console.log(this.word);

  }

  @HostListener('document:keypress',['$event'])
  checkResult(event: KeyboardEvent) {
    if(event.key=="Enter") {
      if(this.input == this.randomWord) {
        alert("Skibidi dom dom yes yes")
        this.point++;
        this.input = ' ';
      }
      else {
        alert("Nhập lại đê tk dog")
        this.input = ' ';
      }
    }
  }

  startGame() {
    let timeInterval = setInterval(() => {
      this.time--;
      console.log(this.time);
      this.changeWord()
    if(this.time==0) {
      clearInterval(timeInterval)
      console.log(this.time);

      alert("Hết giờ rồi waste your ass up");
    }
    },3000);
  }
}
