/**
 * @jest-environment jsdom
 */

import { generateResumePDF } from '@/lib/pdf-utils';

// Mock html2pdf
jest.mock('html2pdf.js', () => {
  return {
    __esModule: true,
    default: () => ({
      from: jest.fn().mockReturnThis(),
      set: jest.fn().mockReturnThis(),
      save: jest.fn().mockResolvedValue(undefined),
    }),
  };
});

describe('PDF Utils', () => {
  beforeEach(() => {
    // Setup DOM elements for testing
    document.body.innerHTML = `
      <div id="resume-content">
        <h1>Resume Content</h1>
        <p>Test content</p>
      </div>
    `;
    
    // Clear mocks
    jest.clearAllMocks();
    
    // Mock console methods
    console.error = jest.fn();
    console.log = jest.fn();
  });

  it('should generate a PDF from the resume content', async () => {
    // Call the function
    await generateResumePDF('resume-content', 'test-resume.pdf');
    
    // Check if the PDF export class was added and then removed
    const element = document.getElementById('resume-content');
    expect(element?.classList.contains('pdf-export')).toBe(false);
    
    // Check if the success message was logged
    expect(console.log).toHaveBeenCalledWith('PDF generated successfully');
  });

  it('should throw an error when element is not found', async () => {
    // Call the function with a non-existent element ID
    await expect(generateResumePDF('non-existent-element', 'test-resume.pdf'))
      .rejects
      .toThrow('Element with ID non-existent-element not found');
    
    // Check if the error was logged
    expect(console.error).toHaveBeenCalledWith('Element with ID non-existent-element not found');
  });

  it('should handle errors during PDF generation', async () => {
    // Mock html2pdf to throw an error
    const html2pdfMock = require('html2pdf.js').default;
    html2pdfMock().save.mockImplementation(() => {
      throw new Error('PDF generation failed');
    });
    
    // Call the function and expect it to throw
    await expect(generateResumePDF('resume-content', 'test-resume.pdf'))
      .rejects
      .toThrow('PDF generation failed');
    
    // Check if the error was logged
    expect(console.error).toHaveBeenCalledWith('Error generating PDF:', expect.any(Error));
    
    // Check if the PDF export class was removed even after an error
    const element = document.getElementById('resume-content');
    expect(element?.classList.contains('pdf-export')).toBe(false);
  });

  it('should handle errors during html2pdf import', async () => {
    // Mock a failed import
    jest.mock('html2pdf.js', () => {
      throw new Error('Failed to load module');
    }, { virtual: true });
    
    // We need to reset the module cache to use our new mock
    jest.resetModules();
    
    // Import the function again with the new mock
    const { generateResumePDF } = require('@/lib/pdf-utils');
    
    // Call the function and expect it to throw
    await expect(generateResumePDF('resume-content', 'test-resume.pdf'))
      .rejects
      .toThrow();
    
    // Check if the PDF export class was removed even after an error
    const element = document.getElementById('resume-content');
    expect(element?.classList.contains('pdf-export')).toBe(false);
  });
});
