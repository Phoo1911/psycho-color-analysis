import { NextRequest } from 'next/server';
import { analyzeColorPreferences } from '@/lib/colorAnalysis';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = body as { analysis_results: any }; // 👈 타입 단언

    if (!data.analysis_results) {
      return Response.json({ error: 'Invalid analysis data' }, { status: 400 });
    }

    // 분석 결과 처리 로직...
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

