'use client';

import React from 'react';

interface EnhancedInsightsProps {
  enhancedResults: any;
}

export default function EnhancedInsights({ enhancedResults }: EnhancedInsightsProps) {
  if (!enhancedResults) return null;
  
  return (
    <div className="section-card fade-in mb-5">
      <div className="section-header" style={{ backgroundColor: '#8e44ad' }}>
        <h3 className="h5 mb-0">Enhanced Psychological Insights</h3>
      </div>
      <div className="section-body">
        <div className="mb-4">
          <h4 className="h6">Personalized Color Energy Insights</h4>
          <p>{enhancedResults.enhanced_insights}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="h6">Relationship Dynamics</h4>
          <p>{enhancedResults.relationship_dynamics}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="h6">Career Insights</h4>
          <p>{enhancedResults.career_insights}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="h6">Personal Growth Path</h4>
          <p>{enhancedResults.personal_growth_path}</p>
        </div>
      </div>
    </div>
  );
}
