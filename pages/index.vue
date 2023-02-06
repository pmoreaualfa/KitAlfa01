<template>
  <NuxtLayout name="default">
    <div class="mt-20">
      <h1>INDEX PAGE</h1>
      <p>{{ store.name }}</p>
      <p>{{ store.count }}</p>
      <div class="flex space-x-2 justify-center">
        <button
          @click="store.increment"
          type="button"
          class="inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
        <button
          @click="changePatch"
          type="button"
          class="inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          STORE
        </button>
      </div>
      <div>
        <h3>FMS Product Info</h3>
        <p>
          Product Info message : {{ productInfoMessage }}
        </p>
        <p>
          ProductInfo name : {{productInfoName}}
        </p>
        <p>
          ProductInfo version : {{productInfoVersion}}
        </p>
      </div>
      <div>
        <h3>FMS Databases</h3>
        <p>
           Databases message : {{ databasesMessage }}
        </p>
        <p>
          Databases :
          <ul>
<li v-for="(db, id) in databases" :key="id">{{db.name}}</li>
          </ul>
        </p>
      </div>
      <div>
        <h3>Find results</h3>
        <p>
           résultats : {{ results }}
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { useFmsData } from '@/stores/fmsData';
const store = useCounterStore();
const state = useState('store');

const changePatch = () => {
  store.$patch({
    count: store.count + 5,
    name: 'DIO',
  });
};

const fmsData = useFmsData();
const productInfoMessage = fmsData.fmsProductInfo.messages[0].message;
const databasesMessage = fmsData.fmsDatabases.messages[0].message;
const databases = fmsData.fmsDatabases.response.databases;
const productInfoName = fmsData.fmsProductInfo.response.productInfo.name;
const productInfoVersion = fmsData.fmsProductInfo.response.productInfo.version;
const results = fmsData.fmsResults;
</script>

<style scoped></style>
