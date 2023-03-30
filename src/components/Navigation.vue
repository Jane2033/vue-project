<template>
    <header class="sticky top-0 shadow-lg">
        <nav class="container flex justify-between items-center gap-4 text-white py-8">
            <RouterLink :to="{ name: 'home' }">
                <p class="font-Funkydori text-4xl">Muses</p>
            </RouterLink>
            <div class="hidden md:flex md:gap-16 justify-between">
                <p class="text-base tracking-wider cursor-pointer">品牌特色</p>
                <p class="text-base tracking-wider cursor-pointer">熱銷單品</p>
                <p class="text-base tracking-wider cursor-pointer">穿搭推薦</p>
            </div>
            <div class="flex items-center gap-8">
                <span class="material-symbols-outlined text-lg cursor-pointer">search</span>
                <span class="material-symbols-outlined text-lg md:hidden cursor-pointer">menu</span>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from "vue-router";
</script>
