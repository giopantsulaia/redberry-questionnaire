<template>
  <div>
    <transition name="fadein" mode="out-in" appear>
      <img
        src="@/assets/images/logo.png"
        alt="logo"
        class="mx-auto mt-80 pb-14 z-50"
        width="130"
      />
    </transition>
    <transition name="fade" mode="out-in" appear>
      <div class="flex text-center justify-center z-0">
        <router-link
          :to="{ name: 'Identification' }"
          class="text-3xl tracking-wide whitespace-normal font-black text-[#232323] leading-10"
        >
          <p>
            კითხვარის <br />
            დაწყება
          </p>
        </router-link>
      </div>
    </transition>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
body {
  background-color: #b5c0c7;
  text-align: center;
}
p:hover {
  text-shadow: #ffffff 2px 2px 0px, #9c9c9c 4px 4px 0px,
    40px -40px 5px rgba(255, 255, 255, 0);
}
.fade-enter-from {
  transform: translateY(-60px);
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease 1s;
}
.fadein-enter-from {
  z-index: 100;
  transform: scale(20) translateY(35px);
}
.fadein-enter-to {
  transform: scale(1);
}

.fadein-enter-active {
  transition: all 1s ease 0.2s;
}
</style>
