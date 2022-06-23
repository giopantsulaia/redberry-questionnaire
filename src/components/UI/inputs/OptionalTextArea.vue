<template>
  <div class="mt-4">
    <label :for="name" class="mb-2 font-black text-base mt-6">{{
      label
    }}</label>
    <textarea
      :id="name"
      :name="name"
      rows="7"
      class="border border-gray-500 resize-none outline-none px-2 lg:w-11/12 w-full mt-2"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
};
</script>
