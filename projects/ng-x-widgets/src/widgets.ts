import { XWidgets } from './lib/models/widgets';
import { XWidgetsVersion } from './lib/models/widgets-version';

declare global {
  interface Window {
    __twttr: XWidgetsVersion;
    twttr: XWidgets;
  }
}
