// Color analysis utility functions

// Jung's Color Energy analysis
export function analyzeJungColorEnergies(colorRanking) {
  // Determine Jung's Color Energies based on primary color
  let primaryEnergy, secondaryEnergy;
  const energyDistribution = {};
  
  const primaryColor = colorRanking[0];
  const secondaryColor = colorRanking[1];
  
  if (['blue', 'teal', 'cyan', 'navy'].includes(primaryColor)) {
    primaryEnergy = 'Cool Blue';
    energyDistribution['Cool Blue'] = 40;
  } else if (['green', 'olive', 'mint'].includes(primaryColor)) {
    primaryEnergy = 'Earth Green';
    energyDistribution['Earth Green'] = 40;
  } else if (['yellow', 'gold', 'amber'].includes(primaryColor)) {
    primaryEnergy = 'Sunshine Yellow';
    energyDistribution['Sunshine Yellow'] = 40;
  } else if (['red', 'crimson', 'maroon'].includes(primaryColor)) {
    primaryEnergy = 'Fiery Red';
    energyDistribution['Fiery Red'] = 40;
  } else {
    primaryEnergy = 'Cool Blue';
    energyDistribution['Cool Blue'] = 40;
  }
  
  if (['blue', 'teal', 'cyan', 'navy'].includes(secondaryColor)) {
    secondaryEnergy = 'Cool Blue';
    energyDistribution['Cool Blue'] = (energyDistribution['Cool Blue'] || 0) + 30;
  } else if (['green', 'olive', 'mint'].includes(secondaryColor)) {
    secondaryEnergy = 'Earth Green';
    energyDistribution['Earth Green'] = (energyDistribution['Earth Green'] || 0) + 30;
  } else if (['yellow', 'gold', 'amber'].includes(secondaryColor)) {
    secondaryEnergy = 'Sunshine Yellow';
    energyDistribution['Sunshine Yellow'] = (energyDistribution['Sunshine Yellow'] || 0) + 30;
  } else if (['red', 'crimson', 'maroon'].includes(secondaryColor)) {
    secondaryEnergy = 'Fiery Red';
    energyDistribution['Fiery Red'] = (energyDistribution['Fiery Red'] || 0) + 30;
  } else {
    secondaryEnergy = 'Earth Green';
    energyDistribution['Earth Green'] = (energyDistribution['Earth Green'] || 0) + 30;
  }
  
  // Fill in remaining energies
  ['Cool Blue', 'Earth Green', 'Sunshine Yellow', 'Fiery Red'].forEach(energy => {
    if (!energyDistribution[energy]) {
      energyDistribution[energy] = 15;
    }
  });
  
  // Normalize to ensure total is 100%
  const total = Object.values(energyDistribution).reduce((sum, val) => sum + val, 0);
  Object.keys(energyDistribution).forEach(key => {
    energyDistribution[key] = (energyDistribution[key] / total) * 100;
  });
  
  return {
    primary_energy: primaryEnergy,
    secondary_energy: secondaryEnergy,
    energy_distribution: energyDistribution
  };
}

// Personality dimension analysis
export function analyzePersonalityDimensions(primaryEnergy) {
  return {
    introversion_extraversion: primaryEnergy === 'Cool Blue' || primaryEnergy === 'Earth Green' ? -60 : 60,
    thinking_feeling: primaryEnergy === 'Cool Blue' || primaryEnergy === 'Fiery Red' ? -50 : 50,
    stability_adaptability: primaryEnergy === 'Cool Blue' || primaryEnergy === 'Earth Green' ? -70 : 70,
    task_people: primaryEnergy === 'Cool Blue' || primaryEnergy === 'Fiery Red' ? -65 : 65,
    analytical_creative: primaryEnergy === 'Cool Blue' ? -80 : (primaryEnergy === 'Sunshine Yellow' ? 80 : 0)
  };
}

