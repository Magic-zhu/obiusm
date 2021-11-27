import { Plugin, PluginsMap, MoveOptions, ScaleOptions, RotateOptions, AttributeOptions, Keyframe, ObisumType } from '../@types';
import EventEmitter from './EventEmitter';
import AnimationLanguageSupport from './AnimationLanguageSupport';
declare class Obisum extends EventEmitter implements ObisumType {
    static plugins: PluginsMap;
    static dom: Function;
    static func: any;
    static use(plugin: Plugin): typeof Obisum;
    static current: HTMLElement;
    constructor();
    static register(methodName: string, method: Function): void;
    static create(): AnimationLanguageSupport;
    static get(id: string): typeof Obisum;
    static bind(element: HTMLElement): typeof Obisum;
    static checkIfHasDomRender(callback: any): void;
    static moveTo(options: MoveOptions | number, y?: number, duration?: number): typeof Obisum;
    static scale(options: ScaleOptions | number, y?: number, duration?: number): typeof Obisum;
    static rotate(options: RotateOptions | number, duration?: number): typeof Obisum;
    static attribute(options: AttributeOptions | string, value?: string, duration?: number): typeof Obisum;
    static keyframe(keyframe: Keyframe, options: any): typeof Obisum;
}
export default Obisum;
