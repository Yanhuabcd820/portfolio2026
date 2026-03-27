<script setup></script>
<template>
  <div class="MainExperience">
    <div class="container">
      <div class="container-inner">
        <h2 class="vertical">
          <span>EXPE<span>-</span></span>
          <span>RIENCE</span>
        </h2>
        <div class="experience-content">
          <div class="experience-item">
            <div class="experience-work-title">
              <p>2023/05 - 2025/07</p>
              <h3>前端工程師<span>/ 一零四資訊科技股份有限公司</span></h3>
            </div>
            <p>
              與企劃團隊緊密協作，參與整合性招募平台開發，進而讓企業大幅提升招募精準度。
            </p>
            <div class="experience-work-description">
              <p>工作內容：</p>
              <ul>
                <li>以 Vue3 進行整合招募網站功能開發，並串接 RESTful API</li>
                <li>
                  使用 scss 搭配原子化 css 工具 (如 unocss) 進行 RWD
                  跨平台響應式網頁設計
                </li>
                <li>
                  實作 Vue Federation，整合 6 個網站 header 組件，增加維運效率
                </li>
                <li>
                  實作網頁靜態資料分離機制，將非技術性資訊抽離至設定檔，使非技術人員能自主更新內容，降低研發人力耗損
                </li>
                <li>
                  執行 GTM 追蹤碼埋設與維護，並協助 GA4 數據判讀並優化網頁
                </li>
                <li>從零建立工作驗收流程，維持產品穩定度</li>
              </ul>
            </div>
          </div>
          <div class="experience-item">
            <div class="experience-work-title">
              <p>2023/05 - 2025/07</p>
              <h3>前端工程師<span>/ 一零四資訊科技股份有限公司</span></h3>
            </div>
            <p>
              與企劃團隊緊密協作，參與整合性招募平台開發，進而讓企業大幅提升招募精準度。
            </p>
            <div class="experience-work-description">
              <p>工作內容：</p>
              <ul>
                <li>以 Vue3 進行整合招募網站功能開發，並串接 RESTful API</li>
                <li>
                  使用 scss 搭配原子化 css 工具 (如 unocss) 進行 RWD
                  跨平台響應式網頁設計
                </li>
                <li>
                  實作 Vue Federation，整合 6 個網站 header 組件，增加維運效率
                </li>
                <li>
                  實作網頁靜態資料分離機制，將非技術性資訊抽離至設定檔，使非技術人員能自主更新內容，降低研發人力耗損
                </li>
                <li>
                  執行 GTM 追蹤碼埋設與維護，並協助 GA4 數據判讀並優化網頁
                </li>
                <li>從零建立工作驗收流程，維持產品穩定度</li>
              </ul>
            </div>
          </div>
          <div class="experience-item">
            <div class="experience-work-title">
              <p>2023/05 - 2025/07</p>
              <h3>前端工程師<span>/ 一零四資訊科技股份有限公司</span></h3>
            </div>
            <p>
              與企劃團隊緊密協作，參與整合性招募平台開發，進而讓企業大幅提升招募精準度。
            </p>
            <div class="experience-work-description">
              <p>工作內容：</p>
              <ul>
                <li>以 Vue3 進行整合招募網站功能開發，並串接 RESTful API</li>
                <li>
                  使用 scss 搭配原子化 css 工具 (如 unocss) 進行 RWD
                  跨平台響應式網頁設計
                </li>
                <li>
                  實作 Vue Federation，整合 6 個網站 header 組件，增加維運效率
                </li>
                <li>
                  實作網頁靜態資料分離機制，將非技術性資訊抽離至設定檔，使非技術人員能自主更新內容，降低研發人力耗損
                </li>
                <li>
                  執行 GTM 追蹤碼埋設與維護，並協助 GA4 數據判讀並優化網頁
                </li>
                <li>從零建立工作驗收流程，維持產品穩定度</li>
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
        span {
          font-size: 20px;
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
