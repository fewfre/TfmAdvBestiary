import Global from "./fewfre/Global";
import WorldScreen from "./screens/WorldScreen";

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();
Global.app = app;

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// Custom logic
Global.screenManager.push(WorldScreen);

// Main update loop
app.ticker.add((dt:number) => {
	Global.screenManager.update(dt);
});