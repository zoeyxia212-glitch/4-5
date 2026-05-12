<script>
  // ==============================
  // Exercise Three：单个训练师卡片
  // Exercise Four：点击跳转详情页 /trainers/[trainerId]
  // Exercise Two：收藏功能（共享状态）
  // ==============================
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import { goto } from "$app/navigation";
  import { favouriteTrainerStore } from "$lib/js/favourite-trainer.svelte.js";
  import Heart from "./Heart.svelte";

  let { trainer } = $props();
  let isFavourite = $derived(favouriteTrainerStore.trainerId === trainer?.trainerId);

  // 点击卡片跳转详情
  function handleCardClick() {
    goto(`/trainers/${trainer.trainerId}`);
  }

  // 键盘支持
  function handleKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goto(`/trainers/${trainer.trainerId}`);
    }
  }

  // 点击爱心切换收藏
  function handleFavouriteButtonClick(event) {
    event.stopPropagation();
    if (isFavourite) {
      favouriteTrainerStore.trainerId = null;
    } else {
      favouriteTrainerStore.trainerId = trainer.trainerId;
    }
  }
</script>

<div
  class="trainer-card"
  role="button"
  tabindex="0"
  aria-label="View details for {trainer.name}"
  onclick={handleCardClick}
  onkeydown={handleKeydown}
>
  <div class="card-image">
    <img src="{PUBLIC_BASE_URL}{trainer.image}" alt={trainer.name} loading="lazy" />
  </div>
  <div class="card-content">
    <h3 class="trainer-name">
      {trainer.name}
      <button
        class="heart-button {isFavourite ? 'favorite' : ''}"
        onclick={handleFavouriteButtonClick}
        aria-label={isFavourite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart isFilled={isFavourite} color={isFavourite ? "#ff4757" : "#ddd"} />
      </button>
    </h3>
    <p class="trainer-rank">{trainer.rank}</p>
    <p class="trainer-id">ID: {trainer.trainerId}</p>
    <a href="/trainers/{trainer.trainerId}" class="sr-only">View {trainer.name} details</a>
  </div>
</div>

<style>
  .trainer-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .trainer-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  .card-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: linear-gradient(45deg, #f5f5f5, #e8f5e8);
  }
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-content { padding: 1.5rem; }
  .trainer-name { color: #2e7d32; font-size: 1.5rem; }
  .trainer-rank { color: #4caf50; }
  .heart-button { background: none; border: none; cursor: pointer; }
</style>