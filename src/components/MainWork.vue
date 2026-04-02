<script setup>
import { ref, onMounted, useTemplateRef, watch } from "vue";
import { getImage } from "@/utils/getImage.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@vueuse/core";

const { width: ww } = useWindowSize();

gsap.registerPlugin(ScrollTrigger);

const workContent = ref(null);
const workItems = useTemplateRef("workItem");

const updateWorkContentAnimation = () => {
  const workContentWidth = workContent.value.offsetWidth;
  const workItemsWidth = workItems.value[0]?.offsetWidth;
  gsap.to(".work-content", {
    x: (workContentWidth - workItemsWidth) * -1,
    scrollTrigger: {
      trigger: ".MainWork",
      start: "top top-100vh",
      end: "bottom bottom+100vh",
      scrub: true,
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".MainWork",
      start: "top center",
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
};
watch(
  () => ww.value,
  () => {
    updateWorkContentAnimation();
  },
);
onMounted(() => {
  updateWorkContentAnimation();
});

const works = [
  {
    title: "活動管理平台",
    description: [
      "使用 Vue 3 與 vue-router 製作多分頁 SPA",
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
      "使用 Vue 3 開發",
      "使用 vue federation 技術，將共用 Header 元件串連 6 個網站，提升多專案維運效率",
      "靜態資料抽離，讓非技術人員也能輕鬆維護內容",
    ],
    image: "work-2.png",
    demoLink: "https://events.104.com.tw/familymart/20250217100325/",
    githubLink: null,
  },
  {
    title: "婦權促進發展基金會 官網",
    description: [
      "使用 Vue 3 與 vue-router 製作多分頁 SPA",
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
      "使用 Vue 3 作為主要開發框架，提升組件化與維護性",
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
        <div class="work-deco">
          <img :src="getImage(`work-deco.png`)" alt="Decoration" />
        </div>
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
            <div class="work-description">
              <p v-for="(desc, idx) in work.description" :key="`desc-${idx}`">
                {{ desc }}
              </p>
            </div>
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
  height: 800vh;

  .container {
    padding: 11% 0 10%;
    max-width: 800px;
    height: 100vh;
    position: sticky;
    top: 0;
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
    &-deco {
      position: absolute;
      left: 0%;
      bottom: -200px;
      width: 420px;
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

      p {
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
      &-deco {
        width: 400px;
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
        padding-block: 0;
        h3 {
          font-size: 24px;
        }
      }
      &-description {
        padding-top: 12px;
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
      &-deco {
        width: 300px;
      }
      &-item {
        width: 308px;
        padding: 16px;
      }
    }
  }
}
</style>
