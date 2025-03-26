'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function usePsychoColorAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [enhancedResults, setEnhancedResults] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const analyzeColorPreferences = async (colorData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Call the analyze API endpoint
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(colorData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze color preferences');
      }
      
      const results = await response.json();
      setAnalysisResults(results);
      
      // Now enhance the results with LLM
      await enhanceAnalysis(results);
      
      return results;
    } catch (err) {
      setError(err.message);
      console.error('Error analyzing color preferences:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  const enhanceAnalysis = async (results) => {
    try {
      // Call the enhance API endpoint
      const response = await fetch('/api/enhance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ analysis_results: results }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to enhance analysis with LLM');
      }
      
      const enhanced = await response.json();
      setEnhancedResults(enhanced);
      
      return enhanced;
    } catch (err) {
      console.error('Error enhancing analysis:', err);
      return null;
    }
  };
  
  return {
    isLoading,
    analysisResults,
    enhancedResults,
    error,
    analyzeColorPreferences,
  };
}
