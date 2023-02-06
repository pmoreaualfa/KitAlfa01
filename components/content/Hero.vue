<script lang="ts" setup>
export interface Props {
  categorie: String;
  prix: Number;
}
defineProps<Props>();
</script>

<template>
  <section class="p-6 text-4xl bg-black border-gray-70 text-white">
    <p>categorie : {{ categorie }} / prix : {{ prix }}</p>
    <slot />
    <h6>SLOT AUTHOR</h6>
    <slot name="auteur" />
    <h6>SLOT AUTHOR FIN</h6>
  </section>
</template>
