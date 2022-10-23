<script>
  import { Navigation, TopBar, ContentBox } from "./index";
  import { Row, Col } from "../grid/";
  import Routes from "../../routes";
</script>

<div class="main-container">
  <Row filler paddingTop="30px">
    <Col cols="2">
      <Row justifyContent="start">
        <Navigation logo="https://res.cloudinary.com/ddzlqebet/image/upload/v1595882498/TedescoDev/tedescodev_fs4b5s.png" routes={Routes} />
      </Row>
    </Col>
    <Col cols="10">
      <Row paddingBottom="5px">
        <TopBar
          userName="tedescodev"
          userImage="/avatarPablo.jpg"
        />
      </Row>
      <Row>
        <ContentBox>
          <slot />
        </ContentBox>
      </Row>
    </Col>
  </Row>
</div>

<style>
  .main-container {
    width: 100%;
    min-height: 100vh;
    font-family: Roboto;
    background: var(--gradientB);
  }
</style>
