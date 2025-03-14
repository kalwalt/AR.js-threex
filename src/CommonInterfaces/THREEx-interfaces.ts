import { Renderer, Camera, Matrix4, Object3D, EventListener, EventDispatcher } from "three";
export interface IArBaseControls {
    update(object3d: Object3D): void;
    name(): string;
}

export interface IArMarkerControls {
    dispose(): void;
    updateWithModelViewMatrix(modelViewMatrix: Matrix4): boolean;
    name(): string;
    object3d: Object3D;
}

export interface IArSmoothedControls {
    parameters: ISmoothedControlsParameters;
    update(targetObject3d: any): void;
}

export interface IArToolkitContext {
    parameters: IContextParameters;
    arController: any;
    _artoolkitProjectionAxisTransformMatrix: Matrix4
    dispatchEvent(event: any): void;
    addEventListener<T extends string>(type: T, listener: EventListener<any, T, EventDispatcher<any>>): void;
    hasEventListener<T extends string>(type: T, listener: EventListener<any, T, EventDispatcher<any>>): boolean;
    removeEventListener<T extends string>(type: T, listener: EventListener<any, T, EventDispatcher<any>>): void;
    createDefaultCamera(trackingBackend: string): void;
    init(onCompleted: Function): void;
    update(srcElement: HTMLImageElement | HTMLVideoElement): void;
    addMarker(arMarkerControls: any): void;
    removeMarker(arMarkerControls: any): void
    getProjectionMatrix(): Matrix4;
}

export interface IArToolkitProfile {
    sourceParameters: ISourceParameters;
    contextParameters: IContextParameters;
    defaultMarkerParameters: IDefaultMarkerParameters;
    reset(): void;
    performance(label: string): void;
    defaultMarker(trackingBackend: string): void;
    sourceWebcam(): this;
    sourceVideo(url: string): this;
    sourceImage(url: string): this;
    trackingBackend(trackingBackend: string): void;
    changeMatrixMode(changeMatrixMode: string): void;
    trackingMethod(trackingMethod: string): void;
    checkIfValid(): void;
}

export interface IArToolkitSource {
    ready: boolean;
    domElement: HTMLImageElement | HTMLVideoElement;
    parameters: ISourceParameters;
    init(onReady: Function, onError: Function): this;
    domElementWidth(): number;
    domElementHeight(): number;
    onResizeElement(): void;
    copyElementSizeTo(otherElement: any): void;
    copySizeTo(): void;
    onResize(arToolkitContext: IArToolkitContext, renderer: Renderer, camera: Camera): void;
}

export interface IArMarkerControlsParameters {
    size?: number;
    type?: string;
    patternUrl?: string;
    barcodeValue?: number;
    descriptorsUrl?: string;
    changeMatrixMode?: string;
    minConfidence?: number;
    poseMatrix?: Array<number>;
    smooth?: boolean;
    smoothCount?: number;
    smoothTolerance?: number;
    smoothThreshold?: number;
}

export interface IContextParameters {
    canvasWidth?: number,
    canvasHeight?: number,
    debug?: boolean,
    cameraParametersUrl?: string,
    detectionMode?: string,
    maxDetectionRate?: number,
    matrixCodeType?: string,
    patternRatio?: number,
    labelingMode?: string,
    trackingBackend?: string,
    imageSmoothingEnabled?: boolean
}

export interface IDefaultMarkerParameters {
    type: string,
    patternUrl: string,
    changeMatrixMode: string,
    markersAreaEnabled: boolean
}

export interface ISmoothedControlsParameters {
    lerpPosition: number,
    lerpQuaternion: number,
    lerpScale: number,
    lerpStepDelay: number,
    minVisibleDelay: number,
    minUnvisibleDelay: number
}

export interface ISourceParameters {
    sourceType?: string,
    sourceUrl?: string,
    deviceId?: string,
    sourceWidth: number,
    sourceHeight: number,
    displayWidth?: number,
    displayHeight?: number
}

export interface ISmoothedControlsParameters {
    lerpPosition: number,
    lerpQuaternion: number,
    lerpScale: number,
    lerpStepDelay: number,
    minVisibleDelay: number,
    minUnvisibleDelay: number
}

export interface IUserMediaConstraints {
    audio: boolean
    video: {
        width: {
            min?: number,
            max?: number,
            ideal: number
        },
        height: {
            min?: number,
            max?: number,
            ideal: number
        },
        facingMode: string,
        deviceId: {
            exact: string
        }
    }

}

export interface IArMarkerAreaControlsParameters {
    subMarkersControls: ISubMarkerControls[],
    subMarkerPoses: Matrix4[],
    changeMatrixMode: string
}

export interface IArMarkerAreaControls {
    parameters: IArMarkerAreaControlsParameters;
    subMarkersControls: ISubMarkerControls[];
    updateSmoothedControls(smooth: any, lerps?: any): void;
}

export interface ISubMarkerControls {
    parameters: ISubMarkerControlsParameters,
    poseMatrix?: Array<number>,
    object3d?: Object3D,
    dispose(): void,
}

export interface ISubMarkerControlsParameters {
    type?: string,
    patternUrl?: string,
}