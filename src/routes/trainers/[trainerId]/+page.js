// ==============================
// Exercise One - 动态路由数据加载
// 根据路由参数 trainerId 获取单个训练师详情
// 对应题目：从 /api/trainers/{trainerId} 获取数据
// ==============================
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