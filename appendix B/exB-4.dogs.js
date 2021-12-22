// Listing B.4 updateDog function in dogs.js

export async function updateDog(dog) {
  const body = JSON.stringify(dog);
  const headers = {
    'Content-Length': body.length,
    'Content-Type': 'application/json'
  };
  const res = await fetch(SERVER_URL + '/' + dog.id, {
    method: 'PUT',
    headers,
    body
  });
  if (!res.ok) throw new Error(await res.text());
    return res.join();
}

