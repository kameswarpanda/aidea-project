import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-learnings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-learnings.component.html',
  styleUrl: './my-learnings.component.css'
})
export class MyLearningsComponent {
  enrolledCourses = [
    {
      courseName: 'AI Tools Mastery',
      courseDescription: 'Master the latest AI tools to supercharge productivity and innovation in various domains.',
      chapters: [
        {
          name: 'Introduction to AI Tools',
          progress: 85,
          description: 'Learn the basics of AI tools, their use cases, and how they revolutionize industries.',
        },
        {
          name: 'AI-Powered Content Creation',
          progress: 70,
          description: 'Explore tools like ChatGPT, Jasper, and Writesonic to create high-quality content efficiently.',
        },
        {
          name: 'Workflow Automation with AI',
          progress: 50,
          description: 'Automate repetitive tasks using AI tools like Zapier, Make, and AI-driven bots.',
        },
      ],
    },
    {
      courseName: 'Prompt Engineering Essentials',
      courseDescription: 'Learn the art of crafting effective prompts to get the best results from AI models.',
      chapters: [
        {
          name: 'Understanding AI Prompts',
          progress: 75,
          description: 'Discover the importance of well-structured prompts and their impact on AI outputs.',
        },
        {
          name: 'Advanced Prompt Techniques',
          progress: 60,
          description: 'Learn techniques like chaining, context setting, and iterative prompting.',
        },
        {
          name: 'Practical Applications of Prompts',
          progress: 40,
          description: 'Apply prompt engineering skills in content creation, data analysis, and coding tasks.',
        },
      ],
    },
    {
      courseName: 'Python for AI and Data Science',
      courseDescription: 'Learn Python programming tailored for AI, data analysis, and machine learning applications.',
      chapters: [
        {
          name: 'Python Basics',
          progress: 90,
          description: 'Master Python syntax, data types, and fundamental programming concepts.',
        },
        {
          name: 'Data Manipulation with Pandas',
          progress: 65,
          description: 'Learn how to clean and manipulate data using the Pandas library.',
        },
        {
          name: 'Data Visualization with Matplotlib',
          progress: 50,
          description: 'Create stunning data visualizations to uncover insights with Matplotlib and Seaborn.',
        },
      ],
    },
    {
      courseName: 'Machine Learning Fundamentals',
      courseDescription: 'Understand the foundations of machine learning and build predictive models.',
      chapters: [
        {
          name: 'Introduction to Machine Learning',
          progress: 80,
          description: 'Learn the basics of machine learning, types of ML, and key algorithms.',
        },
        {
          name: 'Supervised Learning Techniques',
          progress: 55,
          description: 'Dive deep into supervised learning methods like regression and classification.',
        },
        {
          name: 'Unsupervised Learning Techniques',
          progress: 40,
          description: 'Explore clustering and dimensionality reduction techniques in unsupervised learning.',
        },
      ],
    },
  ];
}
