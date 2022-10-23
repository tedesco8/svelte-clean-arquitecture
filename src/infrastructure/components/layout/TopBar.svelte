<script lang="ts">
  // import { onMount } from "svelte";

  export let userImage, userName;

  import { Col } from "../grid";
  import { Avatar } from "../ui";
  import { HamburgerIcon } from "../icons";
  import { breadCumps } from "../../store/layout/layoutStore";
  // onMount(() => {
  //   const img = new Image();
  //   img.src = logo;
  // });

  const breadCumpsWrapper = (br) => {
    let htmlToBreadCump = "";
    const breadCump = br.split("/");
    for (const section in breadCump) {
      if (section === "0") {
        htmlToBreadCump = `
        <p style=margin:0;color:#909090;font-family:"Roboto";font-style:normal;font-weight:400;font-size:24px;line-height:150%;>
          ${breadCump[section]}
        </p>`;
      } else {
        htmlToBreadCump = `${htmlToBreadCump} <p style=margin:0;color:#2D3748;font-family:"Roboto";font-style:normal;font-weight:400;font-size:16px;line-height:150%;>
          / ${breadCump[section]}
        </p>`;
      }
    }
    return htmlToBreadCump;
  };
</script>

<div class="top-var">
  <Col cols="6">
    <div class="align-start">
      <div class="container-breadCump">
        {@html $breadCumps ? breadCumpsWrapper($breadCumps) : ""}
      </div>
    </div>
  </Col>
  <Col cols="6">
    <div class="align-end">
      <div class="container-between">
        <div class="container-avatar">
          {#if userImage}
            <!-- <img src={userImage} alt="userImage" /> -->
            <Avatar avatar={userImage} />
          {/if}
        </div>
        <div class="container-name">
          {#if userName}
            <p>{userName}</p>
          {/if}
        </div>
        <div class="container-icon">
          <HamburgerIcon />
        </div>
      </div>
    </div>
  </Col>
</div>

<style>
  .top-var {
    height: 10vh;
    max-height: 60px;
    padding: 0 15px;
    width: 100%;
    display: flex;
  }

  .container-avatar {
    max-width: 34px;
    max-height: 34px;
  }

  .container-name {
    color: #909090;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    margin-left: 20px;
  }
  .container-icon {
    margin-left: 20px;
  }
  .align-start {
    display: flex;
    justify-content: flex-start;
  }

  .container-breadCump {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .align-end {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  .container-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
