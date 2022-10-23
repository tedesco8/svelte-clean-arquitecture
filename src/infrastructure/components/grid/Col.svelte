<script lang="ts">
  export let cols,
          textAlign = null,
          alignItems = null;
</script>

<div class="col"
   style:width={cols ? `${(cols * 25) / 3}%` : "100%"}
     style:text-align={textAlign ? textAlign : "center"}
     style:align-items={alignItems && alignItems}
>
  <slot />
</div>

<style>
  .col {
    text-align: center;
    align-items: center;
    width: 100%;
    display: inline-block;
    flex-direction: column;
    height: 100%;
    padding-right: 0;
  }
</style>
