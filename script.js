// Define an array of color palettes
const colorPalettes = [
  { primary: "#FF8B8B", secondary: "#9C2525" },
  { primary: "#F9F7E8", secondary: "#62BFAD" },
  { primary: "#61BFAD", secondary: "#FFFFFF" },
  { primary: "#E54B4B", secondary: "#FFFFFF" },
  { primary: "#167C80", secondary: "#FFFFFF" },
  { primary: "#B7E3E4", secondary: "#F03F35" },
  { primary: "#EFE8D8", secondary: "#FF4552" },
  { primary: "#005397", secondary: "#FF8788" },
  { primary: "#32B67A", secondary: "#FFFFFF" },
  { primary: "#F3C9DD", secondary: "#72AEC5" },
  { primary: "#0BBCD6", secondary: "#E6625E" },
  { primary: "#BFB5D7", secondary: "#FFFFFF" },
  { primary: "#BEA1A5", secondary: "#000000" },
  { primary: "#F0CF61", secondary: "#EBE8E1" },
  { primary: "#0E38B1", secondary: "#FFFFFF" },
  { primary: "#A6CFE2", secondary: "#0B0C11" },
  { primary: "#371722", secondary: "#BBAB9B" },
  { primary: "#C7C6C4", secondary: "#008E8F" },
  { primary: "#283470", secondary: "#15A29C" },
  { primary: "#EF3E4A", secondary: "#FEDAC2" },
  { primary: "#C0C2CE", secondary: "#012F63" },
  { primary: "#EEC0DB", secondary: "#162BF4" },
  { primary: "#C5BEAA", secondary: "#28356A" },
  { primary: "#FDF06F", secondary: "#D31B33" },
  { primary: "#EDB5BD", secondary: "#000000" },
  { primary: "#17C37B", secondary: "#F4F4F4" },
  { primary: "#1B1D1C", secondary: "#EA1821" },
  { primary: "#E88565", secondary: "#181A27" },
  { primary: "#FFEFE5", secondary: "#1FC8A9" },
  { primary: "#F4C7EE", secondary: "#008FD3" },
  { primary: "#77EEDF", secondary: "#28292B" },
  { primary: "#E57066", secondary: "#28292B" },
  { primary: "#EED974", secondary: "#28292B" },
  { primary: "#FBFE56", secondary: "#0B64C0" },
  { primary: "#A7BBC3", secondary: "#FFFFFF" },
  { primary: "#3B465C", secondary: "#E9E8D4" },
  { primary: "#055A5B", secondary: "#E6E6E6" },
  { primary: "#9C9CDD", secondary: "#F9BDBD" },
  { primary: "#178E96", secondary: "#FFFFFF" },
  { primary: "#178E96", secondary: "#FDE3C8" },
  { primary: "#20AD65", secondary: "#FEC8BE" },
  { primary: "#112378", secondary: "#FBECCF" },
  { primary: "#E33946", secondary: "#FDEDB2" },
  { primary: "#FEDCCC", secondary: "#F87C4C" },
  { primary: "#FEDCCC", secondary: "#FFFFFF" },
  { primary: '#00B28B', secondary: '#FFFFFF' },
  { primary: '#00B28B', secondary: '#EDC3C7' },
  { primary: '#9357A9', secondary: '#FFFFFF' },
  { primary: '#9357A9', secondary: '#000000' },
  { primary: '#C6D7C7', secondary: '#FF5035' },
  { primary: '#12162D', secondary: '#8B743D' },
  { primary: '#776EA7', secondary: '#EBB9D4' },
  { primary: '#EF303B', secondary: '#481C19' },
  { primary: '#1812D6', secondary: '#FFFFFF' },
  { primary: '#FFFDE7', secondary: '#189BA3' },
  { primary: '#F1D3D3', secondary: '#1539CF' },
  { primary: '#7DE0E6', secondary: '#FF2A93' },
  { primary: '#3B755F', secondary: '#F2CB6C' },
  { primary: '#CE7182', secondary: '#FAEED4' },
  { primary: '#340B0B', secondary: '#9B8FFF' },
  { primary: '#F8EBEE', secondary: '#0C3934' },
  { primary: '#FF9966', secondary: '#8C5F31' },
  { primary: '#3333FF', secondary: '#CDFFCC' },
  { primary: '#75FFC0', secondary: '#7A30CF' },
  { primary: '#FB9B2A', secondary: '#0C00FF' },
  { primary: '#FF8FA4', secondary: '#E5E8DC' },
  { primary: '#000000', secondary: '#FF0000' },
  { primary: '#083EA7', secondary: '#1FDE91' },
  { primary: '#674B7C', secondary: '#E5E8DC' },
  { primary: '#19AAD1', secondary: '#FFCC4C' },
  { primary: '#B1FDEB', secondary: '#000000' },
  { primary: '#121738', secondary: '#D17C78' },
  { primary: '#0C485E', secondary: '#FEB904' },
  { primary: '#FFE6AD', secondary: '#FF4B24' },
  { primary: '#FFE6AD', secondary: '#9A008A' },
  { primary: '#022EAC', secondary: '#13E19B' },
  { primary: '#022EAC', secondary: '#FBA30C' },
  { primary: '#F94627', secondary: '#9A008A' },
  { primary: '#9AB79A', secondary: '#094436' },
  { primary: '#9AB79A', secondary: '#FDFF50' },
  { primary: '#424E22', secondary: '#FFAD67' },
  { primary: '#C73E99', secondary: '#F8DA1B' },
  { primary: '#5C457B', secondary: '#FFFFFF' },
  { primary: '#FF6090', secondary: '#81072C' },
  { primary: '#FF6090', secondary: '#FEEA0D' },
  { primary: '#0D4CBE', secondary: '#CFCEC7' },
  { primary: '#501718', secondary: '#FD750A' },
  { primary: '#E7E7E7', secondary: '#766C08' },
  { primary: '#8AA9C6', secondary: '#093929' },
  { primary: '#B3E0E0', secondary: '#000000' },
  { primary: '#B3E0E0', secondary: '#FFFFFF' },
  { primary: '#343B3F', secondary: '#FF89B5' },
  { primary: '#343B3F', secondary: '#D1BDFF' },
  { primary: '#CDB670', secondary: '#FFFFFF' },
  { primary: '#CDB670', secondary: '#000000' },
  { primary: '#F8DA1B', secondary: '#7B76A6' },
  { primary: '#F83439', secondary: '#321913' },
  { primary: '#EEE9DC', secondary: '#E2818A' },
  { primary: '#E2A9C9', secondary: '#FC411E' },
  { primary: '#0A005A', secondary: '#F0F0F0' },
  { primary: '#CDCDD0', secondary: '#F74A1F' },
  { primary: '#F7F7F7', secondary: '#26CB4D' },
  { primary: '#2D1C46', secondary: '#B6D5F4' },
  { primary: '#2D1C46', secondary: '#EC2326' },
  { primary: '#053161', secondary: '#FF6A34' },
  { primary: '#053161', secondary: '#BED9DA' },
  { primary: '#FDB90B', secondary: '#FB5408' },
  { primary: '#FDB90B', secondary: '#321913' },
  { primary: '#837663', secondary: '#FFD3C2' },
  { primary: '#B2B2B2', secondary: '#E9FF27' },
  { primary: '#91A8CF', secondary: '#3E4668' },
  { primary: '#F2F2F2', secondary: '#0B64FE' },
  { primary: '#F2DDBC', secondary: '#FF67B9' },
  { primary: '#F2DDBC', secondary: '#FAAD58' },
  { primary: '#FF8B8B', secondary: '#9C2525' },
  { primary: '#3B5998', secondary: '#49BFB3' },
  { primary: '#033F7D', secondary: '#00A273' },
  { primary: '#FF4f81', secondary: '#FFC168' },
  { primary: '#008374', secondary: '#333333' },
  { primary: '#444444', secondary: '#4DC47D' }
];

