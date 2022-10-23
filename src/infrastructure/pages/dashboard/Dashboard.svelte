<script>
  import { onMount } from "svelte";
  import { breadCumps } from "../../store/layout/layoutStore";

  onMount(() => {
    $breadCumps = "Dashboard";
  });
</script>

<div class="dashboard">
  <section >
    <header class="page-header">
      <h1>Dashboard</h1>
    </header>
  </section>
</div>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .page-header {
    margin: 0;
    height: 28px;
  }
  .page-header h1 {
    font-family: "Quicksand" !important;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    color: var(--primaryB);
  }
</style>
