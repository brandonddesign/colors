// Define an array of color palettes
    const colorPalettes = [
      { primary: '#FF8B8B', secondary: '#9C2525' },
      { primary: '#F9F7E8', secondary: '#62BFAD' },
      { primary: '#61BFAD', secondary: '#FFFFFF' },
      { primary: '#E54B4B', secondary: '#FFFFFF' },
      { primary: '#167C80', secondary: '#FFFFFF' },
      { primary: '#B7E3E4', secondary: '#F03F35' }
    ];

    // Create a function to generate the color palette HTML
    function generatePaletteHTML(palette) {
      return `
        <div class="palette" style="background-color: ${palette.primary}; color: ${palette.secondary};">
          <div>Primary: ${palette.primary}</div>
          <div>Secondary: ${palette.secondary}</div>
        </div>
      `;
    }

    // Get the container element
    const container = document.getElementById('palettes-container');

    // Generate the HTML for each color palette and append it to the container
    colorPalettes.forEach(palette => {
      const paletteHTML = generatePaletteHTML(palette);
      container.innerHTML += paletteHTML;
    });