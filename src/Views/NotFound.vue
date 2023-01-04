<template>
    <div class="h-contentHeight overflow-x-hidden">
        <h1 class="text-center mt-8 text-stone-700">{{ $t("IndexPath.NotFoundPage.MainSubject") }}</h1>
        
        <div class="text-3xl border-4 border-red-400 mt-8 text-center rounded-2xl py-4 w-1/2 mx-auto">
            <router-link :to="{ name: 'Home' }">{{ $t("IndexPath.NotFoundPage.ClickToBack") }}</router-link>
        </div>
    </div>
</template>