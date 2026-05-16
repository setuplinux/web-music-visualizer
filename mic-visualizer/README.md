# Mic Visualizer

A browser-based audio visualizer using Butterchurn MilkDrop presets. It can use microphone input or browser system/tab capture, and it includes preset search, numbering, and a live edit panel.

Run from the project root:

```powershell
npm run mic
```

Then open:

```text
http://127.0.0.1:5177
```

Browsers require microphone permission on `localhost` or `127.0.0.1`. The app tries to start the microphone immediately and falls back to the enable button if the browser wants a click first.

For system audio, use the **System Audio** button and enable **Share audio** in the browser's picker.
