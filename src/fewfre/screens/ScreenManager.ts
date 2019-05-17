import Global from "../Global";
import ScreenBase from "./ScreenBase";

export default class ScreenManager
{
	protected _screens : ScreenBase[];
	
	constructor() {
		this._screens = [];
	}
	
	dispose() : void {
		for(var i = 0; i < this._screens.length; i++) {
			this._screens[i].dispose();
		}
		this._screens = null;
	}
	
	update(dt:number) : void {
		for(var i = 0; i < this._screens.length; i++) {
			this._screens[i].update(dt);
		}
	}
	
	push(pScreenName) : ScreenBase {
		let tScreen;
		this._screens.push(tScreen = new pScreenName());
		Global.app.stage.addChild(tScreen);
		return tScreen;
	}
	
	pushAndReplace(pScreenName) : ScreenBase {
		for(var i = 0; i < this._screens.length; i++) {
			this._screens[i].dispose();
			Global.app.stage.removeChild(this._screens[i]);
		}
		this._screens = [];
		return this.push(pScreenName);
	}
}