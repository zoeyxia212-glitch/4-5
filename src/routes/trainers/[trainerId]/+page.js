import { PUBLIC_BASE_URL } from "$env/static/public";

export async function load({ fetch, params }) {
  try {
    const res = await fetch(`${PUBLIC_BASE_URL}/api/trainers/${params.trainerId}`);
    if (!res.ok) return { trainer: null, error: "Failed to fetch trainer data" };
    const trainer = await res.json();
    return { trainer };
  } catch (error) {
    return { trainer: null, error: error.message };
  }
}
