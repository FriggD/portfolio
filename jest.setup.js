// Import Jest DOM extensions
import '@testing-library/jest-dom';

// Mock the window.print function
Object.defineProperty(window, 'print', {
  value: jest.fn(),
  writable: true
});

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