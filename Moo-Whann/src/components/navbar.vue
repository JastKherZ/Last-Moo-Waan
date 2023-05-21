<template>
    <div class="flex py-5 px-6 justify-between font-bold text-black" >
        <div class="flex">
            <button class="text-5xl">
                <router-link to="/">MOOWHAN</router-link>
            </button>
            <div class="flex items-center">
                <button class="text-sm ml-24">
                    <router-link to="/write">เครื่องเขียน</router-link>
                </button>
                <button class="text-sm ml-5">
                    <router-link to ='/paper'>กระดาษ</router-link>
                </button>
                <button class="text-sm ml-5">
                    <router-link to = '/decoration'>อุปกรณ์ตกแต่ง</router-link>
                </button>
                <button class="text-sm ml-5">
                    <router-link to = '/tool'>อื่นๆ</router-link>
                </button>
                
                <button class="text-sm ml-5" v-if="admin">
                    <router-link to = '/edititem'>แก้ไขข้อมูลสินค้า</router-link>
                </button>
            </div>
        </div>
        <div class="flex font-bold space-x-10 items-center">
            <router-link to="/login">
                <div class="space-x-5">
                    <button class="text-sm"><i class="fa-solid fa-user"></i></button>
                </div>
            </router-link>
            <router-link to="/basket">
                <div class="space-x-5">
                    <button class="text-sm"><i class="fa-solid fa-basket-shopping"></i></button>
                </div>
            </router-link>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'navbar',

    data() {
        return {
            admin: true
        }
    }
}
</script>