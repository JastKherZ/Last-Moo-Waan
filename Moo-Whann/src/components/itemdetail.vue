<template>
    <div class="flex justify-center items-center bg-gray-100">
        <div class="flex border h-[500px] w-[850px]">
            <div class="flex mt-5">
                <img class="h-[200px] w-[200px] ml-5"
                    src="https://media.discordapp.net/attachments/595608417234845715/1097742119977898034/magic_pen.jpeg?width=448&height=448"
                    alt="">
            </div>
            <div class="flex flex-col">
                <p class="ml-48 mb-10 text-2xl font-bold">รายละเอียด</p>
                <p class="ml-28 mb-5">ชื่อ: (Name)</p>
                <p class="ml-28 mb-5">คำอธิบาย: (Description)</p>
                <p class="ml-28 mb-5">ราคา: (Price)</p>
                <p class="ml-28 mb-5">จำนวน <input type="number"> </p>
                
            </div>
            <div class="flex justify-end w-[300px]">
                
                <button class="bg-black text-white font-bold h-[35px] w-[80px] mt-auto mb-5"><router-link to="/basket">เพิ่มสินค้า</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'itemdetail',
}
</script>