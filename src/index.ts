import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS
app.use('*', cors());

// Main route - serve the HTML
app.get('/', async (c) => {
  const html = await c.env.ASSETS.fetch(new URL('/index.html', c.req.url));
  return new Response(html.body, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
});

// Serve static assets
app.get('/assets/*', async (c) => {
  const url = new URL(c.req.url);
  const assetUrl = new URL(url.pathname, c.req.url);
  const response = await c.env.ASSETS.fetch(assetUrl);
  return response;
});

app.get('/_next/static/*', async (c) => {
  const url = new URL(c.req.url);
  const assetUrl = new URL(url.pathname, c.req.url);
  const response = await c.env.ASSETS.fetch(assetUrl);
  return response;
});

// Catch-all route for client-side routing
app.get('*', async (c) => {
  const html = await c.env.ASSETS.fetch(new URL('/index.html', c.req.url));
  return new Response(html.body, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
});

export default app;
