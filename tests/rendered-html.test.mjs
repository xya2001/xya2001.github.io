import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function renderedHtml() {
  return readFile(new URL("../out/index.html", import.meta.url), "utf8");
}

test("statically renders Yang Xiang's portfolio", async () => {
  const html = await renderedHtml();
  assert.match(html, /<title>Yang Xiang \| UNC Chapel Hill<\/title>/i);
  assert.match(html, /University of North Carolina at Chapel Hill/);
  assert.match(html, /Tsinghua University/);
  assert.match(html, /Machine Learning Engineer Intern/);
  assert.match(html, /Teaching Assistant/);
  assert.match(html, /STOR 305/);
  assert.match(html, /graph and network alignment/i);
  assert.match(html, /brain connectivity registration/i);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview|_sites-preview/);
});

test("links exactly four concise publication entries to arXiv", async () => {
  const html = await renderedHtml();
  const arxivLinks =
    html.match(/href="https:\/\/arxiv\.org\/abs\/[0-9.]+"/g) ?? [];

  assert.deepEqual(arxivLinks, [
    'href="https://arxiv.org/abs/2503.15830"',
    'href="https://arxiv.org/abs/2511.14862"',
    'href="https://arxiv.org/abs/2605.16742"',
    'href="https://arxiv.org/abs/2603.02563"',
  ]);
  assert.doesNotMatch(
    html,
    /Estimated incremental return|Trained ESMM|Analyzed a production/,
  );
});
