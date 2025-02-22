import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cbse-ai-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cbse-ai-modules.component.html',
  styleUrl: './cbse-ai-modules.component.css'
})
export class CbseAiModulesComponent {
  aiModules = [
    {
      grade: 'Grade 8',
      title: 'AI Foundations',
      topics: [
        'Introduction to AI and its applications',
        'AI vs. Human Intelligence',
        'AI Ethics & Responsible AI',
        'Fun with AI – Hands-on activities using AI tools'
      ]
    },
    {
      grade: 'Grade 9',
      title: 'AI Basics & Applications',
      topics: [
        'Fundamentals of Machine Learning',
        'AI in daily life (Chatbots, Face Recognition, Virtual Assistants)',
        'Data Science Basics – Data Collection & Visualization',
        'Python for AI – Introduction to coding with AI'
      ]
    },
    {
      grade: 'Grade 10',
      title: 'AI Project-Based Learning',
      topics: [
        'Supervised & Unsupervised Learning Concepts',
        'AI for Problem-Solving – Real-life AI Applications',
        'Introduction to Deep Learning & Neural Networks',
        'AI Project Development – Building AI-based Mini Projects'
      ]
    },
    {
      grade: 'Grade 11',
      title: 'Advanced AI & ML',
      topics: [
        'AI & Data Science – Data Processing & Feature Engineering',
        'Model Training & Evaluation – Regression & Classification',
        'Advanced AI Applications (Self-Driving Cars, Healthcare AI, NLP)',
        'AI Ethics & Bias – Understanding the Impact of AI'
      ]
    },
    {
      grade: 'Grade 12',
      title: 'AI Specialization & Career Readiness',
      topics: [
        'Advanced Deep Learning & Neural Networks',
        'AI in Business & Industry – AI Startups & Innovations',
        'Capstone AI Project – End-to-End AI Model Development',
        'AI & Future Careers – Preparing for AI-based careers'
      ]
    }
  ];
}
