import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

app.on("ready", () => {
  const window = new BrowserWindow({
    width: 1600,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true, //Menu bar
  });
  app.setAppUserModelId("Electron TS Quick"); //App name

  window.loadFile("./index.html");
  window.webContents.toggleDevTools(); //Open developement tool

  ipcMain.on("helloWorld", (event, text: string) => {
    console.log(text);
  });
});
