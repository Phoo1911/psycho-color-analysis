# Psycho-Color Analysis System

A comprehensive web application that analyzes personality traits, emotional tendencies, and psychological characteristics based on color preferences.

## Overview

The Psycho-Color Analysis system is built on established color psychology frameworks, including Jung's Four Color Energies, to provide insights into personality dimensions, emotional landscapes, and personalized recommendations. The application features an interactive interface with drag-and-drop color ranking, contextual preference selection, and emotion association mapping.

## Features

- **Interactive Color Preference Assessment**
  - Drag-and-drop color ranking
  - Contextual color preference selection
  - Color-emotion association mapping

- **Comprehensive Analysis**
  - Jung's Color Energy analysis
  - Personality dimension evaluation
  - Emotional landscape assessment
  - Personalized recommendations

- **Enhanced Insights (LLM Integration)**
  - Personalized color energy insights
  - Relationship dynamics analysis
  - Career path recommendations
  - Personal growth guidance

- **Interactive Visualizations**
  - Color energy distribution charts
  - Personality dimension radar charts
  - Interactive tabbed navigation
  - Animated transitions and effects

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Visualization**: Chart.js, react-chartjs-2
- **Interaction**: SortableJS for drag-and-drop functionality
- **Styling**: Tailwind CSS with custom animations

## Getting Started

See the [Deployment Guide](./docs/deployment_guide.md) for instructions on how to deploy the application.

See the [User Guide](./docs/user_guide.md) for detailed instructions on how to use the system.

## Project Structure

- `/src/app`: Next.js pages and layouts
- `/src/components`: React components for UI elements
- `/src/hooks`: Custom React hooks
- `/src/lib`: Utility functions and color analysis algorithms
- `/src/app/api`: API routes for color analysis and LLM integration
- `/docs`: Documentation including deployment and user guides

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Theoretical Foundation

The system is based on several color psychology frameworks:

1. **Jung's Four Color Energies**:
   - Cool Blue: Analytical, methodical, detail-oriented
   - Earth Green: Supportive, harmonious, relationship-focused
   - Sunshine Yellow: Enthusiastic, sociable, creative
   - Fiery Red: Decisive, action-oriented, results-driven

2. **Color-Emotion Correlations**: Research-based associations between colors and emotional states

3. **Contextual Color Preferences**: How color preferences in different contexts reveal personality traits

4. **Personality Dimension Mapping**: Correlation between color preferences and personality dimensions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on research in color psychology and personality assessment
- Inspired by the work of Carl Jung and modern color psychology researchers
- Developed as a demonstration of LLM-enhanced psychological assessment tools
