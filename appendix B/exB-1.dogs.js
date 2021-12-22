// Listing B.1 createDog function in dogs.js

export async function createDog(dog) {
  const body = JSON.stringify(dog);
  const headers = {
    'Content-Length': body.length,
    'Content-Type': 'application/json'
  };
  const res = await fetch(SERVER_URL, {
    method: 'POST',
    headers,
    body
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

