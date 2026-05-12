<script>
  import "$lib/css/app.css";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();
</script>

<Navbar />

<div class="container">
  {@render children()}
</div>

<style>
  .container {
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
</style>
