<div class="hamburguer-icon">
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-labelledby="verticalIconTitle"
  >
    <title id="verticalIconTitle">Hamburguer Icon</title>
    <path d="M17 18L17 6M12 18L12 6M7 18L7 6" />
  </svg>
</div>

<style>
  .hamburguer-icon {
    background: var(--white);
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
  }

  .hamburguer-icon svg {
    width: 34px;
    height: 34px;
    stroke: var(--primaryB);
    stroke-width: 1;
    stroke-linecap: square;
    stroke-linejoin: miter;
    fill: none;
    color: var(--primaryB);
    transform: rotate(90deg);
  }
</style>
