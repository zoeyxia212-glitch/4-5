import { PUBLIC_BASE_URL } from "$env/static/public";

export async function load({ fetch }) {
  try {
    const res = await fetch(`${PUBLIC_BASE_URL}/api/trainers`);
    if (!res.ok) return { trainers: [], error: "Failed to fetch trainer data" };
    const trainers = await res.json();
    return { trainers };
  } catch (error) {
    return { trainers: [], error: error.message };
  }
}
