<script setup>
import { ref, onMounted, onUnmounted, useTemplateRef, watch } from "vue";
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
      start: "top top-=300vh",
      end: "bottom bottom+=200vh",
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
  tl.to(".MainWork h2", {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
  })
    .from(
      ".MainWork h2:nth-of-type(2)",
      {
        top: 0,
        left: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".MainWork h2:nth-of-type(3)",
      {
        top: 0,
        left: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".MainWork h2:nth-of-type(4)",
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
    title: "作品集網站",
    description: [
      "匯集過往的作品，並使用 Vue3 製作本作品集。",
      "使用vue-federation整合header，減少日後修改表頭的時間。",
      "於本專案負責 Vue3、切版 (html/css/Javascript)、UI/UX 設計。",
    ],
    image: "work-1.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "作品集網站",
    description: [
      "匯集過往的作品，並使用 Vue3 製作本作品集。",
      "使用vue-federation整合header，減少日後修改表頭的時間。",
      "於本專案負責 Vue3、切版 (html/css/Javascript)、UI/UX 設計。",
    ],
    image: "work-1.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "作品集網站",
    description: [
      "匯集過往的作品，並使用 Vue3 製作本作品集。",
      "使用vue-federation整合header，減少日後修改表頭的時間。",
      "於本專案負責 Vue3、切版 (html/css/Javascript)、UI/UX 設計。",
    ],
    image: "work-1.png",
    demoLink: "#",
    githubLink: "#",
  },
];
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
              <a :href="work.demoLink" target="_blank">DEMO</a>
              <a :href="work.githubLink" target="_blank">GITHUB</a>
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
    max-width: 1000px;
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
  }
  h2 {
    color: var(--yellow);
    opacity: 0;
    text-shadow:
      2px 2px var(--black),
      2px -2px var(--black),
      -2px 2px var(--black),
      -2px -2px var(--black);
    will-change: transform;
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
      will-change: transform;
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
    .container {
      padding: 15% 0 20%;
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
    .container {
      padding: 30% 0 20%;
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
