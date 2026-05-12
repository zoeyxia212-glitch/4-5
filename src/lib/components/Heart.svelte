<script>
  let { isFilled = false, color = "#ddd" } = $props();
</script>

<svg
  width="20"
  height="18"
  viewBox="0 0 20 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="heart-svg"
>
  <path
    d="M10 17.27L8.59 16.01C3.4 11.36 0 8.27 0 4.5C0 1.99 2.01 0 4.5 0C5.9 0 7.24 0.65 8.05 1.65L10 3.85L11.95 1.65C12.76 0.65 14.1 0 15.5 0C17.99 0 20 1.99 20 4.5C20 8.27 16.6 11.36 11.41 16.01L10 17.27Z"
    fill={isFilled ? color : "none"}
    stroke={color}
    stroke-width="1.5"
  />
</svg>

<style>
  .heart-svg {
    transition: all 0.2s ease;
  }
</style>
