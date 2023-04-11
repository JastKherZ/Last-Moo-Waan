<template>
    <div class="justify-start text-gray-100 py-5 px-6 shadow md:flex justify-between font-bold text-black" style="background: #ffffff;">
        <div class="flex">
            <button class="text-5xl font-bold">
                <router-link to="/">MOOWHAN</router-link>
            </button>
            <button class="text-sm ml-24 mt-3">
                <router-link to="/">HOME</router-link>
            </button>
            <button class="text-sm ml-5 mt-3">
                <a href="#" class="">SHOP</a>
            </button>
            <button class="text-sm ml-5 mt-3">
                <a href="#" class="">SHOP</a>
            </button>
            <button class="text-sm ml-5 mt-3">
                <a href="#" class="">SHOP</a>
            </button>
            <button class="text-sm ml-5 mt-3">
                <a href="#" class="">SHOP</a>
            </button>
        </div>
        <div class="flex justify-end text-lg font-bold">
            <router-link to="/login">
                <button class="text-base mx-3 mt-3">Login</button>
            </router-link>
            <router-link to="/register">
                <button class="text-base mx-3 mt-3 rounded-full w-full bg-red-600 text-black">Register</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
}
</script>