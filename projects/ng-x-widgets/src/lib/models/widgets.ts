import { XButtonParams } from './button-params';

// https://developer.x.com/en/docs/x-for-websites/javascript-api/guides/javascript-api
export type XEventType =
  | 'click'
  | 'loaded'
  | 'rendered'
  | 'tweet'
  | 'follow'
  | 'retweet'
  | 'like';

export interface XWidgets {
  init: boolean;
  ready: (callback?: (value: XWidgets) => void) => Promise<XWidgets>;
  /**
   * Docs: https://developer.x.com/en/docs/x-for-websites/javascript-api/guides/scripting-factory-functions
   */
  widgets: {
    load: (element?: HTMLElement) => void;
    createDMButton: () => void;
    createFollowButton: (
      /**
       * A Twitter username
       */
      username: string,
      /**
       * DOM node of the desired parent element
       */
      target: HTMLElement,
      /**
       * Override default widget options
       */
      options: Partial<
        XButtonParams & {
          /**
           * The Twitter username to be followed. | Automatically extracted from the anchor element’s href attribute when using JavaScript-enhanced button markup.
           * @example "TwitterDev"
           */
          screen_name: string;

          /**
           * Set to false to hide the username of the specified account.
           */
          show_screen_name: boolean;
        }
      >
    ) => void;
    createGridFromCollection: () => void;
    createHashtagButton: (
      hashtags: string,
      target: HTMLElement,
      options: Partial<XButtonParams>
    ) => void;
    createMentionButton: (
      username: string,
      target: HTMLElement,
      options: Partial<XButtonParams>
    ) => void;
    createMoment: () => void;
    createPeriscopeOnAirButton: (
      url: string,
      target: HTMLElement,
      options: Partial<XButtonParams>
    ) => void;
    /**
     * Create a share button for a URL.
     * Docs: https://developer.x.com/en/docs/x-for-websites/tweet-button/guides/javascript-factory-function
     * @param url
     * @param target
     * @param options
     */
    createShareButton: (
      url: string,
      target: HTMLElement,
      options: Partial<
        {
          /**
           * Pre-populated text highlighted in the Tweet composer.
           */
          text: string;

          /**
           * URL included with the Tweet.
           */
          url: string;

          /**
           * A comma-separated list of hashtags to be appended to default Tweet text.
           * @example "example,demo"
           */
          hashtags: string;

          /**
           * Attribute the source of a Tweet to a Twitter username.
           */
          via: string;

          /**
           * A comma-separated list of accounts related to the content of the shared URI.
           * @example "twitterapi,twitter"
           */
          related: string;
        } & XButtonParams
      >
    ) => void;
    createTimeline: () => void;
    createTweet: (
      tweetID: string,
      target: HTMLElement,
      options?: Partial<{
        /**
         * The numerical ID of the desired Tweet.
         */
        id: string;

        /**
         * When set to hidden, links in a Tweet are not expanded to photo, video, or link previews.
         */
        cards: 'hidden';

        /**
         * When set to none, only the cited Tweet will be displayed even if it is in reply to another Tweet.
         */
        conversation: 'none';

        /**
         * When set to dark, displays Tweet with light text over a dark background.
         */
        theme: 'light' | 'dark';

        /**
         * The maximum width of the rendered Tweet in whole pixels. This value should be between 250 and 550 pixels.
         */
        width: number;

        /**
         * Float the Tweet left, right, or center relative to its container. Typically set to allow text or other content to wrap around the Tweet.
         */
        align: 'left' | 'right' | 'center';

        /**
         * A supported Twitter language code. Loads text components in the specified language. Note: does not affect the text of the cited Tweet.
         */
        lang: string;

        /**
         * When set to true, the Tweet and its embedded page on your site are not used for purposes that include personalized suggestions and personalized ads.
         */
        dnt: boolean;
      }>
    ) => void;
    createTweetEmbed: () => void;
    createVideo: () => void;
  };
  events: {
    bind: (eventType: XEventType, handler: Function) => void;
    unbind: (eventType: XEventType, handler?: Function) => void;
    trigger: (eventType: XEventType, event?: unknown) => void;
  };
}
