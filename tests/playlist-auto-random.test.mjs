import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const html = readFileSync(new URL('../mic-visualizer/index.html', import.meta.url), 'utf8');

test('shows a playlist pause control and auto-randomizes every 10 seconds', () => {
  assert.match(html, /id="playlistToggle"/);
  assert.match(html, /const playlistIntervalMs = 10000;/);
  assert.match(html, /function startPlaylistAutoAdvance\(\)/);
  assert.match(html, /window\.setInterval\(advancePlaylistRandomly, playlistIntervalMs\)/);
});

test('manual preset changes restart the playlist timer instead of disabling it', () => {
  assert.match(html, /function restartPlaylistAutoAdvance\(\)/);
  assert.match(html, /function loadRandomPreset\(\)/);
  assert.match(html, /randomPreset\.addEventListener\("click", \(\) => \{[\s\S]*?loadRandomPreset\(\);[\s\S]*?restartPlaylistAutoAdvance\(\);[\s\S]*?\}\);/);
});

test('does not show keep or liked preset buttons', () => {
  assert.doesNotMatch(html, /id="likePresetButton"/);
  assert.doesNotMatch(html, /id="likedOnlyButton"/);
  assert.doesNotMatch(html, />Keep<|>Kept<|>Liked</);
});

test('excludes preset 002 from the selectable preset list', () => {
  assert.match(html, /excludedPresetNames/);
  assert.doesNotMatch(html, /"_Eo\.S\. - glowsticks v2 02 - Geiss HPF": 2/);
});
