import mockData from '../mockData.json';
import { NextResponse, NextRequest } from 'next/server';
export async function OPTIONS(request: NextRequest) {
  const allowedOrigin = request.headers.get('origin');
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin || '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
      'Access-Control-Max-Age': '86400',
    },
  });

  return response;
}

export async function GET(req: NextRequest) {
  const memberId = req.nextUrl.searchParams.get('id');
  const data = mockData.find((item) => item.id === memberId);
  return Response.json({ data });
}
