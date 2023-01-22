import * as THREE from 'three';
import { IContextParameters } from './CommonInterfaces/THREEx-interfaces';
import jsartoolkit from "@ar-js-org/artoolkit5-js";
declare const ARController: typeof jsartoolkit.ARController;
export declare class ArToolkitContext {
    private _updatedAt;
    parameters: IContextParameters;
    arController: typeof ARController;
    private initialized;
    private _arMarkersControls;
    private _artoolkitProjectionAxisTransformMatrix;
    constructor(parameters: any);
    dispatchEvent: (event: any) => void;
    addEventListener: <T extends any>(type: T, listener: THREE.EventListener<any, T, THREE.EventDispatcher<any>>) => void;
    hasEventListener: <T extends any>(type: T, listener: THREE.EventListener<any, T, THREE.EventDispatcher<any>>) => boolean;
    removeEventListener: <T extends any>(type: T, listener: THREE.EventListener<any, T, THREE.EventDispatcher<any>>) => void;
    static baseURL: string;
    static REVISION: string;
    createDefaultCamera(trackingBackend: string): THREE.Camera;
    init(onCompleted: any): void;
    update(srcElement: any): boolean;
    addMarker(arMarkerControls: any): void;
    removeMarker(arMarkerControls: any): void;
    private _initArtoolkit;
    getProjectionMatrix(): THREE.Matrix4;
    _updateArtoolkit(srcElement: any): void;
    private setParameters;
}
export {};