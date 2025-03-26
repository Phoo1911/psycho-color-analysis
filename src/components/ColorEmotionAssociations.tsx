'use client';

import { useState } from 'react';

export default function ColorEmotionAssociations() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<Record<string, string[]>>({
    red: [],
    blue: [],
    green: [],
    yellow: [],
    purple: []
  });

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleEmotionChange = (colorId: string, emotion: string, isChecked: boolean) => {
    setSelectedEmotions(prev => {
      const updatedEmotions = [...prev[colorId]];
      
      if (isChecked) {
        updatedEmotions.push(emotion);
      } else {
        const index = updatedEmotions.indexOf(emotion);
        if (index > -1) {
          updatedEmotions.splice(index, 1);
        }
      }
      
      return {
        ...prev,
        [colorId]: updatedEmotions
      };
    });
  };

  const colors = [
    {
      id: 'red',
      name: 'Red',
      emotions: ['passion', 'anger', 'love', 'energy', 'danger', 'excitement'],
      description: 'Red is associated with strong emotions and physical energy.'
    },
    {
      id: 'blue',
      name: 'Blue',
      emotions: ['calm', 'trust', 'sadness', 'peace', 'loyalty', 'wisdom'],
      description: 'Blue is associated with tranquility and intellectual depth.'
    },
    {
      id: 'green',
      name: 'Green',
      emotions: ['growth', 'harmony', 'nature', 'balance', 'envy', 'freshness'],
      description: 'Green is associated with balance and emotional growth.'
    },
    {
      id: 'yellow',
      name: 'Yellow',
      emotions: ['happiness', 'optimism', 'creativity', 'warmth', 'caution', 'energy'],
      description: 'Yellow is associated with optimism and mental stimulation.'
    },
    {
      id: 'purple',
      name: 'Purple',
      emotions: ['mystery', 'luxury', 'spirituality', 'imagination', 'dignity', 'ambition'],
      description: 'Purple is associated with imagination and spiritual awareness.'
    }
  ];

  return (
    <div className="mb-4">
      <h3 className="h5">3. Color-Emotion Associations</h3>
      <p>Select emotions you associate with each color.</p>
      <div className="alert alert-info" role="alert">
        <i className="fas fa-info-circle me-2"></i>
        Your emotional associations with colors reveal deeper aspects of your psychological makeup.
      </div>
      
      <div className="accordion" id="colorEmotionAccordion">
        {colors.map((color) => (
          <div className="accordion-item" key={color.id}>
            <h2 className="accordion-header" id={`${color.id}Heading`}>
              <button 
                className={`accordion-button ${activeAccordion === color.id ? '' : 'collapsed'}`} 
                type="button" 
                onClick={() => toggleAccordion(color.id)}
                aria-expanded={activeAccordion === color.id}
                aria-controls={`${color.id}Collapse`}
                style={{ 
                  borderLeft: `5px solid ${color.id}`,
                  transition: 'all 0.3s ease'
                }}
              >
                {color.name}
                {selectedEmotions[color.id].length > 0 && (
                  <span className="badge bg-primary ms-2">
                    {selectedEmotions[color.id].length} selected
                  </span>
                )}
              </button>
            </h2>
            <div 
              id={`${color.id}Collapse`} 
              className={`accordion-collapse collapse ${activeAccordion === color.id ? 'show' : ''}`} 
              aria-labelledby={`${color.id}Heading`}
            >
              <div className="accordion-body">
                <p className="mb-3">{color.description}</p>
                <div className="emotion-grid">
                  {color.emotions.map((emotion) => (
                    <div className="form-check emotion-check" key={`${color.id}-${emotion}`}>
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={emotion} 
                        id={`${color.id}${emotion.charAt(0).toUpperCase() + emotion.slice(1)}`} 
                        name={`${color.id}Emotions`}
                        onChange={(e) => handleEmotionChange(color.id, emotion, e.target.checked)}
                        checked={selectedEmotions[color.id].includes(emotion)}
                      />
                      <label 
                        className="form-check-label" 
                        htmlFor={`${color.id}${emotion.charAt(0).toUpperCase() + emotion.slice(1)}`}
                      >
                        {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
