/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ResumeActions from '@/components/resume-actions';
import { generateResumePDF } from '@/lib/pdf-utils';
import { toast } from '@/components/ui/use-toast';

// Mock the PDF generation function
jest.mock('@/lib/pdf-utils', () => ({
  generateResumePDF: jest.fn(),
}));

// Mock the toast function
jest.mock('@/components/ui/use-toast', () => ({
  toast: jest.fn(),
}));

// Mock the PdfGenerator component
jest.mock('@/components/pdf-generator', () => ({
  __esModule: true,
  default: ({ children, elementId, filename, onSuccess, onError }) => {
    // Create a wrapper that simulates the PdfGenerator behavior
    const handleClick = async () => {
      try {
        await generateResumePDF(elementId, filename);
        if (onSuccess) onSuccess();
      } catch (error) {
        if (onError && error instanceof Error) onError(error);
      }
    };
    
    // Clone the child and add the onClick handler
    return React.cloneElement(React.Children.only(children), {
      onClick: (e) => {
        // Call the original onClick if it exists
        if (children.props.onClick) children.props.onClick(e);
        // Then call our handler
        handleClick();
      }
    });
  }
}));

describe('ResumeActions Component', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Setup DOM for testing
    document.body.innerHTML = `
      <div id="resume-content">
        <h1>Resume Content</h1>
      </div>
    `;

    // Mock successful PDF generation by default
    (generateResumePDF as jest.Mock).mockResolvedValue(undefined);
  });

  it('renders the download and print buttons', () => {
    render(<ResumeActions />);
    
    expect(screen.getByText('Download PDF')).toBeInTheDocument();
    expect(screen.getByText('Print Resume')).toBeInTheDocument();
  });

  it('calls window.print when print button is clicked', () => {
    // Mock window.print
    window.print = jest.fn();
    
    render(<ResumeActions />);
    
    const printButton = screen.getByText('Print Resume');
    fireEvent.click(printButton);
    
    expect(window.print).toHaveBeenCalled();
  });

  it('calls generateResumePDF when download button is clicked', async () => {
    render(<ResumeActions />);
    
    const downloadButton = screen.getByText('Download PDF');
    fireEvent.click(downloadButton);
    
    // Button should show loading state
    expect(screen.getByText('Generating...')).toBeInTheDocument();
    
    // Wait for the PDF generation to complete
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalledWith('resume-content', 'glaucia-dias-resume.pdf');
    });
    
    // Check if success toast was shown
    expect(toast).toHaveBeenCalledWith(expect.objectContaining({
      title: "Success!",
      description: "Your resume PDF has been generated and downloaded.",
      variant: "default",
    }));
  });

  it('handles errors during PDF generation', async () => {
    // Mock the PDF generation to throw an error
    const errorMessage = 'PDF generation failed';
    (generateResumePDF as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    
    render(<ResumeActions />);
    
    const downloadButton = screen.getByText('Download PDF');
    fireEvent.click(downloadButton);
    
    // Wait for the error to be handled
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalled();
    });
    
    // Check if error toast was shown with the correct error message
    expect(toast).toHaveBeenCalledWith(expect.objectContaining({
      title: "Error",
      description: `PDF generation failed: ${errorMessage}`,
      variant: "destructive",
    }));
  });

  it('prevents multiple clicks while generating', async () => {
    // Mock a slow PDF generation
    (generateResumePDF as jest.Mock).mockImplementation(() => {
      return new Promise(resolve => setTimeout(resolve, 100));
    });
    
    render(<ResumeActions />);
    
    const downloadButton = screen.getByText('Download PDF');
    
    // Click multiple times
    fireEvent.click(downloadButton);
    fireEvent.click(downloadButton);
    fireEvent.click(downloadButton);
    
    // Wait for the PDF generation to complete
    await waitFor(() => {
      expect(generateResumePDF).toHaveBeenCalledTimes(1);
    });
  });
});


