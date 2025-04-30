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
    
    // Add PDF export class for styling
    element.classList.add('pdf-export');
    
    // We need to dynamically import html2pdf because it's a client-side only library
    let html2pdf;
    try {
      // Use dynamic import with explicit error handling
      const html2pdfModule = await import('html2pdf.js');
      html2pdf = html2pdfModule.default;
      
      // If the default export isn't available, try to use the module itself
      if (typeof html2pdf !== 'function') {
        html2pdf = html2pdfModule;
      }
      
      // Final check if we have a valid function
      if (typeof html2pdf !== 'function') {
        throw new Error('html2pdf is not a function');
      }
    } catch (importError) {
      console.error('Error importing html2pdf.js:', importError);
      throw new Error('Failed to load PDF generation library');
    }
    
    // Configure html2pdf options
    const options = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        logging: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      }
    };
    
    // Generate and download the PDF
    await html2pdf().from(element).set(options).save();
    console.log('PDF generated successfully');
    
    // Remove the PDF export class after generation
    element.classList.remove('pdf-export');
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Make sure to remove the class even if there's an error
    const element = document.getElementById(elementId);
    element?.classList.remove('pdf-export');
    // Re-throw the error so it can be handled by the calling function
    throw error;
  }
};



