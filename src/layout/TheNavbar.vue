<template>
  <header class="fixed inset-x-0 top-0 z-50" :class="classObject">
    <nav
      class="mx-auto h-screen px-10 pt-4 pb-6 md:flex md:h-auto md:items-center md:justify-between md:pb-0"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="cursor-crosshair font-light tracking-[2px] text-black dark:text-white"
        >
          hélia marcos
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden" @click.prevent="toggleMenu">
          <button
            type="button"
            class="origin-center font-mono text-3xl text-black transition duration-500 hover:text-black focus:text-black focus:outline-none dark:text-white"
            :class="!showMenu ? '' : 'rotate-45'"
          >
            +
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <transition name="fade">
        <ul
          :class="!showMenu ? 'hidden' : 'flex'"
          class="mt-8 flex-col space-y-4 space-x-0 transition duration-300 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6"
        >
          <li>
            <router-link
              class="cursor-crosshair text-xs uppercase tracking-[2px] text-black transition duration-300 hover:text-stone-400 dark:text-white"
              to="/info"
            >
              Info
            </router-link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://helia.darkroom.com/"
              class="cursor-crosshair text-xs uppercase tracking-[2px] text-black transition duration-300 hover:text-stone-400 dark:text-white"
            >
              Prints
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://instagram.com/helia.mar"
              class="cursor-crosshair text-xs tracking-[2px] text-black transition duration-300 hover:text-stone-400 dark:text-white"
            >
              IG
            </a>
          </li>
          <li class="inline-flex pt-8 md:justify-end md:pt-0">
            <button
              class="h-6 w-6 cursor-crosshair overflow-hidden hover:text-stone-400"
              @click="switchTheme()"
            >
              <transition
                enter-active-class="transition duration-300 ease-out"
                leave-active-class="transition duration-300 ease-in"
                :enter-from-class="
                  currentTheme === 'dark' ? 'opacity-0' : 'opacity-0'
                "
                enter-to-class=""
                leave-from-class=""
                :leave-to-class="
                  currentTheme === 'dark' ? 'opacity-0' : 'opacity-0'
                "
                mode="out-in"
              >
                <span v-if="currentTheme === 'dark'" class="text-xl"> ☾ </span>
                <span v-else class="text-xl"> ☀ </span>
              </transition>
            </button>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script lang="ts">
export default {
  props: {
    currentTheme: String,
    switchTheme: Function,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    classObject() {
      return {
        "bg-white": this.showMenu && this.currentTheme === "light",
        "bg-black": this.showMenu && this.currentTheme === "dark",
        "bg-transparent": !this.showMenu,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
<style>
body {
  @apply dark:bg-black dark:text-white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
