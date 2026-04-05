<script setup>
import { onMounted, useTemplateRef } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceItems = useTemplateRef("experienceItem");

onMounted(() => {
  experienceItems.value.forEach((item) => {
    gsap.from(item, {
      skewY: 10,
      opacity: 0,
      y: 200,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
  });
});

const experiences = [
  {
    company: "一零四資訊科技股份有限公司",
    position: "前端工程師",
    duration: "2023/05 - 2025/07",
    description:
      "與企劃團隊緊密協作，參與整合性招募平台開發，進而讓企業大幅提升招募精準度。",
    responsibilities: [
      "以 Vue3 進行整合招募網站功能開發，並串接 RESTful API",
      "使用 scss 搭配原子化 css 工具 (如 unocss) 進行 RWD 跨平台響應式網頁設計",
      "實作 Vue Federation，整合 6 個網站 header 組件，增加維運效率",
      "實作網頁靜態資料分離機制，將非技術性資訊抽離至設定檔，使非技術人員能自主更新內容，降低研發人力耗損",
      "執行 GTM 追蹤碼埋設與維護，並協助 GA4 數據判讀並優化網頁",
      "從零建立工作驗收流程，維持產品穩定度",
    ],
  },
  {
    company: "伯納廣告設計工作室",
    position: "網頁設計師",
    duration: "2018/02 - 2022/09",
    description:
      "曾經將基金會網頁的網站重新翻新，使網站瀏覽者在網站的總停留時間提升 60%；網站自設評分表的使用率提升 50%。線上募款專案上線 5 個月，共募得 220 萬元資金。",
    responsibilities: [
      "以 HTML / CSS / JavaScript 進行切版及 RWD 開發",
      "使用 Git 版本控制，並與後端工程師進行專案協作",
      "針對客戶活動製作並發行電子報",
      "進行 WordPress 的資料庫網站建置",
      "製作網站 UI/UX 的 Wireframe",
      "主要客戶有 Ansys 安矽思科技股份有限公司、Teradata 天睿資訊公司、屏東基督教醫院、畢嘉士基金會、財團法人多層次傳銷保護基金會",
    ],
  },
  {
    company: "伯納廣告設計工作室",
    position: "資深平面設計師",
    duration: "2016/02 - 2018/02",
    description: "負責平面設計專案，與客戶合作創造視覺效果。",
    responsibilities: [
      "與客戶溝通討論平面設計內容、點子發想",
      "視覺化客戶需求，如：活動主視覺、網頁banner、手冊、文宣 DM",
      "依客戶需求發包平面製作物",
      "協助大型活動進出場",
      "主要客戶有全家便利商店、台灣微軟、Yahoo 雅虎、Ansys 安矽思科技股份有限公司、中華奧林匹克委員會、關島觀光局",
    ],
  },
];
</script>
<template>
  <div class="MainExperience" id="experience">
    <div class="container" ref="experienceContainer">
      <div class="container-inner">
        <h2 class="vertical">
          <span>EXPE<span>-</span></span>
          <span>RIENCE</span>
        </h2>
        <div class="experience-content">
          <div
            class="experience-item"
            v-for="(experience, index) in experiences"
            :key="`experience-${index}`"
            ref="experienceItem"
          >
            <div class="experience-work-title">
              <p>{{ experience.duration }}</p>
              <h3>
                {{ experience.position }}<span>/ {{ experience.company }}</span>
              </h3>
            </div>
            <p>
              {{ experience.description }}
            </p>
            <div class="experience-work-description">
              <p>工作內容：</p>
              <ul>
                <li
                  v-for="(responsibility, idx) in experience.responsibilities"
                  :key="`responsibility-${idx}`"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainExperience {
  overflow: hidden;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--yellow),
    var(--yellow) 4px,
    var(--green) 4px,
    var(--green) 36px
  );

  .container {
    max-width: 1240px;
    padding: 1% 0 13%;
    &-inner {
      margin: 16% 0 0;
      position: relative;
      display: flex;
      &::after {
        position: absolute;
        right: 0;
        top: 0%;
        width: 97%;
        height: 100%;
        content: "";
        background-color: var(--green);
      }
    }
  }
  h2 {
    color: var(--white);
    position: relative;
    z-index: 1;
    padding: 8% 0 0 7%;
    > span {
      display: block;
    }
  }
  .experience {
    &-content {
      position: relative;
      z-index: 1;
      width: 65%;
      max-width: 832px;
      margin: -6% 0 -6% 10%;
      color: var(--white);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-item {
      background-color: var(--deep-green);
      padding: 48px 36px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &-work-title {
      p {
        display: inline-block;
        font-size: 16px;
        padding: 4px 8px;
        background-color: var(--yellow);
        color: var(--black);
      }
      h3 {
        padding-top: 12px;
        font-size: 32px;
        line-height: 1;
        color: var(--yellow);
        font-weight: bold;
        display: flex;
        flex-wrap: wrap;
        line-height: 1.25;
        span {
          font-size: 18px;
          padding-left: 8px;
          font-weight: normal;
        }
      }
    }
    &-work-description {
      li {
        list-style-type: disc;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .MainExperience {
    .experience {
      &-content {
        width: 70%;
        margin: -6% 0 -6% 5%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .MainExperience {
    .container {
      padding: 1% 0 28%;
      &-inner {
        flex-direction: column;
      }
    }
    .experience {
      &-content {
        width: 95%;
        margin: 5% 0 -6% 5%;
      }
    }
  }
}
</style>
