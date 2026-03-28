<script setup>
import { getImage } from "@/utils/getImage.js";
</script>
<template>
  <div class="MainWork">
    <div class="container">
      <div class="text-container">
        <div class="text-wrap">
          <h2>WORK</h2>
          <h2>WORK</h2>
          <h2>WORK</h2>
          <h2>WORK</h2>
        </div>
      </div>
      <div class="work-content">
        <div class="work-item">
          <div class="work-image">
            <img :src="getImage(`work-1.png`)" alt="" />
          </div>
          <div class="work-text">
            <h3>作品集網站</h3>
            <div class="work-description">
              <p>匯集過往的作品，並使用 Vue3 製作本作品集。</p>
              <p>使用vue-federation整合header，減少日後修改表頭的時間。</p>
              <p>於本專案負責 Vue3、切版 (html/css/Javascript)、UI/UX 設計。</p>
            </div>
            <div class="work-btn-wrap">
              <a href="#" target="_blank">DEMO</a>
              <a href="#" target="_blank">GITHUB</a>
            </div>
          </div>
        </div>
        <div class="work-item">
          <div class="work-image">
            <img :src="getImage(`work-1.png`)" alt="" />
          </div>
          <div class="work-text">
            <h3>作品集網站</h3>
            <div class="work-description">
              <p>匯集過往的作品，並使用 Vue3 製作本作品集。</p>
              <p>使用vue-federation整合header，減少日後修改表頭的時間。</p>
              <p>於本專案負責 Vue3、切版 (html/css/Javascript)、UI/UX 設計。</p>
            </div>
            <div class="work-btn-wrap">
              <a href="#" target="_blank">DEMO</a>
              <a href="#" target="_blank">GITHUB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainWork {
  background-color: var(--orange);
  position: relative;
  overflow-x: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 5%;
    bottom: 5%;
    width: 40%;
    aspect-ratio: 574 / 217;
    background-image: url("../assets/images/work-deco.png");
    background-size: cover;
  }
  .container {
    max-width: 1000px;
    padding: 11% 0 23%;
  }
  .text {
    &-container {
      text-align: center;
      padding-bottom: 52px;
    }
    &-wrap {
      display: inline-block;
      position: relative;
      z-index: 0;
    }
  }
  h2 {
    color: var(--yellow);
    text-shadow:
      2px 2px var(--black),
      2px -2px var(--black),
      -2px 2px var(--black),
      -2px -2px var(--black);
    &:nth-of-type(2) {
      z-index: 0;
    }
    &:nth-of-type(2) {
      top: -8px;
      left: -10px;
      position: absolute;
      z-index: -1;
    }
    &:nth-of-type(3) {
      top: -16px;
      left: -18px;
      position: absolute;
      z-index: -2;
    }
    &:nth-of-type(4) {
      top: -24px;
      left: -26px;
      position: absolute;
      z-index: -3;
    }
  }
  .work {
    &-content {
      display: flex;
      gap: 80px;
      width: max-content;
    }
    &-item {
      padding: 16px;
      border: 1px solid var(--black);
      background-color: var(--yellow);
      display: flex;
      gap: 32px;
      box-shadow:
        12px 12px 0 0 var(--yellow),
        13px 13px 0 0 var(--black),
        11px 11px 0 0 var(--black),
        13px 11px 0 0 var(--black),
        11px 13px 0 0 var(--black);
    }
    &-image {
      width: 480px;
    }
    &-text {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      h3 {
        font-size: 32px;
        font-weight: bold;
      }
    }
    &-description {
      padding-top: 20px;

      p {
        line-height: 1.5;
        &:nth-last-of-type(1) {
          padding-top: 20px;
        }
      }
    }
    &-btn-wrap {
      display: flex;
      gap: 24px;
      font-size: 20px;
      margin-top: 40px;
      flex-grow: 1;
      a {
        align-self: flex-end;
        border: 1px solid var(--black);
        padding: 12px 28px;
        transition: background-color 0.3s;
        &:hover {
          background-color: var(--black);
          color: var(--yellow);
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .MainWork {
    &::after {
      width: 60%;
    }
    .container {
      padding: 15% 0 40%;
    }
    .work {
      &-content {
        gap: 40px;
        margin-left: calc((100% - 486px) / 2);
      }
      &-item {
        width: 420px;
        flex-direction: column;
        padding: 24px 32px;
        gap: 12px;
      }
      &-image {
        width: 100%;
      }
      &-text {
        h3 {
          font-size: 28px;
        }
      }
      &-description {
        padding-top: 12px;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .MainWork {
    &::after {
      width: 90%;
    }
    .container {
      padding: 30% 0 60%;
    }
    .work {
      &-content {
        margin-left: calc((100% - 342px) / 2);
      }
      &-item {
        width: 308px;
        padding: 16px;
      }
    }
  }
}
</style>
