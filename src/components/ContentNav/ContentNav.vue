<template>
    <div
        class="w-1/4 h-contentHeight mr-2 border border-r-blue-600 border-l-0 border-y-0 text-blue-700 text-lg overflow-y-auto overflow-x-hidden">
        <ol class="[&>li]:mb-4">
            <li v-for="{ RouterLinkName, RouterDisplayName } in rounterLinkDatas"
                class="first:mt-4 last:mb-4 text-center">
                <router-link :to="{ name: RouterLinkName }">{{ RouterDisplayName }}</router-link>
            </li>
        </ol>
    </div>
</template>

<script lang="tsx" setup>
import { IRouterLinkData } from './IContentNav';

defineProps<{
    rounterLinkDatas: Array<IRouterLinkData>;
}>()
</script>