<script setup></script>
<template>
  <div class="MainSkill">
    <div class="container">
      <h2>SKILL</h2>
      <div class="skill-content">
        <div class="skill-item">
          <h3>平面設計</h3>
          <div class="skill-description">
            <ul>
              <li>品牌識別視覺設計</li>
              <li>獨立製作大型活動視覺、周邊製作物</li>
              <li>社群媒體行銷圖文排版</li>
              <li>使用軟體：Illustrator、Photoshop、Indesign、Animate</li>
            </ul>
          </div>
        </div>
        <div class="skill-item">
          <h3>UI/UX 網頁設計</h3>
          <div class="skill-description">
            <ul>
              <li>製作 wireframe 並與客戶溝通討論最佳解決方案</li>
              <li>為客戶的形象網站或購物平台網站進行設計</li>
              <li>使用軟體：Figma、XD、Sketch</li>
            </ul>
          </div>
        </div>
        <div class="skill-item">
          <h3>網頁前端</h3>
          <div class="skill-description">
            <ul>
              <li>使用 Vue3 前端框架</li>
              <li>熟悉 html / CSS / JavaScript 及 RWD 跨平台響應式網頁設計</li>
              <li>使用 SCSS 預處理器加速開發</li>
            </ul>
            <ul>
              <li>串接 RESTful API</li>
              <li>vue federation 前端實作</li>
              <li>使用 Git 版控進行多人協作</li>
              <li>GTM、GA4 數據追蹤</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainSkill {
  background-color: var(--blue);
  min-height: 700px;
  overflow-x: clip;
  .container {
    max-width: 820px;
    padding: 8% 0 12%;
  }
  h2 {
    position: relative;
    z-index: 1;
    color: var(--white);
  }
  .skill {
    &-content {
      position: relative;
      margin-top: 5%;
    }
    &-item {
      max-width: 400px;
      color: var(--white);
      position: relative;
      &:nth-of-type(1) {
        transform: rotate(-4deg) translateX(calc(-50% - 100px));
        left: 50%;
      }
      &:nth-of-type(2) {
        position: absolute;
        transform: rotate(4deg) translateX(calc(-50% + 100px));
        top: 60px;
        left: 50%;
      }
      &:nth-of-type(3) {
        position: absolute;
        transform: translateX(calc(-50%));
        top: 120px;
        left: 50%;
        width: 80%;
        max-width: 560px;
      }
      h3 {
        font-size: 26px;
        padding: 12px 28px;
        background-color: var(--orange);
        font-weight: bold;
        clip-path: polygon(0 0, 60% 0%, 70% 100%, 0 100%);
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 0px;
          background-color: var(--blue);
          clip-path: polygon(
            0 0,
            calc(60% - 3px) 0%,
            calc(70% - 4px) 100%,
            0 100%
          );
          z-index: -1;
        }
      }
      .skill-description {
        border: 4px solid var(--orange);
        padding: 36px 24px;
        background-color: var(--blue);
        margin-top: -1px;
        display: flex;
        gap: 8px;
        ul {
          &:nth-of-type(2) {
            flex-shrink: 0;
          }
          li {
            list-style: square;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .MainSkill {
    .container {
      padding: 20% 0 14%;
      border: 1px solid #fac;
    }
    .skill {
      &-item {
        width: 100%;
        &:nth-of-type(1) {
          transform: rotate(-2deg) translateX(-6px);
          left: 0%;
        }
        &:nth-of-type(2) {
          transform: rotate(2deg) translateX(0px);
          top: 50px;
          left: initial;
          right: -2%;
        }
        &:nth-of-type(3) {
          transform: translateX(-50%);
          top: 105px;
          left: 50%;
          width: 94%;
        }
      }
    }
  }
}
@media screen and (max-width: 520px) {
  .MainSkill {
    .container {
      padding: 20% 0 44%;
    }
    .skill {
      &-item {
        .skill-description {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
