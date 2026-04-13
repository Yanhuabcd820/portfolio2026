<script setup>
import { useRoute } from "vue-router";
import { getImage } from "@/utils/getImage.js";
import { useMenuSwitch } from "@/composables/useMenuSwitch";
import resumePdf from "@/assets/images/resume_yanhua_huang.pdf";

const route = useRoute();

const { isMenuOpen, switchMenu, closeMenu } = useMenuSwitch();

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Resume",
    href: resumePdf,
    ifFile: true,
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
</script>
<template>
  <header :class="{ active: isMenuOpen }">
    <h1>
      <div class="logo">
        <a href="#"
          ><img :src="getImage(`logo.svg`)" alt="Huang Yan Hua portfolio 2026"
        /></a>
      </div>
    </h1>
    <div class="marquee">
      <p>
        Be bold, be brave, be you. Stay hungry, stay foolish. In this world, the
        only things I can't put down are my chopsticks. In this world, the only
        things I can't put down are my chopsticks. Be bold, be brave, be you.
        Stay hungry, stay foolish. In this world, the only things I can't put
        down are my chopsticks. In this world, the only things I can't put down
        are my chopsticks.
      </p>
    </div>
    <button
      class="hamburger"
      :class="{ active: isMenuOpen }"
      @click="switchMenu"
    >
      <div class="bar-group">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </button>
    <nav :class="{ active: isMenuOpen }">
      <ul>
        <li v-for="(link, index) in links" :key="`link-${index}`">
          <router-link
            v-if="!link.ifFile"
            @click="closeMenu"
            :to="link.href"
            :class="{ active: route.hash === link.href }"
            >{{ link.title }}</router-link
          >
          <a v-else @click="closeMenu" :href="link.href" target="_blank">{{
            link.title
          }}</a>
          <span v-if="index !== links.length - 1">/</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  color: var(--white);
  display: flex;
  align-items: flex-start;
  position: sticky;
  top: 0;
  z-index: 100;
  h1 {
    padding: 24px 44px;
    border-right: 4px solid var(--white);
    border-bottom: 4px solid var(--white);
    background-color: var(--blue);
    .logo {
      width: 92px;
    }
  }
  .marquee {
    background-color: var(--blue);
    padding: 24px 0;
    border-right: 4px solid var(--white);
    border-bottom: 4px solid var(--white);
    flex-grow: 1;
    overflow: hidden;
    p {
      white-space: nowrap;
      animation: marquee 10s linear infinite;
      letter-spacing: 3px;
    }
  }
  button.hamburger {
    background-color: var(--blue);
    display: none;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--white);
    .bar-group {
      position: relative;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 3px;
      background-color: var(--white);
      transition: 0.5s;

      &:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-of-type(3) {
        top: initial;
        bottom: 0;
      }
    }
    &.active {
      .bar {
        &:nth-of-type(1) {
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }

        &:nth-of-type(2) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        &:nth-of-type(3) {
          display: none;
        }
      }
    }
  }
  nav {
    background-color: var(--blue);
    padding: 24px 20px;
    border-bottom: 4px solid var(--white);

    ul {
      display: flex;
      li {
        display: flex;
        margin-left: 0rem;
        a {
          color: var(--white);
          padding: 0 24px;
          transition: 0.5s;
          &.active {
            color: var(--yellow);
            font-weight: bold;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  header {
    h1 {
      padding: 12px 16px;
      border-right: 2px solid var(--white);
      border-bottom: 2px solid var(--white);
      .logo {
        width: 56px;
      }
    }
    .marquee {
      padding: 12px;
      border-right: 2px solid var(--white);
      border-bottom: 2px solid var(--white);
    }
    nav {
      padding: 12px 16px;
      border-bottom: 2px solid var(--white);

      ul {
        li {
          a {
            padding: 0 12px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  header {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    &.active {
      height: 100vh;
    }
    .marquee {
      width: 40%;
    }
    button.hamburger {
      display: flex;
    }
    nav {
      display: none;
      width: 100%;
      height: calc(100% - 50px);
      padding: 0px;
      border-bottom: none;
      &.active {
        display: flex;
        margin-top: -14px;
        z-index: -1;
      }
      ul {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 8px;

        li {
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          a {
            display: block;
            text-align: center;
          }
          span {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
