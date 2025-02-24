<template>
    <div class="mx-auto">
        <HeaderMaster>{{
            $t('IndexPath.RandomAPIPage.HeaderMaster')
        }}</HeaderMaster>
        <HeaderSub>{{ $t('IndexPath.RandomAPIPage.HeaderSub') }}</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            <RandomApi />
        </div>
    </div>
</template>

<script setup lang="tsx">
import HeaderMaster from '../../../Commons/HeaderMaster.vue'
import HeaderSub from '../../../Commons/HeaderSub.vue'
import RandomApi from './RandomApi.vue'
</script>
