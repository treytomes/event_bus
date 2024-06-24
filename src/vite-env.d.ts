/// <reference types="vite/client" />

import {type EventBus} from './event_bus';

export {};

declare global {
  interface Window {
    eventBus: EventBus;
  }
}
