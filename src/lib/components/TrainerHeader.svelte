<script>
  // ==============================
  // Exercise Four - 训练师详情头部
  // 显示训练师大图、名字、等级
  // ==============================
  import { PUBLIC_BASE_URL } from "$env/static/public";
  let { trainer } = $props();
</script>

<div class="trainer-header">
  <div class="trainer-image">
    <img src="{PUBLIC_BASE_URL}{trainer.image}" alt={trainer.name} />
  </div>
  <div class="trainer-info">
    <h1 class="trainer-name">{trainer.name}</h1>
    <p class="trainer-rank">{trainer.rank}</p>
    <p class="trainer-id">Trainer ID: {trainer.trainerId}</p>
    <a href="/trainers" class="back-link">← Back to Trainers</a>
  </div>
</div>

<style>
  .trainer-header {
    display: flex;
    gap: 3rem;
    margin-bottom: 4rem;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .trainer-image {
    flex-shrink: 0;
  }

  .trainer-image img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .trainer-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .trainer-name {
    color: #2e7d32;
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }

  .trainer-rank {
    color: #4caf50;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    padding: 0.5rem 1rem;
    background: #e8f5e8;
    border-radius: 25px;
  }

  .trainer-id {
    color: #757575;
    font-size: 1.1rem;
    margin: 0 0 2rem 0;
  }

  .back-link {
    color: #4caf50;
    text-decoration: none;
    font-weight: 500;
  }

  .back-link:hover {
    color: #2e7d32;
    text-decoration: underline;
  }
</style>