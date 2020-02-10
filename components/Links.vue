<template>
  <div class="nav">
    <div class="emojii">
      <ul>
        <li @mouseover="hoverNav('homepage')" @mouseleave="hoverOfNav">
          <nuxt-link to="/">&#128075;,</nuxt-link>
        </li>

        <li @mouseover="hoverNav('projects')" @mouseleave="hoverOfNav">👨‍💻</li>
        <li @mouseover="hoverNav('photography')" @mouseleave="hoverOfNav">&#128247;</li>
        <li @mouseover="hoverNav('swimming')" @mouseleave="hoverOfNav">&#127946;</li>
      </ul>
    </div>
    <div class="psst">
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
        navHoverText: 'psst... this is a navigation',
        navHoverDefaultText: 'psst... this is a <navitation>'
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
    ul {
      @apply flex flex-row;
      cursor: pointer;

      li {
        @apply pr-3;
        &:last-child {
          @apply pr-0;
        }
      }
    }
  }

  .psst {
    @apply flex flex-row content-center ml-3;
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