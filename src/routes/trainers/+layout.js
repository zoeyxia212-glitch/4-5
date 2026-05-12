// ================================================================================
// Exercise One - SvelteKit data loading (Trainer side panel)
// 题目要求：
// 1. 在 routes/trainers 新建 +layout.js
// 2. 使用 load() 函数获取全部训练师数据
// 3. 从 API: /api/trainers 加载数据
// 4. 返回 { trainers } 给侧边栏 / 子页面使用
// ================================================================================
import { PUBLIC_BASE_URL } from "$env/static/public";

export async function load({ fetch }) {
  try {
    // 请求所有训练师数据
    const res = await fetch(`${PUBLIC_BASE_URL}/api/trainers`);
    
    // 请求失败 → 返回空列表和错误信息
    if (!res.ok) return { trainers: [], error: "Failed to fetch trainer data" };
    
    // 请求成功 → 返回训练师数据
    const trainers = await res.json();
    return { trainers };
  } catch (error) {
    // 捕获异常 → 返回空列表和错误信息
    return { trainers: [], error: error.message };
  }
}