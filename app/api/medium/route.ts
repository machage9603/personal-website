import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'machage_';

  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    console.log('Fetching from RSS2JSON:', apiUrl);
    
    const response = await fetch(apiUrl, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Received items:', data.items?.length);
    
    if (data.status !== 'ok') {
      throw new Error('RSS2JSON returned error status');
    }
    
    const articles = data.items
      .slice(0, 3) 
      .map((item: any) => ({
        id: item.guid,
        title: item.title,
        excerpt: stripHtml(item.description || item.content || '').substring(0, 150) + '...',
        date: new Date(item.pubDate).getFullYear().toString(),
        url: item.link,
        category: item.categories?.[0] || 'Article'
      }));
    
    return NextResponse.json({ articles });
  } catch (error: any) {
    console.error('Error details:', error);
    return NextResponse.json(
      { error: error.message, articles: [] },
      { status: 500 }
    );
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}