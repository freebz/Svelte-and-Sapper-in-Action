// Listing B.5 deleteDog function in dogs.js

export async function deleteDog(id) {
  const res = await fetch(SERVER_URL + '/' + id, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error(await res.text());
}

