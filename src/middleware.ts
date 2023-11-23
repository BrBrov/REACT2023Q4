import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function checkStartURL(request: NextRequest): boolean {
  const qParams = new URLSearchParams(new URL(request.url).searchParams);
  if (!qParams.get('page') || !qParams.get('items')) {
    return false;
  }

  if (
    Array.isArray(qParams.get('page')) ||
    Array.isArray(qParams.get('items'))
  ) {
    return false;
  }

  const pageNumber = parseInt(qParams.get('page')!);

  if (isNaN(pageNumber)) return false;

  const itemsNumber: number = parseInt(qParams.get('items')!);

  if (isNaN(itemsNumber)) return false;

  if (itemsNumber < 6) return false;

  if (itemsNumber > 6 && itemsNumber < 12) return false;

  if (itemsNumber > 12 && itemsNumber < 24) return false;

  if (itemsNumber > 24) return false;

  return true;
}

function getURLtoRedirect(request: NextRequest): URL {
  const qParams = new URLSearchParams(new URL(request.url).searchParams);

  let url = 'main?page=1&items=6';

  if (qParams.get('search')) url = url + `&search=${qParams.get('search')}`;

  return new URL(url, request.url);
}

export default function middleware(request: NextRequest) {
  if (!checkStartURL(request)) {
    const url: URL = getURLtoRedirect(request);

    return NextResponse.redirect(url.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/main'],
};
