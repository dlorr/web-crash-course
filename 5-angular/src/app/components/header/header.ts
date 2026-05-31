import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly title = 'Angular Crash Course';

  toggleAddTask() {
    alert('Toggle Add Task');
  }
}
