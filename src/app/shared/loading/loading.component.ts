import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="show" class="spinner-wrapper">
      <p-progressSpinner></p-progressSpinner>
    </div>
  `,
  styles: [
    `
      .spinner-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        z-index: 1000;
      }
    `,
  ],
})
export class LoadingComponent {
  @Input() show = false;

  constructor() {}
}
