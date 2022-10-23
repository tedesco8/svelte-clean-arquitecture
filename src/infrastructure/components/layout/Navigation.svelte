<script>
  export let logo, routes;
  import { Link, navigate } from "svelte-routing";

  const handleLogoutClick = () => {
    navigate("/", { replace: true });
  };
</script>

<div class="navigation">
  <div class="logo-container">
    {#if logo}
      <img src={logo} alt="logo" />
    {/if}
  </div>
  <ul class="ul-nav">
    {#each routes as route}
      <li class="li-nav">
        <Link to={route.url}>
          <div class="a-nav">
            {route.displayName}
          </div>
        </Link>
      </li>
    {/each}
    <li class="li-nav">
      <Link>
        <a class="a-nav" on:click={handleLogoutClick}> Cerrar sesión </a>
      </Link>
    </li>
    <li class="li-nav">
      <a class="a-nav" href="none"> Ayuda en línea </a>
    </li>
  </ul>
</div>

<style>
  .navigation {
    padding-left: 0px;
  }
  .logo-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .logo-container img {
    width: 100%;
    height: 100px;
  }
  .ul-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    position: absolute;
    width: 219px;
    height: 726px;
  }
  .li-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 54px;
    width: 219px;
    mix-blend-mode: normal;
    border-radius: 5px;
    cursor: pointer;
  }

  li:hover {
    background: linear-gradient(
      86.54deg,
      rgba(255, 255, 255, 0.6825) -0.21%,
      rgba(255, 255, 255, 0.2775) 100%
    );
  }

  .a-nav {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: var(--primaryB);
    padding-left: 7px;
    margin-right: 15.5px;
    margin-top: 16px;
    margin-bottom: 17px;
  }
</style>
