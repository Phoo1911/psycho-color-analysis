'use client';

import { useState } from 'react';

export default function ContextualPreferences() {
  const [hoveredSelect, setHoveredSelect] = useState(null);
  
  const colorOptions = [
    { value: "", label: "Select a color" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "purple", label: "Purple" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "brown", label: "Brown" }
  ];

  const handleSelectChange = (e) => {
    const select = e.target;
    const color = select.value;
    
    // Add visual feedback when a color is selected
    if (color) {
      select.style.borderColor = color;
      select.style.boxShadow = `0 0 0 0.2rem ${color}33`;
    } else {
      select.style.borderColor = '';
      select.style.boxShadow = '';
    }
  };

  const getTooltip = (context) => {
    switch(context) {
      case 'work':
        return 'Colors you prefer in professional environments reflect your work style and values.';
      case 'relaxation':
        return 'Colors you associate with relaxation reveal how you recharge and what brings you comfort.';
      case 'social':
        return 'Your color preferences in social settings indicate how you connect with others.';
      case 'creative':
        return 'Colors you associate with creativity show your innovative thinking patterns.';
      case 'stress':
        return 'Colors you turn to during stress reveal your coping mechanisms.';
      default:
        return '';
    }
  };

  return (
    <div className="mb-4">
      <h3 className="h5">2. Contextual Color Preferences</h3>
      <p>Select the colors you associate with different contexts.</p>
      <div className="alert alert-info" role="alert">
        <i className="fas fa-info-circle me-2"></i>
        Your color preferences in different contexts reveal important aspects of your personality.
      </div>
      
      <div className="mb-3 select-container" onMouseEnter={() => setHoveredSelect('work')} onMouseLeave={() => setHoveredSelect(null)}>
        <label htmlFor="workColor" className="form-label">Work Environment</label>
        <select 
          className="form-select" 
          id="workColor" 
          name="workColor" 
          onChange={handleSelectChange}
          style={{ transition: 'all 0.3s ease' }}
        >
          {colorOptions.map((option) => (
            <option key={`work-${option.value}`} value={option.value}>{option.label}</option>
          ))}
        </select>
        {hoveredSelect === 'work' && (
          <div className="tooltip-custom">{getTooltip('work')}</div>
        )}
      </div>
      
      <div className="mb-3 select-container" onMouseEnter={() => setHoveredSelect('relaxation')} onMouseLeave={() => setHoveredSelect(null)}>
        <label htmlFor="relaxationColor" className="form-label">Relaxation Space</label>
        <select 
          className="form-select" 
          id="relaxationColor" 
          name="relaxationColor" 
          onChange={handleSelectChange}
          style={{ transition: 'all 0.3s ease' }}
        >
          {colorOptions.map((option) => (
            <option key={`relaxation-${option.value}`} value={option.value}>{option.label}</option>
          ))}
        </select>
        {hoveredSelect === 'relaxation' && (
          <div className="tooltip-custom">{getTooltip('relaxation')}</div>
        )}
      </div>
      
      <div className="mb-3 select-container" onMouseEnter={() => setHoveredSelect('social')} onMouseLeave={() => setHoveredSelect(null)}>
        <label htmlFor="socialColor" className="form-label">Social Settings</label>
        <select 
          className="form-select" 
          id="socialColor" 
          name="socialColor" 
          onChange={handleSelectChange}
          style={{ transition: 'all 0.3s ease' }}
        >
          {colorOptions.map((option) => (
            <option key={`social-${option.value}`} value={option.value}>{option.label}</option>
          ))}
        </select>
        {hoveredSelect === 'social' && (
          <div className="tooltip-custom">{getTooltip('social')}</div>
        )}
      </div>
      
      <div className="mb-3 select-container" onMouseEnter={() => setHoveredSelect('creative')} onMouseLeave={() => setHoveredSelect(null)}>
        <label htmlFor="creativeColor" className="form-label">Creative Activities</label>
        <select 
          className="form-select" 
          id="creativeColor" 
          name="creativeColor" 
          onChange={handleSelectChange}
          style={{ transition: 'all 0.3s ease' }}
        >
          {colorOptions.map((option) => (
            <option key={`creative-${option.value}`} value={option.value}>{option.label}</option>
          ))}
        </select>
        {hoveredSelect === 'creative' && (
          <div className="tooltip-custom">{getTooltip('creative')}</div>
        )}
      </div>
      
      <div className="mb-3 select-container" onMouseEnter={() => setHoveredSelect('stress')} onMouseLeave={() => setHoveredSelect(null)}>
        <label htmlFor="stressColor" className="form-label">Stressful Situations</label>
        <select 
          className="form-select" 
          id="stressColor" 
          name="stressColor" 
          onChange={handleSelectChange}
          style={{ transition: 'all 0.3s ease' }}
        >
          {colorOptions.map((option) => (
            <option key={`stress-${option.value}`} value={option.value}>{option.label}</option>
          ))}
        </select>
        {hoveredSelect === 'stress' && (
          <div className="tooltip-custom">{getTooltip('stress')}</div>
        )}
      </div>
    </div>
  );
}
