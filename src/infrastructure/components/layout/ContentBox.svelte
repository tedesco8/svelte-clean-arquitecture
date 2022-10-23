<script>
  import Box from "./Box.svelte"
</script>
<div class="content-box">
  <Box>
    <slot />
  </Box>
</div>

<style>
  .content-box {
    display: flex;
    position: relative;
    width: 100%;
    height: 80vh;
    flex-direction: column;
    justify-content: flex-start;
    background-color: transparent;
  }
</style>
