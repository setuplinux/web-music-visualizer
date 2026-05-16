# Web Music Visualizer

A browser-based MilkDrop-style music visualizer built with Butterchurn. It can react to a microphone or to system/tab audio, includes preset search, preset numbering, liked presets, and an editor panel for sensitivity and preset-code experiments.

## Live app

After GitHub Pages deploys, the app will be available at:

https://setuplinux.github.io/web-music-visualizer/

## Use it

1. Open the live app.
2. Choose a preset from the numbered preset picker or search by name/number.
3. Click **Mic** for microphone input, or **System Audio** to visualize audio from a tab, screen, or app.
4. For system audio, choose a source and enable the browser's **Share audio** option when it appears.
5. Use **Edit** to adjust sensitivity, smoothing, blend behavior, and preset code. Saved edits and liked presets stay in your browser.

## Run locally

```powershell
npm install
npm run mic
```

Then open:

```text
http://127.0.0.1:5177
```

## Publish

This repo deploys `mic-visualizer/` to GitHub Pages through `.github/workflows/pages.yml` whenever `main` is pushed.

If the first deployment asks for setup, set the repository's Pages source to **GitHub Actions** in GitHub settings, then rerun the workflow.
