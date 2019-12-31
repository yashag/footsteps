import { ipcMain } from 'electron';

// ipcMain.on('asynchronous-message', (event: Electron.IpcMainEvent, arg: unknown) => {
//     console.log(arg); // prints "ping"
//     event.reply('asynchronous-reply', 'pong');
// });

ipcMain.on('step-completed', (event: Electron.IpcMainEvent, arg: unknown) => {
    console.log(arg); // prints "ping"
    event.returnValue = 'step completed';
});
