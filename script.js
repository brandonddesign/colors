// Define an array of color palettes
    const colorPalettes = [
      { primary: '#FF8B8B', secondary: '#9C2525' },
      { primary: '#F9F7E8', secondary: '#62BFAD' },
      { primary: '#61BFAD', secondary: '#FFFFFF' },
      { primary: '#E54B4B', secondary: '#FFFFFF' },
      { primary: '#167C80', secondary: '#FFFFFF' },
      { primary: '#B7E3E4', secondary: '#F03F35' },
      { primary: '#EFE8D8', secondary: '#FF4552' },
      { primary: '#005397', secondary: '#FF8788' },
      { primary: '#32B67A', secondary: '#FFFFFF' },
      { primary: '#F3C9DD', secondary: '#72AEC5' },
      { primary: '#0BBCD6', secondary: '#E6625E' },
      { primary: '#BFB5D7', secondary: '#FFFFFF' },
      { primary: '#BEA1A5', secondary: '#000000' },
      { primary: '#F0CF61', secondary: '#EBE8E1' },
      { primary: '#0E38B1', secondary: '#FFFFFF' },
      { primary: '#A6CFE2', secondary: '#0B0C11' },
      { primary: '#371722', secondary: '#BBAB9B' },
      { primary: '#C7C6C4', secondary: '#008E8F' },
      { primary: '#283470', secondary: '#15A29C' },
      { primary: '#EF3E4A', secondary: '#FEDAC2' },
      { primary: '#C0C2CE', secondary: '#012F63' },
      { primary: '#EEC0DB', secondary: '#162BF4' },
      { primary: '#C5BEAA', secondary: '#28356A' },
      { primary: '#FDF06F', secondary: '#D31B33' },
      { primary: '#EDB5BD', secondary: '#000000' },  
      { primary: '#17C37B', secondary: '#F4F4F4' },
      { primary: '#1B1D1C', secondary: '#EA1821' },
      { primary: '#E88565', secondary: '#181A27' },
      { primary: '#FFEFE5', secondary: '#1FC8A9' },
      { primary: '#F4C7EE', secondary: '#008FD3' },
      { primary: '#77EEDF', secondary: '#28292B' },  
      { primary: '#E57066', secondary: '#28292B' },
      { primary: '#EED974', secondary: '#28292B' },
      { primary: '#FBFE56', secondary: '#0B64C0' },
      { primary: '#A7BBC3', secondary: '#FFFFFF' },
      { primary: '#3B465C', secondary: '#E9E8D4' },
      { primary: '#055A5B', secondary: '#E6E6E6' },
      { primary: '#9C9CDD', secondary: '#F9BDBD' },
      { primary: '#178E96', secondary: '#FFFFFF' },
      { primary: '#178E96', secondary: '#FDE3C8' },
      { primary: '#20AD65', secondary: '#FEC8BE' },
      { primary: '#112378', secondary: '#FBECCF' },
      { primary: '#E33946', secondary: '#FDEDB2' },
      { primary: '#FEDCCC', secondary: '#F87C4C' },
      { primary: '#FEDCCC', secondary: '#FFFFFF' }  
    ];

    // Create a function to generate the color palette HTML
    function generatePaletteHTML(palette) {
      return `
        <div class="palette" style="background-color: ${palette.primary}; color: ${palette.secondary};">
          <div><strong>Primary:</strong> ${palette.primary}</div>
          <div><strong>Secondary:</strong> ${palette.secondary}</div>
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
