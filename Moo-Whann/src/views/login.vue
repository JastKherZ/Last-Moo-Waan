<template>
    <div class="flex flex-col justify-center items-center border bg-gray-100 h-[800px] w-full">
        <div class="font-bold text-center py-4">
            <h1 class="text-lg">SIGN IN</h1>
        </div>
        <div class="flex">
            <div class="flex flex-col my-12">
                <h1 class="font-bold text-sm pb-6">RETURNING CUSTOMERS</h1>
                <label for="username" class="text-sm">Username</label>
                <input type="text" class="px-2 border rounded text-sm mt-1 w-64 h-8"
                    placeholder="Please enter your Username" v-model="username">
                <label for="password" class="text-sm mt-1">Password</label>
                <input :type="password" class="px-2 border rounded text-sm mt-1 w-64 h-8"
                    placeholder="Please enter your Password" v-model="password">
                <div class="flex mt-1">
                    <input type="checkbox" @click="toggleShow">
                    <label for="" class="mx-2 text-sm">Show Password</label>
                </div>
                <button class="bg-black text-white font-bold mt-28 h-10 w-64 border rounded">
                    <a @click.prevent="validateForm">SIGN IN</a>
                </button>
            </div>

            <div class="flex bg-gray-500 w-[1px] h-[360px] mx-16 mt-12">
            </div>

            <div class="flex flex-col my-12">
                <h1 class="font-bold text-sm pb-6">CREATE AN ACCOUNT</h1>
                <label for="" class="items-center text-sm mb-2">สมัครสมาชิคกับ Moo Whan <br> และรับสิทธิประโยชน์ของการมีบัญชี:</label>
                <li class="px-2 text-sm">ติดตามข่าวสารใหม่ๆ รวดเร็วทันใจ</li>
                <li class="px-2 text-sm">เช็คประวัติการสั่งซื้อและดูข้อมูลสินค้า</li>
                <li class="px-2 text-sm">ดูสินค้าได้แม้จะอยู่ที่ไหนก็ตาม</li>
                <router-link to="/register">
                    <button class="bg-black text-white font-bold mt-36 h-10 w-64 border rounded">
                        CREATE AN ACCOUNT
                    </button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showPassword: true,
            username: "",
            password: "",
        }
    },
    computed: {

    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
            console.log(this.showPassword);
            return this.showPassword ? this.password = 'password' : this.password = 'text'
        },
        validateForm() {
            if (this.username == '') {
                alert('Please enter your Username');
                console.log(this.username);
                return false;
            }

            else if (this.password == '') {
                alert('Please enter your Password');
                console.log(this.password);
                return false;
            }
            else {
                this.$router.push("/")
            }

            return true;
        }
    }
};
</script>