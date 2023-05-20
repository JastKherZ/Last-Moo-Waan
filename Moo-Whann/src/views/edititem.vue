<template>

    <div class="flex flex-col justify-center items-center border bg-gray-100">
        <div class="font-bold text-center py-10">
            <h1 class="text-lg">SIGN IN</h1>
        </div>
        <div class="flex justify-between border h-[400px] w-[450px]">
            <div class="flex space-x-8 pt-6">
                <div class="flex flex-col">
                    <h1 class="font-bold text-sm pb-6">RETURNING CUSTOMERS</h1>
                    <label for="username">Username</label>
                    <input type="text" class="">
                    <label for="password">Password</label>
                    <input :type="password">
                    <div class="flex">
                        <input type="checkbox" @click="toggleShow">
                        <label for="">Show Password</label>
                    </div>
                    <button class="bg-black text-white font-bold">
                        <router-link to="/">SIGN IN</router-link>
                    </button>
                </div>
                <div class="bg-gray-500 w-[1px] h-[150px]">
                </div>
                <div>
                    <h1 class="font-bold text-sm pb-2.5">CREATE AN ACCOUNT</h1>
                    <label for="">ยังไม่มีสมาชิกใช่ไหม</label>
                    <div class="flex flex-col pt-28">
                        <button class="bg-white font-bold">
                            <router-link to="/register">CREATE AN ACCOUNT</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
    export default {
    name: 'edititem',
}
</script>