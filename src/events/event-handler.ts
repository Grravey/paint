import { EventName } from '../enums/index';

interface InitEventProps<T> {
  eventName: EventName;
  detail: T;
}

interface CustomEventType<T> {
  eventName: EventName;
}

class UIEventHandler {
  private initEvent<T>({ detail, eventName }: InitEventProps<T>) {
    return new CustomEvent(eventName, { detail });
  }

  public emit<T>(eventName: EventName, detail: T) {
    document.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  public listen(eventName: EventName, callback: Function) {
    document.addEventListener(eventName, (...args) => {
      callback(...args);
    });
  }
}

const uiEventHandler = new UIEventHandler();

export { uiEventHandler };
