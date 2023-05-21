<template>
    <div class="flex flex-col justify-center items-center border bg-gray-100">
        <div class="border font-bold mt-[50px]">
            <h1>REGISTRATION</h1>
        </div>
        <div class="border w-96 p-6 text-sm">
            <div class="border w-full">
                <label for="" class="flex flex-col">Title</label>
                <select class="">
                    <option value="">Please Select</option>
                    <option value="">นาย</option>
                    <option value="">นาง</option>
                    <option value="">นางสาว</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="fname">First Name</label>
                <input type="text" class="border w-full" placeholder="Please enter your First Name">
                <label for="lname">Last Name</label>
                <input type="text" placeholder="Please enter your Last Name">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Please enter your Username">
                <label for="">Password</label>
                <input :type="password" id="password" placeholder="Please enter your new Password">
                <label for="">Confirm Password</label>
                <input :type="password" placeholder="Please confirm your new Password">
                <div class="flex items-center mb-4">
                    <input type="checkbox" @click="toggleShow">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium">Default checkbox</label>
                </div>
                <div class="border text-center">
                    <button class="bg-black text-white font-bold">
                        <router-link to="/login">REGISTER</router-link>
                    </button>
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
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
            console.log(this.showPassword);
            return this.showPassword ? this.password = 'password' : this.password = 'text'
        }
    }
};
</script>