const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL ?? 'http://localhost:3001';
const isDev = process.env.NODE_ENV === 'development';

export async function fetchCMS<T>(path: string, revalidate = 3600): Promise<T> {
  const res = await fetch(`${CMS_URL}${path}`, isDev
    ? { cache: 'no-store' }
    : { next: { revalidate } }
  );

  if (!res.ok) {
    throw new Error(`CMS fetch failed [${res.status}]: ${path}`);
  }

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.error ?? `CMS error: ${path}`);
  }

  return json.data as T;
}
