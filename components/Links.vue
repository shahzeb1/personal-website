<template>
  <div class="nav">
    <div class="emojii">
      <ul class="flex flex-col">
        <li @mouseover="hoverNav('homepage')" @mouseleave="hoverOfNav" class="flex-1">
          <nuxt-link to="/">
            <img src="~/assets/img/wave.png" />
          </nuxt-link>
        </li>
        <li @mouseover="hoverNav('blog')" @mouseleave="hoverOfNav" class="flex-1">
          <a href="https://shahzeb.svbtle.com/">
            <img src="~/assets/img/writing.png" />
          </a>
        </li>
      </ul>
    </div>
    <div class="hidden psst animated fadeIn delay-3s">
      <div class="arrow"></div>
      <div class="text">{{ state.navHoverText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      state: {
        navHoverText: 'navigation',
        navHoverDefaultText: 'navigation'
      }
    };
  },
  methods: {
    hoverNav: function(text) {
      this.state.navHoverText = text;
    },
    hoverOfNav: function() {
      this.state.navHoverText = this.state.navHoverDefaultText;
    }
  }
};
</script>

<style lang="scss">
.nav {
  @apply flex flex-row content-center text-3xl mb-6;

  .emojii {
    @apply h-16;

    img {
      width: 30pt;
      display: inline-block;
    }

    ul {
      @apply flex flex-row;
      cursor: pointer;

      li {
        @apply pr-3;
        transition: all 0.2s ease-in-out;

        &:last-child {
          @apply pr-0;
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .psst {
    @apply flex-1 flex flex-row content-center ml-3 pt-1;
    height: fit-content;

    .text {
      @apply text-base bg-gray-400 text-gray-800 px-2 py-2 mt-1 rounded italic;
    }

    .arrow {
      width: 0;
      height: 0;
      border-top: 6pt solid transparent;
      border-bottom: 6pt solid transparent;
      border-right: 12pt solid #cbd5e0;
      content: '';
      margin-top: 12pt;
    }
  }
}
</style>