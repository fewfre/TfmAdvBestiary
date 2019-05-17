import ScreenBase from "../fewfre/screens/ScreenBase";

export default class SplashScreen extends ScreenBase
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