<template>
    <div class="flex flex-col border">
        <div class="flex justify-center items-center my-8 border">
            <h1 class="font-bold">SHOPPING BAG</h1>
        </div>
        <div class="flex justify-center items-center border my-4">
            <p class="text-sm underline m-2">ตระกร้าสินค้า (number)</p>
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