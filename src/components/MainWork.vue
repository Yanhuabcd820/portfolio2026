<script setup>
import { ref, onMounted, useTemplateRef } from "vue";
import { getImage } from "@/utils/getImage.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workContent = ref(null);
const workItems = useTemplateRef("workItem");

let workContentWidth;
let workItemsWidth;

const setupHorizontalScroll = () => {
  if (!workContent.value) return;

  const refresh = () => {
    workContentWidth = workContent.value.offsetWidth;
    workItemsWidth = workItems.value[0]?.offsetWidth;
  };

  refresh();

  gsap.to(workContent.value, {
    x: () => (workContentWidth - workItemsWidth) * -1,
    ease: "none",
    scrollTrigger: {
      trigger: ".MainWork",
      start: "top top",
      end: () => `+=${workContentWidth}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  ScrollTrigger.addEventListener("refreshInit", refresh);
};

onMounted(() => {
  setupHorizontalScroll();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".MainWork",
      start: "top center",
      end: () => `+=${workContentWidth + window.innerHeight}`,
      toggleActions: "play reverse play reverse",
    },
  });
  tl.to(".MainWork .text-image", {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
  })
    .from(
      ".MainWork .text-image:nth-of-type(2)",
      {
        top: 0,
        left: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".MainWork .text-image:nth-of-type(3)",
      {
        top: 0,
        left: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".MainWork .text-image:nth-of-type(4)",
      {
        top: 0,
        left: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.6",
    );
});

const works = [
  {
    title: "活動管理平台",
    description: [
      "使用 Vue3 與 vue-router 製作多頁 SPA",
      "串接 RESTful API，確保資訊即時更新",
      "使用 vue federation 技術，將共用 Header 元件串連 6 個網站，提升多專案維運效率",
    ],
    image: "work-1.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "全家 二度就業招募網頁",
    description: [
      "使用 Vue3 開發",
      "使用 vue federation，將共用 Header 串連 6 個網站，提升多專案維運效率",
      "靜態資料抽離，讓非技術人員也能輕鬆維護內容",
    ],
    image: "work-2.png",
    demoLink: "https://events.104.com.tw/familymart/20250217100325/",
    githubLink: null,
  },
  {
    title: "婦權促進發展基金會 官網",
    description: [
      "使用 Vue3 與 vue-router 製作多頁 SPA",
      "串接 RESTful API，確保資訊即時更新",
      "使用 vue federation 技術，將共用 Header 元件串連 6 個網站，提升多專案維運效率",
    ],
    image: "work-3.png",
    demoLink: "https://events.104.com.tw/familymart/20250318111515/",
    githubLink: null,
  },
  {
    title: "作品集網站",
    description: [
      "使用 Vue3 作為主要開發框架，提升組件化與維護性",
      "使用 GSAP 製作滾動與進場動態效果，提升視覺效果與互動性",
    ],
    image: "work-4.png",
    demoLink: "https://github.com/Yanhuabcd820/portfolio2026",
    githubLink: "https://yanhuabcd820.github.io/portfolio2026/",
  },
];
</script>
<template>
  <div class="MainWork" id="work">
    <div class="container">
      <div class="text-container">
        <div class="text-wrap">
          <div class="text-image">
            <img :src="getImage(`work-title.png`)" alt="Work" />
          </div>
          <div class="text-image">
            <img :src="getImage(`work-title.png`)" alt="Work" />
          </div>
          <div class="text-image">
            <img :src="getImage(`work-title.png`)" alt="Work" />
          </div>
          <div class="text-image">
            <img :src="getImage(`work-title.png`)" alt="Work" />
          </div>
        </div>
      </div>
      <div class="work-content" ref="workContent">
        <div
          class="work-item"
          v-for="(work, index) in works"
          :key="`work-${index}`"
          ref="workItem"
        >
          <div class="work-image">
            <img :src="getImage(work.image)" :alt="work.title" />
          </div>
          <div class="work-text">
            <h3>{{ work.title }}</h3>
            <ul class="work-description">
              <li v-for="(desc, idx) in work.description" :key="`desc-${idx}`">
                {{ desc }}
              </li>
            </ul>
            <div class="work-btn-wrap">
              <a v-if="work.demoLink" :href="work.demoLink" target="_blank"
                >DEMO</a
              >
              <a v-if="work.githubLink" :href="work.githubLink" target="_blank"
                >GITHUB</a
              >
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
  overflow-x: clip;

  .container {
    padding: 11% 0 10%;
    max-width: 780px;
    height: 100vh;
    position: sticky;
    top: 0;
    position: relative;
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
    &-image {
      width: 340px;
      opacity: 0;
      &:nth-of-type(1) {
        top: 0px;
        left: 0px;
      }
      &:nth-of-type(2) {
        top: 8px;
        left: 10px;
        position: absolute;
        z-index: 1;
      }
      &:nth-of-type(3) {
        top: 16px;
        left: 18px;
        position: absolute;
        z-index: 2;
      }
      &:nth-of-type(4) {
        top: 24px;
        left: 26px;
        position: absolute;
        z-index: 3;
      }
    }
  }
  .work {
    &-content {
      display: flex;
      gap: 80px;
      width: max-content;
      position: relative;
    }
    &-item {
      padding: 20px 42px 20px 20px;
      border: 1px solid var(--black);
      background-color: var(--yellow);
      display: flex;
      align-items: center;
      gap: 32px;
      width: 720px;
      box-shadow:
        12px 12px 0 0 var(--yellow),
        13px 13px 0 0 var(--black),
        11px 11px 0 0 var(--black),
        13px 11px 0 0 var(--black),
        11px 13px 0 0 var(--black);
    }

    &-image {
      overflow: hidden;
      width: 320px;
      flex-shrink: 0;
      aspect-ratio: 5.5 / 3;
      background-color: var(--white);
    }
    &-text {
      padding-block: 16px;
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
      li {
        list-style: disc;
        line-height: 1.75;
      }
    }
    &-btn-wrap {
      display: flex;
      gap: 24px;
      font-size: 20px;
      margin-top: 24px;
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
@media screen and (max-width: 960px) {
  .MainWork {
    .container {
      max-width: 656px;
    }
    .work {
      &-item {
        padding: 16px 20px 16px 16px;
        width: 620px;
        gap: 20px;
      }
      &-text {
        padding-block: 0;
        h3 {
          font-size: 24px;
        }
      }
      &-description {
        padding-top: 4px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .MainWork {
    .container {
      padding: 15% 0 20%;
    }
    .text {
      &-image {
        width: 272px;
      }
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
        box-shadow:
          8px 8px 0 0 var(--yellow),
          9px 9px 0 0 var(--black),
          7px 7px 0 0 var(--black),
          9px 7px 0 0 var(--black),
          7px 9px 0 0 var(--black);
      }
      &-image {
        width: 100%;
      }
      &-btn-wrap {
        justify-content: center;
        margin-top: 16px;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .MainWork {
    .container {
      padding: 20% 0 20%;
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
