const FooterPartner = () => import('~/components/footer-component/FooterPartner/FooterPartner.vue')
const FooterMenu = () => import('~/components/footer-component/FooterMenu/FooterMenu.vue')
const FooterMenuSubscription = () => import('~/components/footer-component/FooterMenuSubscription/FooterMenuSubscription.vue')
const FooterBottomRow = () => import('~/components/footer-component/FooterBottomRow/FooterBottomRow.vue')

export default {
  components: { FooterBottomRow, FooterPartner, FooterMenu, FooterMenuSubscription }
}
