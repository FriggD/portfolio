/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PdfGenerator from '@/components/pdf-generator';
import { generateResumePDF } from '@/lib/pdf-utils';

// Mock the PDF generation function
jest.mock('@/lib/pdf-utils', () => ({
  generateResumePDF: jest.fn(),
}));

describe('PdfGenerator Component', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Setup DOM for testing
    document.body.innerHTML = `
      <div id="test-content">
        <h1>Test Content</h1>
      </div>
    `;

    // Mock successful PDF generation by default
    (generateResumePDF as jest.Mock).mockResolvedValue(undefined);
  });

  it('renders the child component correctly', () => {
    render(
      <PdfGenerator elementId="test-content" filename="test.pdf">
        <button>Test Button</button>
      </PdfGenerator>
    );
    
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls generateResumePDF when child is clicked', async () => {
    const onSuccess = jest.fn();
    
    render(
      <PdfGenerator 
        elementId="test-content" 
        filename="test.pdf"
        onSuccess={onSuccess}
      >
        <button>Generate PDF</button>
      </PdfGenerator>
    );
    
    const button = screen.getByText('Generate PDF');
    fireEvent.click(button);
    
    // Wait for the PDF generation to complete
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalledWith('test-content', 'test.pdf');
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  it('handles errors during PDF generation', async () => {
    // Mock the PDF generation to throw an error
    const errorMessage = 'PDF generation failed';
    (generateResumePDF as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    
    const onError = jest.fn();
    
    render(
      <PdfGenerator 
        elementId="test-content" 
        filename="test.pdf"
        onError={onError}
      >
        <button>Generate PDF</button>
      </PdfGenerator>
    );
    
    const button = screen.getByText('Generate PDF');
    fireEvent.click(button);
    
    // Wait for the error to be handled
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalled();
      expect(onError).toHaveBeenCalledWith(expect.any(Error));
      expect(onError).toHaveBeenCalledWith(expect.objectContaining({
        message: errorMessage
      }));
    });
  });

  it('prevents multiple clicks while generating', async () => {
    // Mock a slow PDF generation
    (generateResumePDF as jest.Mock).mockImplementation(() => {
      return new Promise(resolve => setTimeout(resolve, 100));
    });
    
    render(
      <PdfGenerator elementId="test-content" filename="test.pdf">
        <button>Generate PDF</button>
      </PdfGenerator>
    );
    
    const button = screen.getByText('Generate PDF');
    
    // Click multiple times
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    // Wait for the PDF generation to complete
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalledTimes(1);
    });
  });

  it('passes disabled prop to child when generating', async () => {
    // Mock a slow PDF generation
    (generateResumePDF as jest.Mock).mockImplementation(() => {
      return new Promise(resolve => setTimeout(resolve, 100));
    });
    
    render(
      <PdfGenerator elementId="test-content" filename="test.pdf">
        <button data-testid="pdf-button">Generate PDF</button>
      </PdfGenerator>
    );
    
    const button = screen.getByTestId('pdf-button');
    
    // Button should not be disabled initially
    expect(button).not.toHaveAttribute('disabled');
    
    // Click the button
    fireEvent.click(button);
    
    // Button should be disabled while generating
    expect(button).toHaveAttribute('disabled');
    
    // Wait for the PDF generation to complete
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalled();
    });
    
    // Button should not be disabled after generation completes
    expect(button).not.toHaveAttribute('disabled');
  });
});