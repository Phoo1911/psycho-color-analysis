'use client';

import { useState } from 'react';
import usePsychoColorAnalysis from '@/hooks/usePsychoColorAnalysis';
import ColorRanking from '@/components/ColorRanking';
import ContextualPreferences from '@/components/ContextualPreferences';
import ColorEmotionAssociations from '@/components/ColorEmotionAssociations';
import ResultsSection from '@/components/ResultsSection';
import EnhancedInsights from '@/components/EnhancedInsights';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const { isLoading, analysisResults, enhancedResults, error, analyzeColorPreferences } = usePsychoColorAnalysis();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const colorRanking = Array.from(document.querySelectorAll('#colorRanking li'))
      .map(item => item.getAttribute('data-color'));
    
    const data = {
      color_ranking: colorRanking,
      primary_color: colorRanking[0],
      secondary_color: colorRanking[1],
      work_color: formData.get('workColor'),
      relaxation_color: formData.get('relaxationColor'),
      social_color: formData.get('socialColor'),
      creative_color: formData.get('creativeColor'),
      stress_color: formData.get('stressColor')
    };
    
    const results = await analyzeColorPreferences(data);
    if (results) {
      setShowResults(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('resultsSection');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleStartOver = () => {
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        
        {!showResults ? (
          <div className="card mb-5">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">Color Preference Assessment</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <ColorRanking />
                <ContextualPreferences />
                <ColorEmotionAssociations />
                
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Analyzing...
                      </>
                    ) : (
                      'Analyze My Color Preferences'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <>
            <ResultsSection 
              results={analysisResults} 
              onStartOver={handleStartOver} 
            />
            {enhancedResults && (
              <EnhancedInsights 
                enhancedResults={enhancedResults}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
