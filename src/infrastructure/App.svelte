<script>
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-routing";

  import { MainContainer } from "./components/layout";
  import { DashboardPage } from "./pages";

  import "./app.css";
  onMount(() => {
    console.log("Mounted")
  });
</script>

<Router>
  <MainContainer>
    <Route path="/">
      <DashboardPage />
    </Route>
  </MainContainer>
</Router>
