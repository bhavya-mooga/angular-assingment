import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Angular 20 Demo</h1>
        <p class="hero-subtitle">
          A modern web application showcasing Angular's powerful features including routing, 
          HTTP client integration, and reactive forms.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Modern Architecture</h3>
            <p>Built with Angular 20's latest features and standalone components</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>API Integration</h3>
            <p>Seamless data consumption from external APIs using HttpClient</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>Reactive Forms</h3>
            <p>Advanced form handling with real-time validation and user feedback</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 2rem;
    }

    .hero-content {
      max-width: 1200px;
      text-align: center;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #4a5568;
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .feature-card p {
      color: #4a5568;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}