<script setup lang="ts">
import { convertDate } from '~~/utils';
const { query } = useRoute();
const { auteur } = query;
const qc = await queryContent('docs').where({ auteur }).sort({ _file: -1, $numeric: true }).find();
console.log(qc);
</script>

<template>
  <NuxtLayout name="default">
    <main class="bg-white px-4 pt-16 pb-28 sm:px-6 lg:px-8 lg:pt-24">
      <div class="mx-auto max-w-lg lg:max-w-7xl">
        <div class="border-b border-b-gray-200 pb-6">
          <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Documentation récente
          </h2>
        </div>
        <div class="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-x-5">
          <div
            v-for="article in qc"
            :key="article._path"
            class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
          >
            <p class="text-xl text-gray-900">{{ article.titre }}</p>
            <NuxtLink :href="article._path">
              <p class="mt-3 text-gray-500">{{ article.description }}</p>
            </NuxtLink>
            <div class="mt-6">
              <a :href="`?auteur=${article.auteur}`" class="text-sm text-medium text-gray-900">
                {{ article.auteur }}
              </a>
              <p class="text-sm text-gray-500">
                créé le :
                <time datetime="2023-03-16">{{ convertDate(article.creation) }}</time>
                <br />
                modifié le :
                <time datetime="2023-03-16">{{ convertDate(article.modification) }}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
