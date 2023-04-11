<template>
    <div class="flex flex-col justify-center items-center border">
        <div class="border mt-[50px]">
            <h1>REGISTRATION</h1>
        </div>
        <div class="border">
            <div class="">
                <label for="" class="flex flex-col">Title</label>
                <select class="">
                    <option value="">Please Select</option>
                    <option value="">นาย</option>
                    <option value="">นาง</option>
                    <option value="">นางสาว</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="">First Name</label>
                <input type="text" placeholder="Please enter your First Name">
                <label for="">Last Name</label>
                <input type="text" placeholder="Please enter your Last Name">
                <label for="">Username</label>
                <input type="text" placeholder="Please enter your Username">
                <label for="">Password</label>
                <input type="text" placeholder="Please enter your new Password">
                <label for="">Confirm Password</label>
                <input type="text" placeholder="Please confirm your new Password">
            </div>
        </div>
        <div class="border">
                <button>
                    REGISTER
                </button>
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