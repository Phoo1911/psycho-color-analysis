'use client';

import { useEffect } from 'react';
import Sortable from 'sortablejs';

export default function ColorRanking() {
  useEffect(() => {
    // Initialize Sortable for color ranking
    const colorRanking = document.getElementById('colorRanking');
    if (colorRanking) {
      new Sortable(colorRanking, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        // Add onEnd event to provide feedback when a color is moved
        onEnd: function() {
          // Add a subtle flash effect to indicate the order has been updated
          colorRanking.classList.add('flash-update');
          setTimeout(() => {
            colorRanking.classList.remove('flash-update');
          }, 300);
        }
      });
    }
  }, []);

  return (
    <div className="mb-4">
      <h3 className="h5">1. Color Ranking</h3>
      <p>Drag and drop the colors to rank them from most preferred (top) to least preferred (bottom).</p>
      <div className="alert alert-info" role="alert">
        <i className="fas fa-info-circle me-2"></i>
        Your top two colors have the strongest influence on your psychological profile.
      </div>
      <div id="colorRankingContainer" className="mb-3">
        <ul id="colorRanking" className="list-group color-ranking">
          <li className="list-group-item" data-color="red" style={{ backgroundColor: '#e74c3c', transition: 'all 0.3s ease' }}>Red</li>
          <li className="list-group-item" data-color="blue" style={{ backgroundColor: '#3498db', transition: 'all 0.3s ease' }}>Blue</li>
          <li className="list-group-item" data-color="green" style={{ backgroundColor: '#2ecc71', transition: 'all 0.3s ease' }}>Green</li>
          <li className="list-group-item" data-color="yellow" style={{ backgroundColor: '#f1c40f', transition: 'all 0.3s ease' }}>Yellow</li>
          <li className="list-group-item" data-color="purple" style={{ backgroundColor: '#9b59b6', transition: 'all 0.3s ease' }}>Purple</li>
          <li className="list-group-item" data-color="orange" style={{ backgroundColor: '#e67e22', transition: 'all 0.3s ease' }}>Orange</li>
          <li className="list-group-item" data-color="pink" style={{ backgroundColor: '#fd79a8', transition: 'all 0.3s ease' }}>Pink</li>
          <li className="list-group-item" data-color="black" style={{ backgroundColor: '#2c3e50', color: 'white', transition: 'all 0.3s ease' }}>Black</li>
          <li className="list-group-item" data-color="white" style={{ backgroundColor: '#ecf0f1', transition: 'all 0.3s ease' }}>White</li>
          <li className="list-group-item" data-color="brown" style={{ backgroundColor: '#795548', color: 'white', transition: 'all 0.3s ease' }}>Brown</li>
        </ul>
      </div>
    </div>
  );
}
