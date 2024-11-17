import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {
  // Programming Languages
  languages: string[] = ['Python', 'Java', 'JavaScript', 'C++', 'C#', 'Go', 'Ruby', 'PHP'];
  selectedLanguage: string = 'JavaScript';

  // Code Input
  code: string = '';

  // Output
  output: string = 'Your output will appear here.';

  // Simulate Run Code
  runCode() {
    // Simulate output generation (This should ideally call a backend API)
    if (this.code.trim() === '') {
      this.output = 'Please write some code to execute.';
    } else {
      this.output = `Executing your code in ${this.selectedLanguage}...\n\nOutput: Hello, World!`;
    }
  }
}
