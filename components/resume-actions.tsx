'use client';

import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import PdfGenerator from './pdf-generator';

export default function ResumeActions() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handlePdfSuccess = () => {
    toast({
      title: "Success!",
      description: "Your resume PDF has been generated and downloaded.",
      variant: "default",
    });
  };

  const handlePdfError = (error: Error) => {
    toast({
      title: "Error",
      description: `PDF generation failed: ${error.message}`,
      variant: "destructive",
    });
  };

  const handleBeforeGenerate = () => {
    setIsGenerating(true);
    toast({
      title: "Generating PDF",
      description: "Please wait while we generate your resume PDF...",
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <PdfGenerator 
        elementId="resume-content" 
        filename="glaucia-dias-resume.pdf"
        onSuccess={handlePdfSuccess}
        onError={handlePdfError}
      >
        <button 
          onClick={handleBeforeGenerate}
          disabled={isGenerating}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-white font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          aria-label="Download resume as PDF"
        >
          {isGenerating ? (
            <>
              <svg 
                className="animate-spin" 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </>
          )}
        </button>
      </PdfGenerator>
      <button 
        onClick={handlePrint}
        className="px-6 py-3 rounded-full border border-zinc-700 text-white font-medium inline-flex items-center gap-2 hover:bg-zinc-900 transition-colors"
        aria-label="Print resume"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Print Resume
      </button>
    </div>
  );
}




