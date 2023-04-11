<template>
    <div class="flex justify-center items-center h-48 border">
        <div>
            <h1 class="font-bold text-lg">REGISTRATION</h1>
        </div>
        <div class="">
            djwhdwjdhwhhwwwwwwwwwwwwwwwwwwwwwwww
        </div>
    </div>
    <div class="flex justify-center items-center">
        asdasdfeskfesfjejdsmdsnkdnsj
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