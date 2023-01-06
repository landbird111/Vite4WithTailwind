<template>
    <div class="flex">
        <ContentNav :rounter-link-datas="rounterLinkDatas" />
        <div class="flex-wrap w-3/4">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts" setup>
//由外部提供router的連結資訊
import rounterLinkDatas from './UIComponents/UILinkDatas';
//左側的連結列
import ContentNav from '../ContentNav/ContentNav.vue';
</script>