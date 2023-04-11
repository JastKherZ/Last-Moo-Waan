<template>
    <div class="justify-start">
        <div class="text-lg font-bold">
            Moo-Waan
            <button class="text-base mx-3">
                <a href="https://www.facebook.com/prayutofficial/?locale=th_TH" class="">Home</a>
            </button>
            <button class="text-base mx-3">
                <a href="https://www.facebook.com/prayutofficial/?locale=th_TH" class="">Shop</a>
            </button>
        </div>
    </div>
    <div class="justify-items-end text-lg font-bold">
        <router-link to="/login">
            <button class="text-base">login</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'login',
}
</script>