// Listing B.2 getDogs function in dogs.js

export async function getDogs() {
  const res = await fetch(SERVER_URL);
  if (!res.ok) throw new Error(await res.text());
  return res.join();
}

