<template>
    <div class="time-container">
        <div class="time-flex">
            <p>{{title}}</p>
            <img src="../assets/icon-ellipsis.svg">
        </div>
        <div class="time-flex-low">
            <h2>{{showTime[0]}}hrs</h2>
            <p class="desaturated">last {{showTime[1]}} - {{showTime[2]}}hrs</p>  
        </div>
    </div>
</template>
<script setup>
import {computed} from "vue";


const props=defineProps({
    title:{
        type:String,
        required:true
        },
    img:{
        type:String,
        required:true
        },
    time:{
        type:Object,
        required:true
        },
    color:{
        type:String,
        required:true
    },activo:{
        type:String,
        required:true
    }
})

let showTime=computed(()=>{
    if(props.activo=="daily"){
        return [props.time.daily.current,"Day",props.time.daily.previous]
    }else if(props.activo=="weekly"){
        return [props.time.weekly.current,"Week",props.time.weekly.previous]
    }else {
        return [props.time.monthly.current,"Month",props.time.monthly.previous]
    }
})

</script>
<style lang="scss">
.time-container{
    background-color:hsl(235, 46%, 20%);
    padding:1rem;
    min-width: 250px;
    width: fit-content;
    border-radius: 1rem;
    position:relative;
    margin-top:40px;
    &::after{
        position:absolute;
        inset: 0;
        top:-40px;
        content:"";
        background-color: v-bind(color);
        background-image:v-bind(img);
        background-repeat: no-repeat;
        background-position:90% 0%;
        background-size: 4rem 4rem;
        border-radius: 1rem;
        z-index: -1;
    }
    &:hover{
        cursor:pointer;
        background-color:hsl(235, 45%, 61%);
    }
    .time-flex{
        display:flex;
        justify-content: space-between;
        img{
            z-index:11;
            align-self: center;
            &:hover{
                cursor:pointer;
            }
        }
    }
    h2{
        color:white;
        font-size: 3rem;
        font-weight: 300;
        margin:20px 0;
    }

    p{
        color:white;
        font-weight: 700;
    }
    .desaturated{
        color:hsl(236, 100%, 87%);
    }
}
@media  screen and (max-width:600px) {
    .time-container{
        width:90%;
        max-width: unset;
    }
    .time-flex{
        p{
            margin:0;
            margin-bottom: 10px;
            font-weight: 300;
        }
    }
    .time-flex-low{
        display:flex;
        align-items: center;
        justify-content: space-between;
        h2{
            font-size: 2rem;
            margin:0;
        }
        p{
            font-weight: normal;
            margin:0;
        }
    }
}
    
</style>