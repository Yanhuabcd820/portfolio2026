<script setup>
import { getImage } from "@/utils/getImage.js";
</script>
<template>
  <header>
    <h1>
      <div class="logo">
        <img :src="getImage(`logo.svg`)" alt="Huang Yan Hua portfolio 2026" />
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
    <button class="menuCheck">
      <div class="bar-group">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </button>
    <nav>
      <ul>
        <li><a href="#about">About</a> <span>/</span></li>
        <li>
          <a href="#experience">Experience</a>
          <span>/</span>
        </li>
        <li>
          <a href="#works">Works</a>
          <span>/</span>
        </li>
        <li>
          <a href="#resume">Resume</a>
          <span>/</span>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  color: var(--white);
  background-color: var(--blue);
  display: flex;
  align-items: flex-start;
  h1 {
    padding: 24px 44px;
    border-right: 4px solid var(--white);
    border-bottom: 4px solid var(--white);
    .logo {
      width: 92px;
    }
  }
  .marquee {
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
  button.menuCheck {
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
    &.isMenuOpen {
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
    padding: 24px 20px;
    border-bottom: 4px solid var(--white);

    ul {
      display: flex;
      li {
        display: flex;
        a {
          color: var(--white);
          padding: 0 24px;
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
    &.isMenuOpen {
      height: 100vh;
      position: absolute;
      z-index: 20;
    }
    .marquee {
      width: 40%;
    }
    button.menuCheck {
      display: flex;
    }
    nav {
      display: none;
      width: 100%;
      height: calc(100% - 64px);
      padding: 0px;
      border-bottom: none;
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
      &.isMenuOpen {
        display: flex;
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
