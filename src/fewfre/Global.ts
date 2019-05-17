import ScreenManager from "./screens/ScreenManager";

export default class Global
{
	static readonly screenManager : ScreenManager = new ScreenManager();
	static app : PIXI.Application;
}