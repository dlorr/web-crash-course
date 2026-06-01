import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-header',
  imports: [Button, Tasks],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly title = 'Angular Crash Course';

  toggleAddTask() {
    alert('Toggle Add Task');
  }
}
