<template>
  <footer class="footer">
    <div class="footer-link-container">
      <footer-link
        v-for="(link, index) in footerLinks"
        :key="index"
        :span-class="link.spanClass"
        :text="link.text"
        :url="link.url"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// components
import FooterLink from '~/components/common/atoms/FooterLink.vue'

// interfaces
import { IFooterLink } from '~/src/components/common/atoms/footerLink'

@Component({
  components: {
    FooterLink
  }
})
export default class CommonFooter extends Vue {
  private footerLinks: IFooterLink[] = [
    {
      spanClass: 'is-dark',
      text: 'バトル',
      url: '/battle'
    },
    {
      spanClass: 'is-dark',
      text: '設定',
      url: '/setting'
    }
  ];
}
</script>

<style scoped>
.footer-link-container {
  display: flex;
  justify-content: space-between;
  margin: 0px 5%;
}
</style>
