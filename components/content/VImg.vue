<template>
    <div class="content-center">
        <picture class="image content-center">
          <!-- <img src="../assets/blog/foobar.png" alt="TEST dur" draggable="false" /> -->
          <img :src="`/_nuxt/assets/docs/${src}`" :alt="`${alt}`" draggable="false" :width="`${w}px`"/>
        </picture>
        <p class="text-sm text-gray-400 text-center">{{ src }}</p>

    </div>
      </template>

      <script setup lang="ts">
      defineProps({
        src: { type:String, required: true},
        alt: {type:String, required: false},
        w: {type: Number, required: false, default: 600}
      });
      </script>

      <style scoped>
      .picture {
        height: 100%;
        margin: auto;
        object-fit: contain;
        padding-bottom: 1rem;
      }
      </style>
