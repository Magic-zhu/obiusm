export interface commonFunction {
    (arg?: any): void;
}
export interface Plugin {
    pluginName: string;
    install: Function;
    installed: boolean;
}
export interface PluginsMap {
    [key: string]: any;
}
export declare enum AnimationType {
    MOVE = "move",
    WAIT = "wait",
    KEYFRAME = "keyframe"
}
