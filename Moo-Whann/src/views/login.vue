<template>
    <!-- <div class="flex justify-center items-center h-screen" style="background: #FFDEB9;">
        <div class="w-96 p-6 shadow-lg rounded-md columns-1" style="background: #FC2947;">
            <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> SIGN IN</h1>
            <hr class="mt-3">
            <div class="mt-3">
                <label for="username" class="block text-base mb-2">Username</label>
                <input type="text" id="username"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Username" />
            </div>
            <div class="mt-3">
                <label for="password" class="block text-base mb-2">Password</label>
                <input :type="password" id="password"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Password" />
            </div>
            <div class="control">
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <input type="checkbox" @click="toggleShow">
                        <label> Show Password</label>
                    </div>
                    <div>
                        <a href="#" class="text-indigo-800 font-semibold">Forgot Password</a>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <button
                    class="border-2 border-indigo-700 bg-indigo-700 py-1 w-full rounded-md hover:bg-sky-700 font-semibold"
                    style="background: #FFDEB9; border: #FFDEB9;">Login</button>
            </div>
        </div>

        <div class="columns-2 bg-gray-500 w-[2px] h-[100px]">
        </div>

        <div class="">

        </div>
    </div> -->
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
    data() {
        return {
            showPassword: true,
            password: 'password'
        }
    },
    computed: {

    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
            console.log(this.showPassword);
            return this.showPassword ? this.password = 'password' : this.password = 'text'
        }
    }
};
</script>