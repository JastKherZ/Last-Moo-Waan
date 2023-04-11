<template>
    <div class="flex justify-center items-center h-48">
        <div>
            <h1 class="font-bold text-lg">REGISTRATION</h1>
            <div class="flex ">
                <h1>Require Fieldasdasdddsas</h1>
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