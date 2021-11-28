import {
  Action,
  TranslateOptions,
  ScaleOptions,
  RotateOptions,
  MoveOptions,
  AttributeOptions,
  StepOptions,
  SkewOptions,
  PathOptions,
  Keyframe,
  StatusDescription,
  ActionTree,
  Point,
  AnimationType,
} from '../@types';
import Obisum from '.';
import {
  isUndef,
  copyOptions,
  isObject,
  getRandomString32,
} from '../utils/share';

class AnimationLanguageSupport {
  actions: ActionTree;

  constructor() {
    this.actions = {
      parent: null,
      children: [],
    };
  }

  private initAction(): Action {
    return {
      type: 'single',
      parent: this.actions,
      duration: 400,
      timeFunction: 'linear',
      transformOrigin: '50% 50%',
      id: getRandomString32(),
    };
  }

  statusOn(
    statusDescription: StatusDescription | string,
    description?: string,
    transformOrigin?: string,
  ) {
    let _statusDescription;
    if (isObject(statusDescription)) {
      _statusDescription = statusDescription;
    } else {
      _statusDescription = {
        type: statusDescription,
        description: description,
        transformOrigin: transformOrigin || '50% 50%',
      };
    }
    const action: Action = {
      type: 'single',
      action: 'statusOn',
      status: _statusDescription,
      parent: null,
      children: [],
      duration: -1,
    };
    this.actions.children.push(action);
    return this;
  }

  statusOff(statusDescription: StatusDescription | string) {
    let _statusDescription;
    if (isObject(statusDescription)) {
      _statusDescription = statusDescription;
    } else {
      _statusDescription = {
        type: statusDescription,
        description: '',
      };
    }
    const action: Action = {
      type: 'single',
      action: 'statusOff',
      status: _statusDescription,
      parent: null,
      children: [],
      duration: -1,
    };
    this.actions.children.push(action);
    return this;
  }

  step(args: any[], options: StepOptions = {}) {
    if (args.length == 0) return;
    const actions: Action = {
      type: 'group',
      parent: null,
      children: [],
    };
    actions.duration = isUndef(options.duration) ? 400 : options.duration;
    actions.timeFunction = isUndef(options.timeFunction) ?
      'linear' :
      options.timeFunction;
    args.forEach((res) => {
      res.parent = actions;
      res.duration = actions.duration;
      res.timeFunction =
        res.timeFunction === undefined ?
          actions.timeFunction :
          res.timeFunction;
      actions.children.push(res);
    });
    this.actions.children.push(actions);
    return this;
  }

  translate(options: TranslateOptions | number, y?: number, duration?: number) {
    const action = this.initAction();
    action.action = 'translate';
    if (isObject(options)) {
      copyOptions(options, action, ['x', 'y', 'z', 'duration', 'timeFunction']);
    } else {
      action.x = options;
      action.y = y;
      action.duration = duration || 400;
    }
    this.actions.children.push(action);
    return this;
  }

  moveTo(options: MoveOptions | number, y?: number, duration?: number) {
    const action = this.initAction();
    action.action = 'move';
    if (isObject(options)) {
      copyOptions(options, action, ['x', 'y', 'duration', 'timeFunction']);
    } else {
      action.x = options;
      action.y = y;
      action.duration = duration || 400;
    }
    this.actions.children.push(action);
    return this;
  }

  scale(options: ScaleOptions | number, y?: number, duration?: number) {
    const action = this.initAction();
    action.action = 'scale';
    if (isObject(options)) {
      copyOptions(options, action, [
        'x',
        'y',
        'z',
        'duration',
        'timeFunction',
        'transformOrigin',
      ]);
    } else {
      if (isUndef(y)) {
        action.x = options;
        action.y = options;
      } else {
        action.x = options;
        action.y = y;
        action.duration = duration || 400;
      }
    }
    this.actions.children.push(action);
    return this;
  }

  rotate(options: RotateOptions | number, duration?: number) {
    const action = this.initAction();
    action.action = 'rotate';
    if (isObject(options)) {
      copyOptions(options, action, [
        'x',
        'y',
        'z',
        'duration',
        'timeFunction',
        'transformOrigin',
      ]);
    } else {
      action.z = options;
      action.duration = duration || 400;
    }
    this.actions.children.push(action);
    return this;
  }

  skew(options: SkewOptions | number, y?: number, duration?: number) {
    const action = this.initAction();
    action.action = 'skew';
    if (isObject(options)) {
      copyOptions(options, action, ['x', 'y', 'z', 'duration', 'timeFunction']);
    } else {
      action.x = options;
      action.y = y;
      action.duration = duration || 400;
    }
  }

  attribute(
    options: AttributeOptions | string,
    value?: string,
    duration?: number,
  ) {
    const action: Action = this.initAction();
    action.action = 'attribute';
    if (isObject(options)) {
      copyOptions(options, action, [
        'key',
        'value',
        'duration',
        'timeFunction',
      ]);
    } else {
      action.key = options;
      action.value = value;
      console.log(duration);
      action.duration = duration || 400;
    }
    this.actions.children.push(action);
    return this;
  }

  path(points: Point[], options: PathOptions = {}) {
    if (Obisum.plugins['mot-plugin-path'] === undefined) {
      console.error(`'path()':this function is based on 'path' plugin`);
      return;
    }
    const action = this.initAction();
    action.action = 'path';
    const Path = Obisum.func.createPath();
    action.points = Path.createSmoothLine(points, {
      precision: options.precision || 50,
      ratio: options.ratio || 0.3,
    });
    action.options = options || null;
    this.actions.children.push(action);
    return this;
  }

  wait(time: number) {
    const action = this.initAction();
    action.action = AnimationType.WAIT;
    action.time = time;
    this.actions.children.push(action);
    return this;
  }

  /**
   *
   * @param {string} id - Unique tag
   * @param {Keyframe} keyframe
   * @param {*} options
   * @return {*}
   * @memberof AnimationLanguageSupport
   */
  keyframe(id: string, keyframe: Keyframe, options = {}) {
    const action: Action = this.initAction();
    action.action = AnimationType.KEYFRAME;
    action.keyframe = keyframe;
    if (isUndef(id) || typeof id !== 'string') {
      throw new Error(
        `id is necessary and it should be a string,
        so you can remove it sometime`,
      );
    }
    action.uid = id;
    copyOptions(options, action, [
      'duration',
      'timeFunction',
      'fillMode',
      'delay',
      'iterationCount',
      'direction',
      'playState',
    ]);
    this.actions.children.push(action);
    return this;
  }
}

export default AnimationLanguageSupport;
