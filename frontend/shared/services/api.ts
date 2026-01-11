export async function api<T>(endpoint: string, options?: RequestInit) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      options
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('API ERROR:', text);
      throw new Error(text);
    }

    return response.json();
  } catch (error) {
    console.error('FETCH ERROR:', error);
    throw error;
  }
}
