HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree
→ Layout
→ Paint
→ Composite → Screen


Overview of Critical Rendering Path Steps:
HTML Parsing → DOM Construction

CSS Parsing → CSSOM Construction

DOM + CSSOM → Render Tree Construction

Layout (Reflow)

Painting (Rasterization)

Compositing → Final Display


1. HTML Parsing → DOM Tree
The browser reads the HTML and creates a DOM (Document Object Model) — a tree structure representing all HTML elements.

2. CSS Parsing → CSSOM Tree
The browser parses all CSS (inline, <style>, or external <link>) into the CSSOM (CSS Object Model).

3. DOM + CSSOM → Render Tree
The browser combines the DOM + CSSOM to create the Render Tree — only the visible content with computed styles.

  4. Layout (Reflow)
The browser calculates exact positions and sizes of elements in the render tree, producing a box model layout.

5. Painting
The browser converts each visual part (color, text, borders, shadows) into pixels on layers — this is called painting.

6. Compositing
If there are multiple layers (e.g., for transforms or animations), the browser composites them together into the final image on screen.
