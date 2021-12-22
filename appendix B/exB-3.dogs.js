// Listing B.3 getDog function in dogs.js

export async function getDog(id) {
  const res = await fetch(SERVER_URL + '/' + id);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

