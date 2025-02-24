<template>
    <div class="mx-auto">
        <HeaderMaster>{{ $t('IndexPath.MouseMoveCapturePage.HeaderMaster') }}</HeaderMaster>
        <HeaderSub>{{ $t('IndexPath.MouseMoveCapturePage.StandardMouseMove') }}</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            {{ $t('IndexPath.MouseMoveCapturePage.MousePosition') }} => {{ NormalX }} : {{ NormalY }}
        </div>

        <HeaderSub>{{ $t('IndexPath.MouseMoveCapturePage.ReactMouseMove') }}</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            {{ $t('IndexPath.MouseMoveCapturePage.MousePosition') }} => {{ ReactiveX }} : {{ ReactiveY }}
        </div>

        <HeaderSub>{{ $t('IndexPath.MouseMoveCapturePage.VueMouseMove') }}</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            {{ $t('IndexPath.MouseMoveCapturePage.MousePosition') }} => {{ VueUseX }} : {{ VueUseY }}
        </div>
    </div>
</template>

<script setup lang="tsx">
import HeaderMaster from '../../../Commons/HeaderMaster.vue'
import HeaderSub from '../../../Commons/HeaderSub.vue'
import { useNormalMousePoint } from './NormalMousePoint'
import { useReactiveMousePoint } from './ReactiveMousePoint'
import { useMouse, debounceFilter } from '@vueuse/core'

// 一般寫法
const { x: NormalX, y: NormalY } = useNormalMousePoint()

// 響應式寫法
const { x: ReactiveX, y: ReactiveY } = useReactiveMousePoint()

// vueUse工具的寫法
const { x: VueUseX, y: VueUseY } = useMouse({
    eventFilter: debounceFilter(250)
})

</script>