import {
  Plugin,
  PluginsMap,
  MoveOptions,
  ScaleOptions,
  RotateOptions,
  AttributeOptions,
  Keyframe,
  ObisumType,
} from '../@types';
import EventEmitter from './EventEmitter';
import AnimationLanguageSupport from './AnimationLanguageSupport';
import {isUndef} from '../utils/share';

class Obisum extends EventEmitter implements ObisumType {
  static plugins: PluginsMap = {};
  static dom: Function;
  static func: any = {};

  static use(plugin: Plugin) {
    const pluginName = plugin.pluginName;
    if (isUndef(pluginName)) {
      console.error(
        `🌈 Plugin Class must specify plugin's name 
          in static property by 'name' field.`,
      );
      return this;
    }
    if (isUndef(plugin.installed)) {
      console.error(
        `🌈 Plugin Class must specify plugin's 
          installed in static property by 'installed' field.`,
      );
      return this;
    }
    if (isUndef(plugin.install)) {
      console.error(`🌈 Plugin Class must have an install method.`);
      return this;
    }
    if (this.plugins[pluginName] != undefined) {
      console.warn(
        `🌈 This plugin has been registered, 
          maybe you could change plugin\'s name`,
      );
      return this;
    }
    plugin.install(Obisum);
    plugin.installed = true;
    this.plugins[pluginName] = plugin;
    return this;
  }

  static current: HTMLElement = null;

  constructor() {
    super();
  }

  static register(methodName: string, method: Function) {
    if (!isUndef(this[methodName])) {
      console.error(`${methodName} has already exist`);
      return;
    }
    this[methodName] = method;
    this.func[methodName] = method;
  }

  static create() {
    return new AnimationLanguageSupport();
  }

  // for dom animation
  static get(id: string) {
    this.current = document.querySelector(id);
    if (!this.current) {
      throw new Error('The dom is null');
    }
    return this;
  }

  static bind(element: HTMLElement) {
    this.current = element;
    return this;
  }

  static query(query: string) {
    const dom: HTMLElement | null = document.querySelector(query);
    if (!dom) {
      console.error('query:no matches are found');
      return;
    }
    return dom;
  }

  static checkIfHasDomRender(callback) {
    if (this.plugins['DomRender'] === undefined) {
      console.error(`plugin miss:this function is based on 'domRender' plugin`);
      return;
    }
    callback();
  }

  static moveTo(options: MoveOptions | number, y?: number, duration?: number) {
    this.checkIfHasDomRender(() => {
      const ani = this.create().moveTo(options, y, duration);
      this.dom(this.current, ani).render();
    });
    return this;
  }

  static scale(options: ScaleOptions | number, y?: number, duration?: number) {
    this.checkIfHasDomRender(() => {
      const ani = this.create().scale(options, y, duration);
      this.dom(this.current, ani).render();
    });
    return this;
  }

  static rotate(options: RotateOptions | number, duration?: number) {
    this.checkIfHasDomRender(() => {
      const ani = this.create().scale(options, duration);
      this.dom(this.current, ani).render();
    });
    return this;
  }

  static attribute(
    options: AttributeOptions | string,
    value?: string,
    duration?: number,
  ) {
    this.checkIfHasDomRender(() => {
      const ani = this.create().attribute(options, value, duration);
      this.dom(this.current, ani).render();
    });
    return this;
  }

  static keyframe(id: string, keyframe: Keyframe, options) {
    this.checkIfHasDomRender(() => {
      const ani = this.create().keyframe(id, keyframe, options);
      this.dom(this.current, ani).render();
    });
    return this;
  }
}

export default Obisum;
