export async function api<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  try {

    const response = await fetch(
      `${process.env.NEXT_PRIVATE_API_URL}${endpoint}`,
      options,
    );


    if (!response.ok) {
      const text = await response.text();
      console.error("API ERROR:", text);
      throw new Error(text);
    }

    return response.json() as Promise<T>;

  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }
}
