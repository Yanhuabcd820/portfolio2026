<script setup>
import { getImage } from "@/utils/getImage.js";
</script>
<template>
  <div class="MainContact">
    <div class="container">
      <div class="text-container">
        <h2>CONTACT</h2>
      </div>
      <div class="contact-content">
        <div class="contact-item">
          <div class="contact-icon">
            <img :src="getImage(`contact-icon-mail.svg`)" alt="mail" />
          </div>
          <a mailto="mamamiyahaha@gmail.com" target="_blank">
            mamamiyahaha@gmail.com
          </a>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <img :src="getImage(`contact-icon-linkedin.svg`)" alt="linkedin" />
          </div>
          <a href="https://www.linkedin.com/in/yanhua-huang" target="_blank">
            www.linkedin.com/in/yanhua-huang
          </a>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <img :src="getImage(`contact-icon-line.svg`)" alt="line" />
          </div>
          <a href="https://line.me/ti/p/zGvDp6TWaF" target="_blank">
            yanhua820
          </a>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <img :src="getImage(`contact-icon-phone.svg`)" alt="phone" />
          </div>
          <p>0952423200</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainContact {
  background-color: var(--blue);
  background-size: 200px 200px;
  background-image:
    linear-gradient(
      0deg,
      var(--deep-blue) 0px,
      var(--deep-blue) 4px,
      transparent 4px,
      transparent 200px
    ),
    linear-gradient(
      90deg,
      var(--deep-blue) 0px,
      var(--deep-blue) 4px,
      transparent 4px,
      transparent 200px
    );
  .container {
    padding: 10% 0 12%;
    max-width: 1240px;
  }
  h2 {
    color: var(--white);
  }
  .contact {
    &-content {
      padding-top: 5%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 28px;
    }
    &-item {
      display: flex;
      align-items: center;
      background-color: var(--orange);
      border-radius: 200px;
      padding: 24px 72px;
      gap: 40px;
      position: relative;
      &:nth-of-type(even) {
        align-self: flex-end;
        &::after {
          left: initial;
          right: 74px;
          transform: scaleX(-1);
        }
      }
      &::after {
        position: absolute;
        bottom: -36px;
        left: 74px;
        content: "";
        width: 53px;
        height: 41px;
        background-image: url("@/assets/images/contact-deco.png/");
        background-repeat: no-repeat;
        background-size: cover;
      }
      a,
      p {
        font-size: 28px;
        font-weight: bold;
        padding-left: 40px;
        line-height: 1.25;
        border-left: 4px solid var(--black);
      }
    }
    &-icon {
      width: 52px;
      img {
        vertical-align: middle;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .MainContact {
    .container {
      padding: 10% 2% 12%;
      box-sizing: border-box;
    }
    .contact {
      &-content {
        gap: 68px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .MainContact {
    background-size: 100px 100px;
    background-image:
      linear-gradient(
        0deg,
        var(--deep-blue) 0px,
        var(--deep-blue) 4px,
        transparent 4px,
        transparent 100px
      ),
      linear-gradient(
        90deg,
        var(--deep-blue) 0px,
        var(--deep-blue) 4px,
        transparent 4px,
        transparent 100px
      );
    .container {
      padding: 20% 2% 30%;
      max-width: 400px;
    }
    .contact {
      &-content {
        gap: 36px;
        padding-top: 40px;
      }
      &-item {
        padding: 12px 18px;
        gap: 12px;
        &:nth-of-type(even) {
          &::after {
            right: 42px;
          }
        }
        &:nth-of-type(1) {
          a {
            font-size: 16px;
          }
        }
        &:nth-of-type(2) {
          a {
            font-size: 14px;
          }
        }
        &::after {
          bottom: -20px;
          left: 42px;
          width: 28px;
          height: 22px;
        }
        a,
        p {
          font-size: 18px;
          font-weight: bold;
          padding-left: 12px;
          border-left: 2px solid var(--black);
        }
      }
      &-icon {
        width: 32px;
      }
    }
  }
}
</style>
