import { RefObject } from 'react';
type Event = MouseEvent | TouchEvent;
export declare const useClickOutside: <T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>, outsideClickHandler: (event: Event) => void) => void;
export {};