// Create a function to generate the color palette HTML
function generatePaletteHTML(palette) {
  return `
        <div class="palette" style="background-color: ${palette.primary}; color: ${palette.secondary};">
      <div><strong>Primary:</strong> ${palette.primary}</div>
      <div><strong>Secondary:</strong> ${palette.secondary}</div>
      <div class="hex-values-line">
        <div class="hex-color primary-color" style="background-color: ${palette.primary};"></div>
        <div class="hex-color secondary-color" style="background-color: ${palette.secondary};"></div>
      </div>
    </div>
      `;
}

// Add click event listeners to hex color elements
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("hex-color")) {
    const backgroundColor = event.target.style.backgroundColor;
    const hexValue = rgbToHex(backgroundColor);
    copyToClipboard(hexValue);
    showCopiedAlert(hexValue);
  }
});

// Function to convert RGB to hex
function rgbToHex(rgb) {
  const rgbValues = rgb.match(/\d+/g);
  const hexValues = rgbValues.map((value) =>
    parseInt(value).toString(16).padStart(2, "0")
  );
  return `#${hexValues.join("")}`;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

// Function to show copied alert
function showCopiedAlert(hexValue) {
  const alert = document.createElement("div");
  alert.classList.add("copied-alert");
  alert.textContent = `Copied: ${hexValue}`;
  document.body.appendChild(alert);
  setTimeout(() => {
    document.body.removeChild(alert);
  }, 2000); // Remove the alert after 2 seconds
}

// Get the container element
const container = document.getElementById("palettes-container");

// Generate the HTML for each color palette and append it to the container
colorPalettes.forEach((palette) => {
  const paletteHTML = generatePaletteHTML(palette);
  container.innerHTML += paletteHTML;
});
