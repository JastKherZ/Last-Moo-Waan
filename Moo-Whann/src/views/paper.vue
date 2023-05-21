<template>
    <div class="text-center">
        <p class="text-3xl font-bold py-6">กระดาษ</p>
        <!-- ต้องหาวิธีใช้ component card มาช่วย -->
        <div class="grid  grid-cols-12">

        <div v-for="(item, i) in data" :key="i" class="col-span-3">
            <div v-show="item.type === 'paper'" class="max-w-sm rounded overflow-hidden shadow-lg m-6">
                <img class="w-full"
                    src="https://media.discordapp.net/attachments/595608417234845715/1097742119977898034/magic_pen.jpeg?width=448&height=448"
                    alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ item.name }}</div>
                    <p class="text-gray-700 text-base">
                        {{ item.details }}
                    </p>
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
    name: 'paper',
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
            let write = res.data.filter(todo => { if (todo.type === 'paper') return todo; }
            ); // throws error
            this.data = write
        }
    }

}
</script>