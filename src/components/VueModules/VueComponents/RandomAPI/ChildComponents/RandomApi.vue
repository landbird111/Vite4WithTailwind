<template>
    <div class="flex justify-center items-center">
        <button @click.stop="plus">
            <Icon size="24" tag="div" class="text-blue-600">
                <PlusFilled />
            </Icon>
        </button>
        <div class="border border-teal-600 px-4">{{ getRandomResult }}</div>
        <button @click.stop="minus">
            <Icon size="24" tag="div" class="text-blue-600">
                <MinusFilled />
            </Icon>
        </button>
        <button @click.stop="getAPI" class="ml-4">
            <Icon
                size="24"
                tag="div"
                class="bg-indigo-600 hover:bg-indigo-700 transition ease-in-out"
            >
                <RefreshFilled />
            </Icon>
        </button>
    </div>

    <div class="shadow-lg mt-8 max-w-lg block">
        <ul>
            <li
                v-for="item in getRandomData"
                :key="item.id.value"
                class="flex my-4 items-center border-b border-yellow-700 px-4 py-2"
            >
                {{ item.name.title }} {{ item.name.first }} {{ item.name.last }}
                <img
                    :src="item.picture.thumbnail"
                    alt="avatar"
                    class="ml-auto"
                />
            </li>
        </ul>
    </div>
</template>

<script setup lang="tsx">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { IRandom, Result } from './IRandomApi'
import { PlusFilled, MinusFilled, RefreshFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

//提供一個容器，用來存放隨機產生的資料
const getRandomData = ref<Result[]>([])

//提供一個數值，用來存放隨機產生的筆數
const getRandomResult = ref<number>(3)

//提供一個介面，用來存放隨機產生的資料結構
interface IRandomApi {
    data: IRandom
}

//提供一個方法，用來取得隨機產生的資料
const getAPI = async () => {
    const res: IRandomApi = await axios.get(
        `https://randomuser.me/api/?results=${getRandomResult.value}`
    )
    getRandomData.value = res.data.results
}

//增加筆數的方法
const plus = () => {
    if (getRandomResult.value < 6) {
        getRandomResult.value++
        getAPI()
    }
}

//減少筆數的方法
const minus = () => {
    if (getRandomResult.value > 1) {
        getRandomResult.value--
        getAPI()
    }
}

//提供一個生命週期，當元件被建立時，就會執行getAPI方法
onMounted(() => {
    getAPI()
})
</script>
