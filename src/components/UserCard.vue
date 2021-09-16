
<script setup>
import {ref} from "vue"
const emit = defineEmits(['change'])
let daily= ref(true);
let weekly=ref(false);
let monthly=ref(false);
let reportHandler=(active)=>{
    for (let elem of [daily,weekly,monthly]){
        elem.value=false
    }
    if(active=="daily"){daily.value=true}
    else if(active=="weekly"){weekly.value=true}
    else {monthly.value=active}
    emit("change",active)
}

</script>

<template>
    <div class="user-card">
        <div class="half">
            <img src="../assets/image-jeremy.png" alt="">
            <div class="column">
                <p class="desaturated">Report for </p>
                <h2>Jesus Marcano</h2>
            </div>
        </div>
        <div class="report-time">
            <p @click="reportHandler('daily')" :class="{active:daily}">Daily</p>
            <p @click="reportHandler('weekly')" :class="{active:weekly}">Weekly</p>
            <p @click="reportHandler('monthly')" :class="{active:monthly}">Montly</p>
        </div>
    </div>
</template>
<style lang="scss">


.user-card{
    background-color:hsl(246, 80%, 60%);
    padding:30px;
    border-radius: 1rem;
    position:relative;
    width: fit-content;
    max-width: 250px;
    z-index: 2;
    grid-row: 1 / span 2;
    align-self: stretch;
    p{
        color:white;
    }
    img{
        border:3px solid white;
        border-radius: 50%;
        width:100px;
        height:100px;
        margin-bottom: 20px;
    }
    h2{
        color:white;
        font-size:3rem;
        font-weight: 300;
        margin:10px 0;
    }
    .desaturated{
        color:hsl(236, 100%, 87%);
    }
    .report-time{
        background-color:hsl(235, 46%, 20%);
        border-radius: 1rem;
        position:absolute;
        width: 100%;
        left:0;
        bottom: 0;
        padding:30px;
        z-index: -1;
        p{
            color:hsl(236, 100%, 87%);
            &:hover{
                color:white;
                cursor:pointer;
            }
        }
        .active{
            color:white;
        }
    }
}
@media  screen and (max-width:600px) {
  .user-card{
      padding:30px 20px;
      align-self: center;
      margin-bottom: 20px;
      width: 90%;
      max-width: unset;
      .report-time{
          display: flex;
          justify-content: center;
          gap:20px;
          padding:0px 30px;
          bottom:unset;
      }
      h2{
          font-size: 1.2rem;
          margin:0;
      }

      img{
          width: 60px;
          height: 60px;
          margin-bottom: 0;
      }
      .half{
          display:flex;
          align-items: center;
          margin-bottom: 20px;
          gap:20px;
                p{
          margin:0;
          font-size:.8rem ;
      }
      }
  }
}
</style>