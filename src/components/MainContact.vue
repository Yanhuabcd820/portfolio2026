<script setup>
import { onMounted, useTemplateRef } from "vue";
import { getImage } from "@/utils/getImage.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactItems = useTemplateRef("contactItem");

onMounted(() => {
  contactItems.value.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 200,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        toggleActions: "play reverse play reverse",
      },
    });
  });
});
const contacts = [
  {
    type: "email",
    detail: "mamamiyahaha@gmail.com",
    image: "contact-icon-mail.svg",
    link: "mailto:mamamiyahaha@gmail.com",
  },
  {
    type: "linkedin",
    detail: "www.linkedin.com/in/yanhua-huang",
    image: "contact-icon-linkedin.svg",
    link: "https://www.linkedin.com/in/yanhua-huang",
  },
  {
    type: "line",
    detail: "yanhua820",
    image: "contact-icon-line.svg",
    link: "https://line.me/ti/p/zGvDp6TWaF",
  },
  {
    type: "phone",
    detail: "0952423200",
    image: "contact-icon-phone.svg",
    link: null,
  },
];
</script>
<template>
  <div class="MainContact" id="contact">
    <div class="container">
      <div class="text-container">
        <h2>CONTACT</h2>
      </div>
      <div class="contact-content">
        <div
          class="contact-item"
          v-for="(contact, index) in contacts"
          :key="`contact-${index}`"
          ref="contactItem"
        >
          <div class="contact-icon">
            <img :src="getImage(contact.image)" :alt="contact.type" />
          </div>
          <a v-if="contact.link" :href="contact.link" target="_blank">
            {{ contact.detail }}
          </a>
          <p v-else>{{ contact.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainContact {
  overflow: hidden;
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
        background-image: url("@/assets/images/contact-deco.png");
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
