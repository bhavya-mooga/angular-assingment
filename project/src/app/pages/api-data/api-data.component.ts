import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Post, User } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-page">
      <div class="container">
        <h1 class="page-title">API Data Dashboard</h1>
        <p class="page-description">
          This page demonstrates consuming data from the JSONPlaceholder API using Angular's HttpClient service.
        </p>

        <div class="data-tabs">
          <button 
            class="tab-button"
            [class.active]="activeTab === 'posts'"
            (click)="switchTab('posts')">
            Posts ({{ posts.length }})
          </button>
          <button 
            class="tab-button"
            [class.active]="activeTab === 'users'"
            (click)="switchTab('users')">
            Users ({{ users.length }})
          </button>
        </div>

        <div class="loading" *ngIf="loading">
          <div class="spinner"></div>
          <p>Loading data...</p>
        </div>

        <div class="error-message" *ngIf="error">
          <p>{{ error }}</p>
        </div>

        <!-- Posts Tab -->
        <div class="data-content" *ngIf="activeTab === 'posts' && !loading && !error">
          <div class="data-grid">
            <div class="data-card" *ngFor="let post of posts.slice(0, 12)">
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-body">{{ post.body }}</p>
              <div class="card-meta">
                <span class="post-id">Post #{{ post.id }}</span>
                <span class="user-id">User #{{ post.userId }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Users Tab -->
        <div class="data-content" *ngIf="activeTab === 'users' && !loading && !error">
          <div class="users-grid">
            <div class="user-card" *ngFor="let user of users">
              <div class="user-avatar">
                <span>{{ user.name.charAt(0) }}</span>
              </div>
              <div class="user-info">
                <h3>{{ user.name }}</h3>
                <p class="user-email">{{ user.email }}</p>
                <p class="user-phone">{{ user.phone }}</p>
                <p class="user-website">{{ user.website }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .api-page {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 2rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      text-align: center;
      margin-bottom: 1rem;
    }

    .page-description {
      text-align: center;
      color: #4a5568;
      margin-bottom: 2rem;
      font-size: 1.1rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .data-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .tab-button {
      padding: 0.75rem 2rem;
      border: 2px solid #e2e8f0;
      background: white;
      color: #4a5568;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tab-button:hover {
      border-color: #667eea;
      color: #667eea;
    }

    .tab-button.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }

    .loading {
      text-align: center;
      padding: 3rem;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #e2e8f0;
      border-top: 4px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .error-message {
      background: #fed7d7;
      border: 1px solid #feb2b2;
      color: #c53030;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      margin: 2rem 0;
    }

    .data-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .data-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .data-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 0.75rem;
      text-transform: capitalize;
    }

    .card-body {
      color: #4a5568;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: #718096;
    }

    .post-id, .user-id {
      background: #edf2f7;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-weight: 500;
    }

    .users-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .user-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      display: flex;
      gap: 1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .user-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .user-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      flex-shrink: 0;
    }

    .user-info h3 {
      margin: 0 0 0.5rem 0;
      color: #1a202c;
      font-weight: 600;
    }

    .user-info p {
      margin: 0.25rem 0;
      color: #4a5568;
      font-size: 0.875rem;
    }

    .user-email {
      color: #667eea !important;
    }

    @media (max-width: 768px) {
      .data-tabs {
        flex-direction: column;
        align-items: center;
      }

      .tab-button {
        width: 200px;
      }

      .data-grid, .users-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ApiDataComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  loading = false;
  error = '';
  activeTab = 'posts';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  loadData() {
    this.loading = true;
    this.error = '';

    // Load posts
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load posts data';
        this.loading = false;
        console.error('Error loading posts:', error);
      }
    });

    // Load users
    this.apiService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }
}