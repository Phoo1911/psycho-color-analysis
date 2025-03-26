'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale
);

interface ResultsSectionProps {
  results: any;
  onStartOver: () => void;
}

export default function ResultsSection({ results, onStartOver }: ResultsSectionProps) {
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!results) return null;
  
  const energyData = {
    labels: Object.keys(results.jung_color_energies.energy_distribution),
    datasets: [{
      data: Object.values(results.jung_color_energies.energy_distribution),
      backgroundColor: [
        '#3498db', // Cool Blue
        '#2ecc71', // Earth Green
        '#f1c40f', // Sunshine Yellow
        '#e74c3c'  // Fiery Red
      ],
      borderWidth: 1
    }]
  };
  
  const dimensionData = {
    labels: [
      'Introversion / Extraversion',
      'Thinking / Feeling',
      'Stability / Adaptability',
      'Task / People',
      'Analytical / Creative'
    ],
    datasets: [{
      label: 'Your Personality Dimensions',
      data: [
        results.dimension_scores.introversion_extraversion,
        results.dimension_scores.thinking_feeling,
        results.dimension_scores.stability_adaptability,
        results.dimension_scores.task_people,
        results.dimension_scores.analytical_creative
      ],
      backgroundColor: 'rgba(155, 89, 182, 0.2)',
      borderColor: 'rgba(155, 89, 182, 1)',
      pointBackgroundColor: 'rgba(155, 89, 182, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(155, 89, 182, 1)'
    }]
  };
  
  const dimensionOptions = {
    scales: {
      r: {
        min: -100,
        max: 100,
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false
  };
  
  return (
    <div id="resultsSection" className="fade-in mb-5">
      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          <h2 className="h4 mb-0">Your Color Psychology Analysis</h2>
        </div>
        <div className="card-body">
          <p className="lead">{results.personality_overview}</p>
          
          <div className="text-center mb-4">
            <button className="btn btn-outline-primary me-2" onClick={onStartOver}>
              Start Over
            </button>
            <button className="btn btn-outline-success" id="downloadReportBtn">
              Download Report
            </button>
          </div>
        </div>
      </div>
      
      {/* Tabbed Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} 
            onClick={() => setActiveTab('overview')}
          >
            Color Energies
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'dimensions' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dimensions')}
          >
            Personality Dimensions
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'emotional' ? 'active' : ''}`} 
            onClick={() => setActiveTab('emotional')}
          >
            Emotional Landscape
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'recommendations' ? 'active' : ''}`} 
            onClick={() => setActiveTab('recommendations')}
          >
            Recommendations
          </button>
        </li>
      </ul>
      
      {/* Tab Content */}
      <div className="tab-content">
        {/* Jung's Color Energies Tab */}
        <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`}>
          <div className="section-card">
            <div className="section-header jung-header">
              <h3 className="h5 mb-0">Jung's Color Energies</h3>
            </div>
            <div className="section-body">
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Primary Energy:</strong></p>
                  <div className={`energy-badge ${results.jung_color_energies.primary_energy.toLowerCase().replace(' ', '-')}`}>
                    {results.jung_color_energies.primary_energy}
                  </div>
                  
                  <p className="mt-3"><strong>Secondary Energy:</strong></p>
                  <div className={`energy-badge ${results.jung_color_energies.secondary_energy.toLowerCase().replace(' ', '-')}`}>
                    {results.jung_color_energies.secondary_energy}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="h6">What This Means:</h4>
                    <p>
                      Your primary energy of <strong>{results.jung_color_energies.primary_energy}</strong> shapes your core approach to life, while your secondary energy of <strong>{results.jung_color_energies.secondary_energy}</strong> influences how you adapt to different situations.
                    </p>
                    <p>
                      This combination creates a unique psychological profile that influences your decision-making, communication style, and how you interact with the world around you.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ height: '300px' }}>
                    <Doughnut data={energyData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personality Dimensions Tab */}
        <div className={`tab-pane fade ${activeTab === 'dimensions' ? 'show active' : ''}`}>
          <div className="section-card">
            <div className="section-header personality-header">
              <h3 className="h5 mb-0">Personality Dimensions</h3>
            </div>
            <div className="section-body">
              <div className="dimension-chart-container">
                <Radar data={dimensionData} options={dimensionOptions} />
              </div>
              
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="card mb-3">
                    <div className="card-header">
                      <strong>Introversion / Extraversion:</strong> 
                      {results.dimension_scores.introversion_extraversion < 0 ? 'Introverted' : 'Extraverted'}
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div 
                          className={`progress-bar ${results.dimension_scores.introversion_extraversion < 0 ? 'bg-info' : 'bg-warning'}`} 
                          role="progressbar" 
                          style={{ width: `${Math.abs(results.dimension_scores.introversion_extraversion)}%` }}
                          aria-valuenow={Math.abs(results.dimension_scores.introversion_extraversion)} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card mb-3">
                    <div className="card-header">
                      <strong>Thinking / Feeling:</strong> 
                      {results.dimension_scores.thinking_feeling < 0 ? 'Thinking-oriented' : 'Feeling-oriented'}
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div 
                          className={`progress-bar ${results.dimension_scores.thinking_feeling < 0 ? 'bg-info' : 'bg-warning'}`} 
                          role="progressbar" 
                          style={{ width: `${Math.abs(results.dimension_scores.thinking_feeling)}%` }}
                          aria-valuenow={Math.abs(results.dimension_scores.thinking_feeling)} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card mb-3">
                    <div className="card-header">
                      <strong>Stability / Adaptability:</strong> 
                      {results.dimension_scores.stability_adaptability < 0 ? 'Stability-focused' : 'Adaptability-focused'}
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div 
                          className={`progress-bar ${results.dimension_scores.stability_adaptability < 0 ? 'bg-info' : 'bg-warning'}`} 
                          role="progressbar" 
                          style={{ width: `${Math.abs(results.dimension_scores.stability_adaptability)}%` }}
                          aria-valuenow={Math.abs(results.dimension_scores.stability_adaptability)} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card mb-3">
                    <div className="card-header">
                      <strong>Task / People:</strong> 
                      {results.dimension_scores.task_people < 0 ? 'Task-oriented' : 'People-oriented'}
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div 
                          className={`progress-bar ${results.dimension_scores.task_people < 0 ? 'bg-info' : 'bg-warning'}`} 
                          role="progressbar" 
                          style={{ width: `${Math.abs(results.dimension_scores.task_people)}%` }}
                          aria-valuenow={Math.abs(results.dimension_scores.task_people)} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card mb-3">
                    <div className="card-header">
                      <strong>Analytical / Creative:</strong> 
                      {results.dimension_scores.analytical_creative < 0 ? 'Analytical thinker' : 'Creative thinker'}
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div 
                          className={`progress-bar ${results.dimension_scores.analytical_creative < 0 ? 'bg-info' : 'bg-warning'}`} 
                          role="progressbar" 
                          style={{ width: `${Math.abs(results.dimension_scores.analytical_creative)}%` }}
                          aria-valuenow={Math.abs(results.dimension_scores.analytical_creative)} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="card-header">
                      <strong>What This Means:</strong>
                    </div>
                    <div className="card-body">
                      <p>
                        These dimensions represent key aspects of your personality that influence how you interact with the world, process information, and make decisions.
                      </p>
                      <p>
                        Your unique combination creates a distinctive approach to life that has both strengths and growth opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Emotional Landscape Tab */}
        <div className={`tab-pane fade ${activeTab === 'emotional' ? 'show active' : ''}`}>
          <div className="section-card">
            <div className="section-header emotional-header">
              <h3 className="h5 mb-0">Emotional Landscape</h3>
            </div>
            <div className="section-body">
              <p>{results.emotional_landscape}</p>
              
              <div className="card mt-4">
                <div className="card-header">
                  <strong>Understanding Your Emotional Patterns</strong>
                </div>
                <div className="card-body">
                  <p>
                    Your emotional landscape is shaped by your color preferences and reflects how you experience, process, and express emotions. This understanding can help you:
                  </p>
                  <ul>
                    <li>Recognize your emotional patterns and triggers</li>
                    <li>Develop strategies for emotional regulation</li>
                    <li>Communicate your feelings more effectively</li>
                    <li>Build more satisfying relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommendations Tab */}
        <div className={`tab-pane fade ${activeTab === 'recommendations' ? 'show active' : ''}`}>
          <div className="section-card">
            <div className="section-header recommendations-header">
              <h3 className="h5 mb-0">Personalized Recommendations</h3>
            </div>
            <div className="section-body">
              <div className="accordion" id="recommendationsAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#workEnvironmentCollapse" aria-expanded="true" aria-controls="workEnvironmentCollapse">
                      Optimal Work Environment
                    </button>
                  </h2>
                  <div id="workEnvironmentCollapse" className="accordion-collapse collapse show" data-bs-parent="#recommendationsAccordion">
                    <div className="accordion-body">
                      <div className="recommendation-item">
                        {results.recommendations.work_environment}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#communicationCollapse" aria-expanded="false" aria-controls="communicationCollapse">
                      Communication Strategies
                    </button>
                  </h2>
                  <div id="communicationCollapse" className="accordion-collapse collapse" data-bs-parent="#recommendationsAccordion">
                    <div className="accordion-body">
                      <div className="recommendation-item">
                        {results.recommendations.communication}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stressCollapse" aria-expanded="false" aria-controls="stressCollapse">
                      Stress Management
                    </button>
                  </h2>
                  <div id="stressCollapse" className="accordion-collapse collapse" data-bs-parent="#recommendationsAccordion">
                    <div className="accordion-body">
                      <div className="recommendation-item">
                        {results.recommendations.stress_management}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#growthCollapse" aria-expanded="false" aria-controls="growthCollapse">
                      Growth Opportunities
                    </button>
                  </h2>
                  <div id="growthCollapse" className="accordion-collapse collapse" data-bs-parent="#recommendationsAccordion">
                    <div className="accordion-body">
                      <div className="recommendation-item">
                        {results.recommendations.growth_opportunities}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
