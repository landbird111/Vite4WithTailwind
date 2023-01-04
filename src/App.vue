<template>
  <div class="flex h-16 w-full border border-b-stone-300 items-center mx-auto text-blue-700">
    <div class="ml-4">
      <router-link :to="{ name: 'Home' }">
        Logo
      </router-link>
    </div>
    <nav
      class="sm:mx-auto flex w-full justify-between sm:w-1/3 font-bold text-lg [&>div>a]:bg-orange-100 [&>div>a]:px-4 [&>div>a]:py-2 [&>div>a]:rounded-lg">
      <div>
        <router-link :to="{ name: 'Home' }">HOME</router-link>
      </div>
      <!-- <div>
        <router-link :to="{ name: 'HtmlHomeIndex' }">HTML</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'VueHomeIndex' }">VUE</router-link>
      </div> -->
      <div>
        <select v-model="localeKey" @change="ChangeDisplayLang">
          <option v-for="{ LocaleName, LocaleValue, IsDisabled } in SupportLocales" :value="LocaleValue"
            :disabled="IsDisabled">
            {{ LocaleName }}
          </option>
        </select>
      </div>
    </nav>
  </div>
  <div
    class="max-w-full lg:max-w-screen-lg mx-auto px-3 py-3 lg:px-4 lg:py-3border border-x-orange-200 border-b-orange-200 rounded-b-3xl">
    <router-view />
  </div>
</template>

<script setup lang="tsx">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { SupportLocales } from './plugins/i18n'

const { locale } = useI18n()
const localeKey = ref(locale.value)

const ChangeDisplayLang = () => {
  locale.value = localeKey.value
}
</script>

