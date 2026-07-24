import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Yang Xiang's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
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
  const response = await render();
  const html = await response.text();
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
