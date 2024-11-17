import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  newPost: any = { content: '' };
  posts: any[] = [
    {
      username: 'Aarav Mehta',
      userImage: 'https://via.placeholder.com/40',
      content: 'Excited to learn about AI-powered tools for everyday productivity! Any suggestions?',
      likes: 15,
      comments: [
        { username: 'Priya Sharma', text: 'Check out ChatGPT and MidJourney!' },
        { username: 'Rohan Gupta', text: 'Don’t miss tools like Notion AI and Grammarly AI.' },
      ],
      showComments: false,
      newComment: '',
    },
    {
      username: 'Riya Patel',
      userImage: 'https://via.placeholder.com/40',
      content: 'What are the best Python libraries for Machine Learning? Suggestions, please!',
      likes: 25,
      comments: [
        { username: 'Ankit Verma', text: 'Start with TensorFlow and scikit-learn.' },
        { username: 'Ishika Rao', text: 'Also explore PyTorch for deep learning projects!' },
      ],
      showComments: false,
      newComment: '',
    },
    {
      username: 'Aditya Kumar',
      userImage: 'https://via.placeholder.com/40',
      content: 'I’m exploring Prompt Engineering. How do I optimize AI responses?',
      likes: 18,
      comments: [
        { username: 'Sneha Iyer', text: 'Focus on clear and specific instructions.' },
        { username: 'Kunal Joshi', text: 'Try using system-level prompts for consistency.' },
      ],
      showComments: false,
      newComment: '',
    },
    {
      username: 'Pooja Singh',
      userImage: 'https://via.placeholder.com/40',
      content: 'Anyone here working on NLP projects? Need guidance on preprocessing text data.',
      likes: 12,
      comments: [
        { username: 'Amit Chauhan', text: 'Look into NLTK and spaCy for preprocessing.' },
        { username: 'Neha Das', text: 'Hugging Face Transformers is a game-changer for NLP.' },
      ],
      showComments: false,
      newComment: '',
    },
    {
      username: 'Vikram Raj',
      userImage: 'https://via.placeholder.com/40',
      content: 'Python or JavaScript for AI projects? What’s better for starters?',
      likes: 20,
      comments: [
        { username: 'Kavya Menon', text: 'Python all the way for its ML libraries and community support!' },
        { username: 'Harsh Aggarwal', text: 'JavaScript is great for web-based AI projects.' },
      ],
      showComments: false,
      newComment: '',
    },
  ];

  addPost() {
    if (this.newPost.content.trim() !== '') {
      this.posts.unshift({
        username: 'New User',
        userImage: 'https://via.placeholder.com/40',
        content: this.newPost.content,
        likes: 0,
        comments: [],
        showComments: false,
        newComment: '',
      });
      this.newPost.content = '';
    }
  }

  likePost(post: any) {
    post.likes += 1;
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if (post.newComment.trim() !== '') {
      post.comments.push({
        username: 'New Commenter',
        text: post.newComment,
      });
      post.newComment = '';
    }
  }
}
