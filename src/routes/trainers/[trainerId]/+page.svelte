<script>
  // ==============================
  // Exercise Four - 训练师详情页
  // 动态路由：/trainers/[trainerId]
  // 数据来自 +page.js 的 load()
  // ==============================
  import TrainerHeader from "$lib/components/TrainerHeader.svelte";
  import PokemonCard from "$lib/components/PokemonCard.svelte";

  let { data } = $props();
  let trainer = $derived(data.trainer);
  let error = $derived(data.error);
</script>

<svelte:head>
  <title>{trainer ? `${trainer.name} - Trainer Details` : "Loading Trainer..."}</title>
</svelte:head>

<div class="trainer-detail-container">
  {#if error}
    <div class="error-message">
      <h1>❌ Error</h1>
      <p>{error}</p>
      <a href="/trainers" class="back-link">← Back to Trainers</a>
    </div>
  {:else if trainer}
    <TrainerHeader {trainer} />

    <div class="pokemon-team-section">
      <h2>Pokémon Team</h2>
      {#if trainer.team && trainer.team.length > 0}
        <div class="pokemon-grid">
          {#each trainer.team as pokemon}
            <PokemonCard {pokemon} />
          {/each}
        </div>
      {:else}
        <p class="no-pokemon">No Pokémon</p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .trainer-detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  .error-message { text-align: center; padding: 4rem 2rem; }
  .pokemon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
</style>