// Emotional landscape analysis
export function analyzeEmotionalLandscape(primaryEnergy) {
  if (primaryEnergy === 'Cool Blue') {
    return "Your emotional landscape is characterized by a preference for calm, stable emotional states. You tend to process emotions internally and may take time to fully understand and express your feelings. You value emotional authenticity but may struggle with spontaneous expression. Your emotional responses are typically measured and proportionate to situations.";
  } else if (primaryEnergy === 'Earth Green') {
    return "Your emotional landscape is characterized by empathy and emotional depth. You are attuned to both your own feelings and those of others. You value emotional harmony and may sometimes prioritize others' emotional needs over your own. You tend to form deep emotional connections and seek meaningful relationships.";
  } else if (primaryEnergy === 'Sunshine Yellow') {
    return "Your emotional landscape is characterized by expressiveness and enthusiasm. You experience emotions vividly and tend to share them openly. You value positive emotional experiences and may actively seek out situations that bring joy and excitement. Your emotional energy is contagious and often uplifts those around you.";
  } else {
    return "Your emotional landscape is characterized by intensity and directness. You experience emotions strongly and tend to express them clearly. You value emotional honesty and may become impatient with indirect communication. Your emotional responses are typically immediate and action-oriented.";
  }
}

// Personality overview analysis
export function analyzePersonalityOverview(primaryEnergy) {
  if (primaryEnergy === 'Cool Blue') {
    return "You have an analytical and methodical approach to life. You value precision, clarity, and logical reasoning. You tend to be thoughtful and detail-oriented, preferring to gather all relevant information before making decisions. Your careful and systematic approach helps you excel in situations requiring thorough analysis and problem-solving.";
  } else if (primaryEnergy === 'Earth Green') {
    return "You have a supportive and harmonious approach to life. You value relationships, empathy, and creating balanced environments. You tend to be patient and reliable, preferring to consider the human impact of decisions. Your caring and considerate nature helps you excel in situations requiring teamwork and emotional intelligence.";
  } else if (primaryEnergy === 'Sunshine Yellow') {
    return "You have an enthusiastic and sociable approach to life. You value creativity, inspiration, and connecting with others. You tend to be optimistic and expressive, preferring to explore possibilities and generate ideas. Your energetic and positive nature helps you excel in situations requiring innovation and motivation.";
  } else {
    return "You have a decisive and action-oriented approach to life. You value efficiency, results, and direct communication. You tend to be bold and assertive, preferring to take charge and make things happen. Your determined and focused nature helps you excel in situations requiring leadership and quick decision-making.";
  }
}

// Generate work environment recommendations
export function generateWorkRecommendations(primaryEnergy, secondaryEnergy) {
  if (primaryEnergy === 'Cool Blue') {
    return "Your optimal work environment should provide structure, quiet space for concentration, and minimal distractions. You thrive in settings that allow for methodical work and detailed analysis. Consider environments with clear processes, access to information resources, and opportunities for independent work.";
  } else if (primaryEnergy === 'Earth Green') {
    return "Your optimal work environment should provide harmony, collaboration, and a people-centered atmosphere. You thrive in settings that value teamwork and personal connections. Consider environments with comfortable spaces for interaction, supportive leadership, and a focus on work-life balance.";
  } else if (primaryEnergy === 'Sunshine Yellow') {
    return "Your optimal work environment should provide stimulation, variety, and opportunities for social interaction. You thrive in settings that encourage creativity and idea-sharing. Consider environments with collaborative spaces, visual stimulation, and flexibility in how work is approached.";
  } else {
    return "Your optimal work environment should provide efficiency, clear goals, and opportunities for achievement. You thrive in settings that value results and decisive action. Consider environments with minimal bureaucracy, recognition for accomplishments, and opportunities for leadership.";
  }
}

// Generate communication recommendations
export function generateCommunicationRecommendations(primaryEnergy, secondaryEnergy) {
  if (primaryEnergy === 'Cool Blue') {
    return "Your communication style benefits from preparation and structure. When sharing ideas, provide detailed information and logical reasoning. When receiving information, you appreciate thoroughness and accuracy. To connect with others who have different styles, practice being more concise and showing more emotional expressiveness when appropriate.";
  } else if (primaryEnergy === 'Earth Green') {
    return "Your communication style emphasizes empathy and relationship-building. When sharing ideas, connect them to people's needs and values. When receiving information, you appreciate a personal touch and consideration of impact. To connect with others who have different styles, practice being more direct and focusing more on outcomes when appropriate.";
  } else if (primaryEnergy === 'Sunshine Yellow') {
    return "Your communication style features enthusiasm and expressiveness. When sharing ideas, you naturally convey energy and possibilities. When receiving information, you appreciate creativity and an engaging delivery. To connect with others who have different styles, practice providing more details and focusing more on practical implementation when appropriate.";
  } else {
    return "Your communication style emphasizes directness and efficiency. When sharing ideas, you focus on results and action steps. When receiving information, you appreciate brevity and clarity. To connect with others who have different styles, practice showing more patience with details and demonstrating more sensitivity to emotional responses when appropriate.";
  }
}

