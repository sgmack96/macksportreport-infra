export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Serve CSS
    if (url.pathname === "/style.css") {
      const css = await env.RETAIL_ASSETS.get("styles");
      return new Response(css, {
        headers: { "content-type": "text/css" },
      });
    }

    // 2. Serve HTML (Default)
    const html = await env.RETAIL_ASSETS.get("landing-page");
    return new Response(html, {
      headers: { "content-type": "text/html" },
    });
  },
};
