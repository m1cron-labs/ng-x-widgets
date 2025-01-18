export interface XButtonParams {
  /**
   * When set to large, display a larger version of the button. Set to l for iframe.
   */
  size: 'large' | 'medium' | 'small';

  /**
   * A supported Twitter language code.
   */
  lang: string;

  /**
   * When set to true, the button and its embedded page on your site are not used for purposes that include personalized suggestions and personalized ads.
   */
  dnt: boolean;
}
