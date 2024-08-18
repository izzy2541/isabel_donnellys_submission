// Function to generate horizontal lines for a 5x5 grid
function generateHorizontalLines(startX, endX, startY, endY, spacing) {
    let lines = '';
    for (let y = startY; y <= endY; y += spacing) {
      lines += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" class="horizontal-line"/>`;
    }
    return lines;
  }
  
  // Function to generate vertical lines for a 5x5 grid
  function generateVerticalLines(startX, endX, startY, endY, spacing) {
    let lines = '';
    for (let x = startX; x <= endX; x += spacing) {
      lines += `<line x1="${x}" y1="${startY}" x2="${x}" y2="${endY}" class="vertical-line"/>`;
    }
    return lines;
  }
  
  // Update SVG preview
  function updatePreview() {
    const gridSpacing = 120; // Adjust spacing for 5x5 grid
    const horizontalLines = generateHorizontalLines(0, 600, 0, 600, gridSpacing);
    const verticalLines = generateVerticalLines(0, 600, 0, 600, gridSpacing);
    const svgContainer = document.querySelector('#grid_lines');
  
    svgContainer.innerHTML = `
        <!-- Horizontal lines -->
        ${horizontalLines}
    
        <!-- Vertical lines -->
        ${verticalLines}
      `;
  
  }
  
  // Call the updatePreview function initially
  updatePreview();