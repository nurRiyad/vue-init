<script setup lang="ts">
import IconCopyVue from './icons/IconCopy.vue';
import data from '../../package.json';
import TheGithub from './icons/TheGithub.vue';

function handleCopy() {
  navigator.clipboard.writeText(
    `
git clone git@github.com:nurRiyad/vue-init.git
cd vue-init
rm -rf .git && git init && git add .
git commit -s -m "Initial Commit"
npm install
code . && npm run dev
    `
  );
}
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-20">
    <div class="pb-10">
      <h1 class="text-4xl font-bold text-green-700 text-center">Vue Init</h1>
      <p class="text-green-700 pt-3">A simple boilerplate for vue.js to start building quickly</p>
    </div>
    <div>
      <ul class="flex gap-4 flex-wrap max-w-5xl justify-center items-center">
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          Vue {{ data.dependencies.vue }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          Vite {{ data.devDependencies.vite }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          Pinia {{ data.dependencies.pinia }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          Vue Router {{ data.dependencies['vue-router'] }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          TailwindCss {{ data.devDependencies.tailwindcss }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          VueUse {{ data.dependencies['@vueuse/core'] }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          Typescript {{ data.devDependencies.typescript }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          EsLint {{ data.devDependencies.tailwindcss }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          Prettier {{ data.devDependencies.prettier }}
        </li>
        <li class="p-4 bg-green-700 text-white rounded-md hover:scale-110 transition-all">
          DevTool {{ data.devDependencies['vite-plugin-vue-devtools'] }}
        </li>
      </ul>
    </div>

    <div class="flex items-end font-mono p-6 m-10 bg-gray-300 rounded-lg">
      <div>
        <p>git clone git@github.com:nurRiyad/vue-init.git</p>
        <p>cd vue-init</p>
        <p>rm -rf .git && git init && git add .</p>
        <p>git commit -s -m "Initial Commit"</p>
        <p>npm install</p>
        <p>code . && npm run dev</p>
      </div>
      <div @click="handleCopy">
        <IconCopyVue class="w-6 cursor-pointer hover:scale-105 transition-all" />
      </div>
    </div>

    <div>
      <a href="https://github.com/nurRiyad/vue-init"><TheGithub /></a>
    </div>
  </div>
</template>
