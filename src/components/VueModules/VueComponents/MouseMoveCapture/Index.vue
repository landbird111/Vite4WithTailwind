<template>
    <div class="mx-auto">
        <HeaderMaster>Mouse Point</HeaderMaster>
        <HeaderSub>Standard Mouse Point</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            Mouse Position => {{ NormalX }} : {{ NormalY }}
        </div>

        <HeaderSub>Reactive Mouse Point</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            Mouse Position => {{ ReactiveX }} : {{ ReactiveY }}
        </div>

        <HeaderSub>VueUse Mouse Point(debounce)</HeaderSub>
        <div class="mt-8 max-w-lg mx-auto">
            Mouse Position => {{ VueUseX }} : {{ VueUseY }}
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