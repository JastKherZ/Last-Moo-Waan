<template>
    <div class="flex justify-center items-center bg-gray-100" v-for="(item, i) in data" :key="i">
        <div class="flex border h-[500px] w-[850px]">
            <div class="flex mt-5">
                <img class="h-[200px] w-[200px] ml-5"
                    src="https://media.discordapp.net/attachments/595608417234845715/1097742119977898034/magic_pen.jpeg?width=448&height=448"
                    alt="">
            </div>
            <div class="flex flex-col">
                <p class="ml-48 mb-10 text-2xl font-bold">รายละเอียด</p>
                <p class="ml-28 mb-5">ชื่อ: {{ item.name }}</p>
                <p class="ml-28 mb-5">คำอธิบาย: {{ item.details }}</p>
                <p class="ml-28 mb-5">ราคา: {{ item.price }}</p>
                <p class="ml-28 mb-5">จำนวนที่เหลือ: {{ item.amount }}</p>
                <p class="ml-28 mb-5">จำนวน <input type="number"> </p>
            </div>
            <div class="flex justify-end w-[300px]">
                <button class="bg-black text-white font-bold h-[35px] w-[80px] mt-auto mb-5"><router-link to="/basket">เพิ่มสินค้า</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'itemdetail',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        // console.log(this.$route.params.id)
     
        this.list()

    },
    methods: {
        async list() {
            const res = await axios.get("http://localhost:3000/api/items")
            let tododata = res.data.filter(todo => { if (todo.item_id === this.$route.params.id) return todo;}
            ); // throws error
        this.data = tododata
    }
}
}
</script>