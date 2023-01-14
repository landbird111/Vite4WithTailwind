<template>
    <div class="flex">
        <ContentNav :rounter-link-datas="rounterLinkDatas" />
        <div class="flex-wrap w-3/4">
            <RouterView />
        </div>
    </div>
</template>

<script lang="tsx" setup>
//由外部提供router的連結資訊
import rounterLinkDatas from './VueComponents/VueLinkDatas';
//左側的連結列
import ContentNav from '../ContentNav/ContentNav.vue';
// 設定Title
import { useTitle } from '@vueuse/core';

useTitle('Vue');
</script>