<template>
  <div class="bg-gray-900 text-white w-screen m-h-screen p-5">
    <heading>
      <nav>
        <div class="emojii">
          <ul>
            <li @mouseover="hoverNav('homepage')" @mouseleave="hoverOfNav">
              &#128075;,
            </li>
            <li @mouseover="hoverNav('projects')" @mouseleave="hoverOfNav">
              👨‍💻
            </li>
            <li @mouseover="hoverNav('photography')" @mouseleave="hoverOfNav">
              &#128247;
            </li>
            <li @mouseover="hoverNav('swimming')" @mouseleave="hoverOfNav">
              &#127946;
            </li>
          </ul>
        </div>
        <div class="psst">
          <div class="arrow"></div>
          <div class="text">{{ state.navHoverText }}</div>
        </div>
      </nav>
      <h1>
        hello. my name is shahzeb and i am a computer scientist, photographer,
        and swimmer.
      </h1>
    </heading>
    <div class="content">
      <div class="section">
        <div class="item-desc">
          <h2>
            My <span class="text-white">technical projects</span>
            span many disciplines such as machine learning, IoT,
            web-development, messenger bots, and even game development.
          </h2>
        </div>
        <div class="flex flex-row justify-between my-3">
          <Item />
          <Item />
          <Item />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>
            I <span class="text-white">enjoy writing</span> about both computer
            science subjects and about general things going on in my life.
          </h2>
        </div>
        <div class="flex flex-row justify-between my-3">
          <Item />
          <Item />
          <Item />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>
            To me, <span class="text-white">photography</span> is the ultimate
            creative outlet. Nature is my favorite photography subject.
          </h2>
        </div>
        <div class="flex flex-row justify-between my-3">
          <Item />
          <Item />
          <Item />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>
            I <span class="text-white">am a graduate</span> from University in
            California, Davis of Computer Science (B.S.).
          </h2>
        </div>
      </div>

      <div class="footer">
        <div class="buttons">
          <button>My Resume</button>
          <button>My Email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: {
    Item
  },
  data: function() {
    return {
      state: {
        navHoverText: 'psst... this is a navigation',
        navHoverDefaultText: 'psst... this is a <navitation>'
      }
    }
  },
  methods: {
    hoverNav: function(text) {
      this.state.navHoverText = text
    },
    hoverOfNav: function() {
      this.state.navHoverText = this.state.navHoverDefaultText
    }
  }
}
</script>

<style lang="scss">
h3 {
  @apply font-sans text-white font-normal text-2xl;
}
h2 {
  @apply font-sans text-white font-normal text-3xl;
}
h1 {
  @apply font-sans text-white text-5xl font-normal w-3/4;
}
nav {
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
.content {
  @apply mt-6;

  .section {
    @apply mb-4 w-3/4 py-2;

    .item-desc {
      @apply w-3/4 mb-6;

      h2 {
        @apply mr-2  text-gray-500;
      }
    }
  }
}

.footer {
  @apply mb-6;

  button {
    @apply bg-orange-500 rounded p-2 mr-2;
  }
}
</style>
