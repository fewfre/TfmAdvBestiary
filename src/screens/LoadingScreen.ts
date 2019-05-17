import ScreenBase from "../fewfre/screens/ScreenBase";

export default class LoadingScreen extends ScreenBase
{
	protected _buildScreen() : void {
		this.addChild(new PIXI.Text("Splash"));
	}
	update(dt:number) : void {
		
	}
	dispose() : void {
		super.dispose();
	}
}