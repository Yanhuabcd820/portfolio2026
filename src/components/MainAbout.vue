<script setup>
import { getImage } from "@/utils/getImage.js";
</script>
<template>
  <div class="MainAbout">
    <div class="container">
      <div class="about-bg-deco">
        <img :src="getImage(`about-deco-3.png`)" alt="" />
      </div>
      <h2 class="vertical">ABOUT</h2>
      <div class="about-content">
        <div class="about-avatar">
          <img :src="getImage(`about-avatar.png`)" alt="" />
        </div>
        <div class="about-text">
          <h3>黃彥華</h3>
          <p>目前正在尋找前端工程師的職缺。</p>
          <p>
            使用 Vue 3 框架進行網站開發，熟練運用 HTML / CSS /
            JavaScript，並協作串接 RESTful API。
          </p>
          <p>
            擁有平面設計經驗，具設計思維與美感，在切版中高度還原視覺細節，並從工程角度給予設計端可行性建議，減少溝通成本。
          </p>
          <p>
            使用 Ai 輔助工具 (如 Figma MCP / Plugins)
            加速開發流程，並確保還原度與響應式代碼的品質。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainAbout {
  overflow-x: clip;
  .container {
    padding: 8% 0 10%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    position: relative;
    .about-bg-deco {
      position: absolute;
      top: -15%;
      right: -10%;
      width: 80%;
      aspect-ratio: 1 / 1;
      z-index: -1;
      will-change: transform;
    }
  }
  h2 {
    color: var(--green);
    display: inline-block;
    padding-right: 5%;
  }

  .about {
    &-content {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    &-avatar {
      width: 29%;
      max-width: 328px;
      margin-right: 2.7%;
      position: relative;
      &::after {
        position: absolute;
        bottom: -40%;
        right: -50%;
        content: "";
        background-image: url("../assets/images/about-deco-2.png");
        background-size: cover;
        width: 120%;
        aspect-ratio: 401 / 265;
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    &-text {
      display: flex;
      flex-direction: column;
      gap: 16px;
      position: relative;
      z-index: 1;
      width: 52%;
      max-width: 508px;
      h3 {
        font-size: 42px;
        font-weight: bold;
        padding-bottom: 36px;
        padding-bottom: 12px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .MainAbout {
    h2 {
      padding-right: 3%;
    }
    .about {
      &-text {
        width: 60%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .MainAbout {
    .container {
      flex-direction: column;
    }
    .about-bg-deco {
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 160%;
      opacity: 0.6;
    }
    h2 {
      padding-right: 3%;
    }
    .about {
      &-content {
        flex-direction: column;
      }
      &-avatar {
        width: 40%;
      }
      &-text {
        width: 90%;
      }
    }
  }
}
</style>
