import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { XWidgets } from './models/widgets';

@Injectable({
  providedIn: 'root',
})
export class NgXWidgetsService {
  readonly #document = inject(DOCUMENT);

  #widgets: XWidgets | null = null;

  get widgets(): XWidgets | null {
    return this.#widgets;
  }

  initialize(): Promise<XWidgets | null> {
    if (this.#widgets) {
      return Promise.resolve(this.#widgets);
    }
    return new Promise(resolve => {
      const script = this.#document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.onerror = error => {
        console.error(
          'Twitter widgets JS failed to load. Is there an ad blocker enabled? More info:',
          error
        );
        resolve(null);
      };
      script.onload = () =>
        window.twttr.ready(widget => {
          this.#widgets = widget;
          resolve(widget);
        });
      this.#document.body.appendChild(script);
    });
  }
}
