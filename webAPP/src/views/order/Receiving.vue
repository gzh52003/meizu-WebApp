<template>
    <div class="receiving">
        <van-image
        src="/images/bigorder.jpg"
        />
        <span>空空如也</span>
    </div>
</template>

<script>
export default {
    name:"Receiving",
}
</script>

<style lang="scss">
.receiving{
    width: 220px;
    height: 220px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    span{
        margin-left: 75px;
        font-size: 18px;
        color: rgba(0,0,0,.4);
    }
}
</style>