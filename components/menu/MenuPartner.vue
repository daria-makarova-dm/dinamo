<template lang="pug">
  a.menu-partner(:href="linkUrl" :title="linkTitle" target="_blank")
    img.menu-partner__img(:src="imgUrl" :alt="linkTitle")
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    linkTitle: {
      type: String,
      required: true
    },
    linkUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .menu-partner {
    align-items: center;
    border-right: 1px solid $menu-header-border-color;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 29px;
    min-width: 120px;

    &:last-child {
      border-right-color: transparent;
    }

    &:nth-child(1),
    &:nth-child(2) {
      display: none;
    }

    &__img {
      height: auto;
      width: auto;
    }

    @media (min-width: $desktop) {
      &:nth-child(1),
      &:nth-child(2) {
        display: flex;
      }
    }
  }
</style>
