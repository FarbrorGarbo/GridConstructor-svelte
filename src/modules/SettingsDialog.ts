import GCEngine, {Settings} from "./GCEngine";
export class SettingsDialog {
    private _settings: Settings;
    constructor() {
        this._settings = GCEngine.getSettings();
    }

    public get settings() {
        return this._settings;
    }

    public handleSettings = (key: string, value: number) => {
        if (this._settings) {
            let settingsCopy: Settings = {...this._settings};
            switch (key) {
                case "rotation": settingsCopy.rotation = value; break;
                case "elevation": settingsCopy.elevation = value; break;
                case "distance": settingsCopy.distance = value; break;
                case "picturePlane": settingsCopy.picturePlane = value; break;
                case "offsetH": settingsCopy.offsetH = value; break;
                case "offsetV": settingsCopy.offsetV = value; break;
            }
            GCEngine.setSettings(settingsCopy);
            this._settings = settingsCopy;
        }
    }
}
