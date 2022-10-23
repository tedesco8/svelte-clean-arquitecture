<script>
  import { afterUpdate, tick } from "svelte";

  export let height = null,
    opacity = null,
    flexDirection = null,
    boxShadow = null,
    background = null,
    padding = null,
    border = null;

  afterUpdate(async() => {
    await tick();
    console.log("after update opacity:", opacity);
  });
</script>

<div
  class="box"
  style:height={!height ? "80vh" : height}
  style:opacity={!opacity ? "none" : opacity}
  style:flex-direction={!flexDirection ? "column" : flexDirection}
  style:box-shadow={!boxShadow ? "0px 3px 6px #00000035" : boxShadow}
  style:background={!background ? "var(--gradientC)" : background}
  style:padding={!padding ? "4px 15px 4px 20px" : padding}
  style:border={!border ? "none" : border}
>
  <slot />
</div>

<style>
  .box {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 313px;
    justify-content: flex-start;
    border-radius: 8px;
    box-sizing: border-box;
  }
</style>
