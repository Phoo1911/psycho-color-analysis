import { NextRequest } from 'next/server';
import { analyzeColorPreferences } from '@/lib/colorAnalysis';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ 타입 단언으로 타입 오류 해결
    const colorData = body as { color_ranking: string[] };

    // ✅ 유효성 검사
    if (
      !colorData.color_ranking ||
      !Array.isArray(colorData.color_ranking) ||
      colorData.color_ranking.length < 2
    ) {
      return Response.json({ error: 'Invalid color ranking data' }, { status: 400 });
    }

    // ✅ 분석 로직 실행
    const analysisResults = analyzeColorPreferences(colorData);

    // ✅ 분석 결과 반환
    return Response.json(analysisResults);
  } catch (error) {
    console.error('Error analyzing color preferences:', error);
    return Response.json({ error: 'Failed to analyze color preferences' }, { status: 500 });
  }
}
