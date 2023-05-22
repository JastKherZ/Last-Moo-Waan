<template>
    <div class="flex flex-col items-center border bg-gray-100 h-[800px] w-full">
        <div class="flex flex-col items-center my-8 border">
            <h1 class="text-xl font-bold">SHOPPING BAG</h1>
            <label for="" class="text-sm">ตะกร้าสินค้า (number)</label>
        </div>
        <div class="flex justify-center items-center border my-4">
            <p class="text-sm underline m-2">ตะกร้าสินค้า (0)</p>
        </div>
        <div class="flex flex-col border">
            <p class="text-sm ml-2">คุณมีสินค้า number รายการอยู่ในตะกร้า</p>
            <router-link to="/">
                <div class="space-x-5 ml-2">
                    <button class="bg-white font-bold border-4">
                            CONTINUE SHOPPING
                        </button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>