import { type NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'workslikeus.com';
const REDIRECT_HOSTS = new Set(['workslikeus.ai', 'www.workslikeus.ai']);

export function proxy(request: NextRequest) {
  const requestHost = (request.headers.get('host') ?? request.nextUrl.hostname)
    .split(':', 1)[0]
    .toLowerCase();

  if (!REDIRECT_HOSTS.has(requestHost)) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = 'https:';
  destination.hostname = CANONICAL_HOST;
  destination.port = '';

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: '/:path*',
};
