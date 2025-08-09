import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-page">
      <div class="container">
        <div class="form-header">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-description">
            Get in touch with us using the form below. All fields are required and validated in real-time.
          </p>
        </div>

        <div class="form-container">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <!-- Name Field -->
            <div class="form-group">
              <label for="name" class="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="form-input"
                [class.error]="name?.invalid && name?.touched"
                placeholder="Enter your full name"
              />
              <div class="error-message" *ngIf="name?.invalid && name?.touched">
                <span *ngIf="name?.errors?.['required']">Name is required</span>
                <span *ngIf="name?.errors?.['minlength']">Name must be at least 2 characters</span>
              </div>
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                formControlName="email"
                class="form-input"
                [class.error]="email?.invalid && email?.touched"
                placeholder="Enter your email address"
              />
              <div class="error-message" *ngIf="email?.invalid && email?.touched">
                <span *ngIf="email?.errors?.['required']">Email is required</span>
                <span *ngIf="email?.errors?.['email']">Please enter a valid email address</span>
              </div>
            </div>

            <!-- Subject Field -->
            <div class="form-group">
              <label for="subject" class="form-label">Subject *</label>
              <select
                id="subject"
                formControlName="subject"
                class="form-input"
                [class.error]="subject?.invalid && subject?.touched"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
              </select>
              <div class="error-message" *ngIf="subject?.invalid && subject?.touched">
                <span *ngIf="subject?.errors?.['required']">Please select a subject</span>
              </div>
            </div>

            <!-- Message Field -->
            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea
                id="message"
                formControlName="message"
                class="form-input textarea"
                [class.error]="message?.invalid && message?.touched"
                placeholder="Enter your message here..."
                rows="6"
              ></textarea>
              <div class="error-message" *ngIf="message?.invalid && message?.touched">
                <span *ngIf="message?.errors?.['required']">Message is required</span>
                <span *ngIf="message?.errors?.['minlength']">Message must be at least 10 characters</span>
              </div>
            </div>

            <!-- Priority Field -->
            <div class="form-group">
              <label class="form-label">Priority Level *</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input
                    type="radio"
                    formControlName="priority"
                    value="low"
                    class="radio-input"
                  />
                  <span class="radio-custom"></span>
                  Low
                </label>
                <label class="radio-label">
                  <input
                    type="radio"
                    formControlName="priority"
                    value="medium"
                    class="radio-input"
                  />
                  <span class="radio-custom"></span>
                  Medium
                </label>
                <label class="radio-label">
                  <input
                    type="radio"
                    formControlName="priority"
                    value="high"
                    class="radio-input"
                  />
                  <span class="radio-custom"></span>
                  High
                </label>
              </div>
              <div class="error-message" *ngIf="priority?.invalid && priority?.touched">
                <span *ngIf="priority?.errors?.['required']">Please select a priority level</span>
              </div>
            </div>

            <!-- Newsletter Checkbox -->
            <div class="form-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  formControlName="newsletter"
                  class="checkbox-input"
                />
                <span class="checkbox-custom"></span>
                Subscribe to our newsletter for updates and announcements
              </label>
            </div>

            <!-- Submit Button -->
            <div class="form-actions">
              <button
                type="submit"
                class="submit-button"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div class="success-message" *ngIf="submitted">
            <div class="success-icon">✓</div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
            <button class="reset-button" (click)="resetForm()">Send Another Message</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-page {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
      padding: 2rem 0;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .form-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1rem;
    }

    .page-description {
      color: #4a5568;
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .form-container {
      position: relative;
    }

    .contact-form {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .form-input {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f8fafc;
    }

    .form-input:focus {
      outline: none;
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-input.error {
      border-color: #e53e3e;
      background: #fed7d7;
    }

    .textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error-message {
      color: #e53e3e;
      font-size: 0.875rem;
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .error-message:before {
      content: "⚠";
      color: #e53e3e;
    }

    .radio-group {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .radio-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      font-weight: 500;
      color: #4a5568;
    }

    .radio-input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .radio-custom {
      width: 20px;
      height: 20px;
      border: 2px solid #e2e8f0;
      border-radius: 50%;
      position: relative;
      transition: all 0.3s ease;
    }

    .radio-input:checked + .radio-custom {
      border-color: #667eea;
      background: #667eea;
    }

    .radio-input:checked + .radio-custom:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      color: #4a5568;
      line-height: 1.5;
    }

    .checkbox-input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkbox-custom {
      width: 20px;
      height: 20px;
      border: 2px solid #e2e8f0;
      border-radius: 4px;
      position: relative;
      transition: all 0.3s ease;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .checkbox-input:checked + .checkbox-custom {
      border-color: #667eea;
      background: #667eea;
    }

    .checkbox-input:checked + .checkbox-custom:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
      font-weight: bold;
    }

    .form-actions {
      margin-top: 2rem;
      text-align: center;
    }

    .submit-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 3rem;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 180px;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .success-message {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      padding: 3rem 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      text-align: center;
    }

    .success-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      margin: 0 auto 1.5rem;
    }

    .success-message h3 {
      color: #1a202c;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .success-message p {
      color: #4a5568;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .reset-button {
      background: transparent;
      color: #667eea;
      border: 2px solid #667eea;
      padding: 0.75rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .reset-button:hover {
      background: #667eea;
      color: white;
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }

      .contact-form {
        padding: 1.5rem;
      }

      .radio-group {
        flex-direction: column;
        gap: 1rem;
      }

      .page-title {
        font-size: 2rem;
      }
    }
  `]
})
export class FormPageComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      priority: ['', Validators.required],
      newsletter: [false]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
  get priority() { return this.contactForm.get('priority'); }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.submitted = true;
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.submitted = false;
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsUntouched();
    });
  }
}