<script>
  // ================================================================================
  // Exercise One - SvelteKit data loading
  // 题目要求：
  // Next, within /trainers/+layout.svelte, add a new prop, called data:
  // let { data } = $props();
  // 
  // data 来自 +layout.js 的 load() 函数返回值，包含：
  // - data.trainers  所有训练师数据
  // - data.error     错误信息（如果有）
  //
  // 使用这份 data 渲染侧边栏，删除组件内原本的 fetch() 调用
  // ================================================================================

  import { page } from "$app/state";
  import { favouriteTrainerStore } from "$lib/js/favourite-trainer.svelte.js";

  // 题目要求：接收从 +layout.js load() 传来的 data
  let { data, children } = $props();

  // 从 data 中取出训练师列表与错误信息
  let trainers = $derived(data.trainers || []);
  let error = $derived(data.error);

  // 当前选中的训练师 ID（用于高亮）
  let currentTrainerId = $derived(page.params.trainerId);
</script>

<div class="trainers-layout">
  <aside class="sidebar">
    <h2>Trainers</h2>

    <!-- 错误状态 -->
    {#if error}
      <p class="error">Failed to load trainers</p>
    
    <!-- 成功显示训练师列表 -->
    {:else if trainers.length > 0}
      <nav class="trainer-nav">
        <ul>
          {#each trainers as trainer}
            <li>
              <a
                href="/trainers/{trainer.trainerId}"
                class="trainer-link"
                class:active={currentTrainerId === trainer.trainerId}
              >
                <div class="trainer-info">
                  <span class="trainer-name">
                    {trainer.name}
                    {#if favouriteTrainerStore.trainerId === trainer.trainerId}
                      ⭐️
                    {/if}
                  </span>
                  <span class="trainer-rank">{trainer.rank}</span>
                </div>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    
    <!-- 无数据 -->
    {:else}
      <p class="no-trainers">No trainers found</p>
    {/if}
  </aside>

  <!-- 渲染子页面（trainers 列表 / 详情页） -->
  <main class="main-content">
    {@render children()}
  </main>
</div>

<style>
  .trainers-layout {
    display: flex;
    min-height: calc(100vh - 120px);
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .sidebar {
    width: 300px;
    flex-shrink: 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    height: fit-content;
    position: sticky;
    top: 5rem;
  }

  .sidebar h2 {
    color: #2e7d32;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    text-align: center;
    border-bottom: 2px solid #e8f5e8;
    padding-bottom: 0.75rem;
  }

  .error,
  .no-trainers {
    color: #666;
    font-style: italic;
    text-align: center;
    padding: 1rem 0;
    margin: 0;
  }

  .error {
    color: #d32f2f;
  }

  .trainer-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .trainer-nav li {
    margin-bottom: 0.5rem;
  }

  .trainer-link {
    display: block;
    padding: 1rem;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    border: 2px solid transparent;
  }

  .trainer-link:hover {
    background: #f8f9fa;
    border-color: #e8f5e8;
    transform: translateX(4px);
  }

  .trainer-link.active {
    background: #e8f5e8;
    border-color: #4caf50;
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
  }

  .trainer-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .trainer-name {
    font-weight: 600;
    color: #2e7d32;
    font-size: 1rem;
  }

  .trainer-rank {
    font-size: 0.85rem;
    color: #4caf50;
    font-weight: 500;
  }

  .main-content {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 1024px) {
    .trainers-layout {
      flex-direction: column;
      padding: 1rem 0.5rem;
    }

    .sidebar {
      width: 100%;
      position: static;
      margin-bottom: 2rem;
    }

    .sidebar h2 {
      font-size: 1.3rem;
    }

    .trainer-nav ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 0.5rem;
    }

    .trainer-link:hover {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    .trainers-layout {
      padding: 1rem 0.25rem;
    }

    .sidebar {
      padding: 1.5rem;
    }

    .trainer-nav ul {
      grid-template-columns: 1fr;
    }

    .trainer-link {
      padding: 0.75rem;
    }

    .trainer-name {
      font-size: 0.95rem;
    }

    .trainer-rank {
      font-size: 0.8rem;
    }
  }
</style>