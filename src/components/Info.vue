<template>
  <main
    id="info"
    class="relative flex h-screen flex-col justify-center py-16 px-10"
  >
    <div class="mx-auto flex max-w-3xl flex-col items-center justify-center py-16 px-4">
      <!-- TEXT -->
      <div class="text-center font-mono text-sm">
        <p class="pb-4">
          Hélia Marcos is a photographer based in Portugal, and available worldwide.
        </p>
        <p>✧゜</p>
        <p class="mt-3">
          For any inquiries: <a
            href="mailto:hello@heliamarcos.com"
            class="cursor-crosshair"
          >hello@heliamarcos.com</a>
        </p>
      </div>
    </div>
    <div
      id="infoClose"
      class="absolute bottom-0 -translate-y-16"
    >
      <router-link
        class="cursor-crosshair font-mono text-xs tracking-[2px] text-black transition duration-300 hover:text-stone-400 dark:text-white"
        to="/"
      >
        ‹ back
      </router-link>
    </div>
  </main>
</template>
