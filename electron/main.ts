import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";
import socketClient from "./socketClient";

let mainWindow: BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    center: true,
    //kiosk: !isDev,
    resizable: true,
    webPreferences: {
      // node환경처럼 사용하기
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      // 개발자도구
      devTools: isDev,
    },
  });
  // production에서는 패키지 내부 리소스에 접근.
  // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드.
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
  
  mainWindow.webContents.on('did-finish-load', ()=> socketClient(mainWindow))
  // Emitted when the window is closed.
  mainWindow.on("closed", () => (mainWindow = undefined!));
  // mainWindow.webContents.on("did-finish-load", () => socketServer(mainWindow));
  mainWindow.focus();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  console.log("active");

  if (mainWindow === null) {
    createWindow();
  }
});
