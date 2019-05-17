export default class ScreenBase extends PIXI.Container
{
	constructor() {
		super();
		this._addEventListeners();
		this._buildScreen();
	}
	protected _buildScreen() : void { } // Override
	protected _addEventListeners() : void { } // Override
	protected _removeEventListeners() : void { } // Override
	
	dispose() : void {
		this._removeEventListeners();
	}
	update(dt:number) : void {
		
	}
	onResize(pOldWidth:number, pOldHeight:number) : void { } // Override
}