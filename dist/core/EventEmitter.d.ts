declare class EventEmitter {
    static _events: any;
    static MAX_LISTENERS: number;
    constructor();
    static on(eventName: string, listener: Function, options?: any): void;
    static emit(eventName: string, ...args: any): boolean;
    static once(eventName: string, listener: Function): void;
    static off(eventName: string, listener: Function): void;
    static removeListener(eventName: string, listener: Function): boolean;
    static removeAllListener(eventName: string): boolean;
    static setMaxListeners(num: number): void;
}
export default EventEmitter;
