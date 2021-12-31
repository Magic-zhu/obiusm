import { TranslateOptions, ScaleOptions, RotateOptions, MoveOptions, AttributeOptions, StepOptions, SkewOptions, PathOptions, Keyframe, ActionTree, Point } from '../@types';
declare class AnimationLanguageSupport {
    actions: ActionTree;
    constructor();
    private initAction;
    step(args: any[], options?: StepOptions): this;
    translate(options: TranslateOptions | number, y?: number, duration?: number): this;
    moveTo(options: MoveOptions | number, y?: number, duration?: number): this;
    scale(options: ScaleOptions | number, y?: number, duration?: number): this;
    rotate(options: RotateOptions | number, duration?: number): this;
    skew(options: SkewOptions | number, y?: number, duration?: number): void;
    attribute(options: AttributeOptions | string, value?: string, duration?: number): this;
    path(points: Point[], options?: PathOptions): this;
    wait(time: number): this;
    keyframe(id: string, keyframe: Keyframe, options?: {}): this;
}
export default AnimationLanguageSupport;
