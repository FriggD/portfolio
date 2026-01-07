/**
 * PDF generation utilities for the resume
 */

// This function will be used to generate and download the resume as a PDF
export const generateResumePDF = async (elementId: string, filename: string) => {
  try {
    // Get the element to convert to PDF
    const element = document.getElementById(elementId);
    
    if (!element) {
      console.error(`Element with ID ${elementId} not found`);
      throw new Error(`Element with ID ${elementId} not found`);
    }
    
    // Store original styles
    const originalStyles = {
      backgroundColor: element.style.backgroundColor,
      color: element.style.color,
      padding: element.style.padding,
      margin: element.style.margin,
      borderRadius: element.style.borderRadius,
      border: element.style.border,
      boxShadow: element.style.boxShadow
    };
    
    // Apply PDF-friendly styles directly
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
    element.style.padding = '20px';
    element.style.margin = '0';
    element.style.borderRadius = '0';
    element.style.border = 'none';
    element.style.boxShadow = 'none';
    
    // Add PDF export class for styling
    element.classList.add('pdf-export');
    
    // Hide header section for PDF
    const header = document.querySelector('header');
    const originalHeaderDisplay = header?.style.display;
    if (header) {
      header.style.display = 'none';
    }
    
    // We need to dynamically import html2pdf because it's a client-side only library
    let html2pdf;
    try {
      const html2pdfModule = await import('html2pdf.js');
      html2pdf = html2pdfModule.default;
      
      if (typeof html2pdf !== 'function') {
        html2pdf = html2pdfModule;
      }
      
      if (typeof html2pdf !== 'function') {
        throw new Error('html2pdf is not a function');
      }
    } catch (importError) {
      console.error('Error importing html2pdf.js:', importError);
      throw new Error('Failed to load PDF generation library');
    }
    
    // Configure html2pdf options for better PDF output
    const options = {
      margin: [10, 10, 10, 10],
      filename: filename,
      image: { 
        type: 'jpeg', 
        quality: 0.95
      },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        width: 794, // A4 width in pixels at 96 DPI
        height: 1123, // A4 height in pixels at 96 DPI
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794,
        windowHeight: 1123
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        precision: 2
      },
      pagebreak: {
        mode: ['avoid-all', 'css'],
        avoid: '.page-break-inside-avoid'
      }
    };
    
    // Add a delay to ensure styles are applied
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Generate and download the PDF
    await html2pdf().from(element).set(options).save();
    console.log('PDF generated successfully');
    
    // Restore original styles
    Object.keys(originalStyles).forEach(key => {
      element.style[key as any] = originalStyles[key as keyof typeof originalStyles] || '';
    });
    
    // Restore header display
    if (header) {
      header.style.display = originalHeaderDisplay || '';
    }
    
    // Remove the PDF export class after generation
    element.classList.remove('pdf-export');
  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Cleanup on error
    const header = document.querySelector('header');
    if (header) {
      header.style.display = '';
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.remove('pdf-export');
      // Reset styles on error
      element.style.backgroundColor = '';
      element.style.color = '';
      element.style.padding = '';
      element.style.margin = '';
      element.style.borderRadius = '';
      element.style.border = '';
      element.style.boxShadow = '';
    }
    
    throw error;
  }
};



