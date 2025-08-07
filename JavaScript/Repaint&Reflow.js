Repaint and reflow are both browser rendering processes, but they differ in scope and impact. 
Reflow (or layout) recalculates the position and geometry of elements, potentially affecting the entire page, 
while repaint redraws the visual appearance of elements without affecting layout. Reflow is generally more expensive 
than repaint due to the layout calculations involved. 



  # Reflow (or Layout):
What it is:
Reflow is the process where the browser recalculates the geometry (size and position) of elements on a webpage. 
Adding or removing elements from the DOM. 
Changing the size or position of an element (e.g., width, height, margin, padding, border). 
Modifying font sizes or text content. 
Resizing the browser window. 


REPAINT:
  What it is:
=> Repaint is the process of updating the visual appearance of an element without changing its layout. 
Q When it happens:
  Repaint is triggered by changes that affect the visual properties of elements, such as:
  Changing background color, text color, or border color. 
  Applying or removing shadows. 
  Changing visibility. 
  


  
