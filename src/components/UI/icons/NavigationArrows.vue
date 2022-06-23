<template>
  <div
    class="lg:absolute lg:left-1/2 lg:bottom-36 flex justify-center z-50 mt-16 lg:mt-0 pb-8"
  >
    <button type="button" class="lg:-ml-16 mr-8" @click="$emit('onClick')">
      <img src="@/assets/icons/arrow-left.svg" alt="previous-page" />
    </button>
    <button class="lg:ml-24 ml-8">
      <img src="@/assets/icons/arrow-right.svg" alt="next-page" />
    </button>
  </div>
</template>
<script></script>
