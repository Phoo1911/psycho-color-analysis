import { NextRequest } from 'next/server';
import { analyzeColorPreferences } from '@/lib/colorAnalysis';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const colorData = await request.json();
    
    // Validate the input data
    if (!colorData.color_ranking || !Array.isArray(colorData.color_ranking) || colorData.color_ranking.length < 2) {
      return Response.json({ error: 'Invalid color ranking data' }, { status: 400 });
    }
    
    // Perform the color analysis
    const analysisResults = analyzeColorPreferences(colorData);
    
    // Return the analysis results
    return Response.json(analysisResults);
  } catch (error) {
    console.error('Error analyzing color preferences:', error);
    return Response.json({ error: 'Failed to analyze color preferences' }, { status: 500 });
  }
}
