<script lang="ts">
  export let filler = null,
    background = null,
    color = null,
    justifyContent = null,
    alignItems = null,
    paddingTop = null,
    paddingLeft = null,
    paddingRight = null,
    paddingBottom = null,
    textAlign = null;
</script>

<div
  class="row"
  style:flex={filler ? 1 : null}
  style:background={background ? background : null}
  style:color={color ? color : "var(--primaryB)"}
  style:justify-content={justifyContent ? justifyContent : "center"}
  style:text-align={textAlign ? textAlign : "center"}
  style:align-items={alignItems && alignItems}
  style:padding-top={paddingTop ? paddingTop : 0}
  style:padding-left={paddingLeft ? paddingLeft : "20px"}
  style:padding-right={paddingRight ? paddingRight : "20px"}
  style:padding-bottom={paddingBottom ? paddingBottom : 0}
>
  <slot />
</div>

<style>
  .row {
    font-size: 36px;
    display: flex;
    flex-direction: row;
  }
</style>
