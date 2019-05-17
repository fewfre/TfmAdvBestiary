import ScreenBase from "../fewfre/screens/ScreenBase";
import Global from "../fewfre/Global";

export default class WorldScreen extends ScreenBase
{
	bunny:PIXI.Sprite;
	
	protected _buildScreen() : void {
		const app = Global.app;
		// load the texture we need
		app.loader.add('bunny', 'images/bunny.png').load((loader, resources) => {
			// This creates a texture from a 'bunny.png' image
			this.bunny = new PIXI.Sprite(resources.bunny.texture);

			// Setup the position of the bunny
			this.bunny.x = app.renderer.width / 2;
			this.bunny.y = app.renderer.height / 2;

			// Rotate around the center
			this.bunny.anchor.x = 0.5;
			this.bunny.anchor.y = 0.5;

			// Add the bunny to the scene we are building
			this.addChild(this.bunny);

			// // Listen for frame updates
			// app.ticker.add(() => {
			// 	// each frame we spin the bunny around a bit
				// bunny.rotation += 0.01;
			// });
		});
	}
	update(dt:number) : void {
		if(this.bunny) {
			this.bunny.rotation += 0.025*dt;
		}
	}
	dispose() : void {
		super.dispose();
	}
}