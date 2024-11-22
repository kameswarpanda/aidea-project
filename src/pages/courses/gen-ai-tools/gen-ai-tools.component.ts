import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gen-ai-tools',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gen-ai-tools.component.html',
  styleUrls: ['./gen-ai-tools.component.css']
})
export class GenAiToolsComponent {
  // Define tools with categories
  tools = {
    "Fun & Entertainment Tools": [
      {
        name: 'MidJourney',
        link: 'https://www.midjourney.com/',
        image: 'images/midjourney.png',
        description: 'Create stunning visuals with AI on MidJourney.',
      },
      {
        name: 'Plot Generator',
        link: 'https://www.plot-generator.org.uk/',
        image: 'images/plot-generator.png',
        description: 'Generate unique stories and plots for fun.',
      },
      {
        name: 'Habitica',
        link: 'https://habitica.com/',
        image: 'images/habitica.png',
        description: 'Gamify your life and habits with Habitica.',
      },
      {
        name: 'Freepik AI Image Generator',
        link: 'https://www.freepik.com/ai/image-generator',
        image: 'images/freepik.png',
        description: 'Generate unique and high-quality AI images for your creative projects.',
      },
      
    ],
    
    "Study & Day-to-Day Tools": [
      {
        name: 'Quizlet Flashcards',
        link: 'https://quizlet.com/12266018/artificial-intelligence-flash-cards/',
        image: 'images/quizlet.png',
        description: 'Learn with AI-powered flashcards on Quizlet.',
      },
      {
        name: 'Scholarcy',
        link: 'https://www.scholarcy.com/',
        image: 'images/scholarcy.png',
        description: 'Summarize and extract knowledge with Scholarcy.',
      },
      {
        name: 'Photomath',
        link: 'https://photomath.com/en',
        image: 'images/photomath.png',
        description: 'Solve math problems instantly with Photomath.',
      },
      {
        name: 'Roadmap.sh',
        link: 'https://roadmap.sh/ai/augmented-reality-virtual-reality-and-extended-reality-ar-vr-xr',
        image: 'images/roadmap.png',
        description: 'Explore comprehensive guides and roadmaps for AI, AR, VR, and XR.',
      },      
    ],

    "Productivity & Freelancing Tools": [
      {
        name: 'Taskade',
        link: 'https://www.taskade.com/',
        image: 'images/taskade.png',
        description: 'Organize tasks and boost productivity with Taskade.',
      },
      {
        name: 'Canva',
        link: 'https://www.canva.com/',
        image: 'images/canva.png',
        description: 'Design stunning visuals with ease using Canva\'s AI-powered design tools.',
      },
      {
        name: 'Gamma AI - Presentations',
        link: 'https://gamma.app/create',
        image: 'images/gamma.png',
        description: 'Create impactful presentations quickly with AI-powered design and content generation.',
      },
      {
        name: 'ChatGPT',
        link: 'https://chatgpt.com/',
        image: 'images/chatgpt.png',
        description: 'Interact with advanced AI to generate text, ideas, and answers in real-time.',
      },
      
    ],
  };
}