// Generate stress management recommendations
export function generateStressRecommendations(primaryEnergy, secondaryEnergy) {
  if (primaryEnergy === 'Cool Blue') {
    return "To manage stress effectively, create structured breaks in your schedule for reflection and processing. Maintain organization systems to reduce anxiety about missing details. Practice mindfulness techniques that focus on observing thoughts without judgment. When overwhelmed, step back to analyze the situation objectively and break challenges into manageable components.";
  } else if (primaryEnergy === 'Earth Green') {
    return "To manage stress effectively, prioritize meaningful connections with supportive people. Create harmony in your physical environment to promote emotional balance. Practice self-compassion and set boundaries to prevent taking on others' emotional burdens. When overwhelmed, engage in nurturing activities that restore your sense of well-being and purpose.";
  } else if (primaryEnergy === 'Sunshine Yellow') {
    return "To manage stress effectively, incorporate variety and social interaction into your routine. Engage in creative expression to process emotions and generate positive energy. Maintain flexibility in your schedule to allow for spontaneity. When overwhelmed, shift to activities that bring joy and reconnect with your natural optimism and enthusiasm.";
  } else {
    return "To manage stress effectively, engage in physical activity to release tension and maintain energy. Set clear goals for stress management with measurable outcomes. Take decisive action to address sources of stress directly. When overwhelmed, focus on what you can control and create action plans that restore your sense of agency and momentum.";
  }
}

// Generate growth recommendations
export function generateGrowthRecommendations(primaryEnergy, secondaryEnergy) {
  if (primaryEnergy === 'Cool Blue') {
    return "For personal growth, practice making decisions with incomplete information. Develop comfort with expressing emotions more openly in appropriate contexts. Experiment with spontaneity in low-risk situations. Consider how your analytical strengths can be balanced with more risk-taking and emotional intelligence to expand your effectiveness in different situations.";
  } else if (primaryEnergy === 'Earth Green') {
    return "For personal growth, practice asserting your own needs alongside others'. Develop comfort with conflict as a natural part of healthy relationships. Experiment with making decisions based on logic alone in appropriate contexts. Consider how your relational strengths can be balanced with more self-focus and objective analysis to expand your effectiveness in different situations.";
  } else if (primaryEnergy === 'Sunshine Yellow') {
    return "For personal growth, practice following through on details and completing projects. Develop comfort with periods of solitude and reflection. Experiment with structured approaches to problem-solving in appropriate contexts. Consider how your creative strengths can be balanced with more discipline and focused attention to expand your effectiveness in different situations.";
  } else {
    return "For personal growth, practice patience with processes that require time to develop. Develop comfort with considering emotional impacts alongside results. Experiment with collaborative approaches that incorporate diverse perspectives. Consider how your action-oriented strengths can be balanced with more reflection and relationship-building to expand your effectiveness in different situations.";
  }
}

// Main analysis function
export function analyzeColorPreferences(colorData) {
  // Analyze Jung's Color Energies
  const jungColorEnergies = analyzeJungColorEnergies(colorData.color_ranking);
  
  // Generate personality overview
  const personalityOverview = analyzePersonalityOverview(jungColorEnergies.primary_energy);
  
  // Analyze personality dimensions
  const dimensionScores = analyzePersonalityDimensions(jungColorEnergies.primary_energy);
  
  // Analyze emotional landscape
  const emotionalLandscape = analyzeEmotionalLandscape(jungColorEnergies.primary_energy);
  
  // Generate recommendations
  const recommendations = {
    work_environment: generateWorkRecommendations(jungColorEnergies.primary_energy, jungColorEnergies.secondary_energy),
    communication: generateCommunicationRecommendations(jungColorEnergies.primary_energy, jungColorEnergies.secondary_energy),
    stress_management: generateStressRecommendations(jungColorEnergies.primary_energy, jungColorEnergies.secondary_energy),
    growth_opportunities: generateGrowthRecommendations(jungColorEnergies.primary_energy, jungColorEnergies.secondary_energy)
  };
  
  // Return complete analysis
  return {
    jung_color_energies: jungColorEnergies,
    personality_overview: personalityOverview,
    dimension_scores: dimensionScores,
    emotional_landscape: emotionalLandscape,
    recommendations: recommendations
  };
}
