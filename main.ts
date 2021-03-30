addEventListener("fetch", (event) => {
  const html = `<html>
    <head>
      <meta charset="UTF-8">
      <title>deno test</title>
    </head>
    <body>
      <h1>hello deno</h1>
    </body>
  </html>`;
  event.respondWith(
    new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    })
  );
});
