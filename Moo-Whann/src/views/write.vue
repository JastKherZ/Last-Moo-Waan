<template>
    <div class="text-center">



        <p class="text-3xl font-bold py-6">เครื่องเขียน</p>
        <!-- ต้องหาวิธีใช้ component card มาช่วย -->


        <div class="grid  grid-cols-12">

            <div v-for="(item, i) in data" :key="i" class="col-span-3">
                <div v-show="item.type === 'write'" class="max-w-sm rounded overflow-hidden shadow-lg m-6">
                    <img class="w-full"
                        :src="`${item.image}`"  
                        alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ item.name }}</div>
                        <p class="text-gray-700 text-base">
                            {{ item.price }} ฿
                        </p>
                        <div class="flex justify-end mt-5 ">
                            <div class="flex">
                                <button class=" mr-5 h-[30px] w-[90px] border border-black bg-white font-bold">
                                    <router-link :to="`/itemdetail/${item.item_id}`">
                                        ดูเพิ่มเติม
                                    </router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <!-- 4 -->

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'write',
    data() {
        return {
            data: [],
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        async list() {
            const res = await axios.get("http://localhost:3000/api/items")
            let write = res.data.filter(todo => { if (todo.type === 'write') return todo; }
            ); // throws error
            this.data = write
        }
    }
}
</script>