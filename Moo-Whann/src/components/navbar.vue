<template>
    <div class="flex py-5 px-6 justify-between font-bold text-black">
        <div class="flex">
            <button class="text-5xl">
                <router-link to="/">MOOWHAN</router-link>
            </button>
            <div class="flex items-center">
                <button class="text-sm ml-24">
                    <router-link to="/">เครื่องเขียน</router-link>
                </button>
                <button class="text-sm ml-5">
                    <a href="#" class="">กระดาษ</a>
                </button>
                <button class="text-sm ml-5">
                    <a href="#" class="">อุปกรณ์ตกแต่ง</a>
                </button>
                <button class="text-sm ml-5">
                    <a href="#" class="">อื่นๆ</a>
                </button>
            </div>
        </div>
        <div class="flex font-bold space-x-10 items-center">
            <router-link to="/login">
                <div class="space-x-5">
                    <button class="text-sm"><i class="fa-solid fa-user"></i></button>
                </div>
            </router-link>
            <!-- <router-link to="/login">
                <button class="text-sm">REGISTER</button>
            </router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
}
</script>