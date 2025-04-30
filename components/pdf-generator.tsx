'use client';

import React, { useState } from 'react';
import { generateResumePDF } from '@/lib/pdf-utils';

interface PdfGeneratorProps {
  elementId: string;
  filename: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  children: React.ReactNode;
}

/**
 * Client-side wrapper component for PDF generation
 * This ensures html2pdf.js is only imported on the client side
 */
export default function PdfGenerator({
  elementId,
  filename,
  onSuccess,
  onError,
  children
}: PdfGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePdf = async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    try {
      await generateResumePDF(elementId, filename);
      onSuccess?.();
    } catch (error) {
      console.error('PDF generation error:', error);
      if (error instanceof Error) {
        onError?.(error);
      } else {
        onError?.(new Error('Unknown error during PDF generation'));
      }
    } finally {
      setIsGenerating(false);
    }
  };

  // Clone the child element and add the onClick handler
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          onClick: handleGeneratePdf,
          disabled: isGenerating || child.props.disabled,
        });
      })}
    </>
  );
}
