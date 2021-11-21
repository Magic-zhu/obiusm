/* eslint-disable no-unused-vars */
export interface commonFunction {
    (arg?: any): void
}

export interface Plugin {
    pluginName: string;
    install: Function;
    installed:boolean;
}

export interface PluginsMap {
    [key: string]: any;
}

export enum AnimationType {
    MOVE = 'move',
    WAIT = 'wait',
    KEYFRAME = 'keyframe',
}
