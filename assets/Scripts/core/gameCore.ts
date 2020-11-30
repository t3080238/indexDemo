import { _decorator, Component, Node } from 'cc';
import * as BULL from '../index';
const { ccclass, property } = _decorator;

@ccclass('GameCore')
export class GameCore extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        console.log(BULL.Core.DetectUserInfo.aaa());
        console.log(BULL.Core.DetectDevice.bbb());
        console.log(BULL.Helper.Math.ccc());
        console.log(BULL.Helper.Tool.ddd());
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
