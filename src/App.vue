<template>
  <div class="cards-container">
    <UserCard @change="changeHandler" />
    <template v-for="card in cards" :key="card.title">
      <CardTitle :title="card.title" :img="card.img" :time="card.time" :color="card.color" :activo="activo"/>
    </template>
  </div>
</template>

<script setup>
import CardTitle from './components/TimeCard.vue'
import UserCard from './components/UserCard.vue'
import {ref} from "vue"
let cards = [

  {title: "Work", img: "url('./icon-work.svg')", color: "  hsl(15, 100%, 70%)", time: {"daily": {"current": 5,"previous": 7},"weekly": {"current": 32,"previous": 36},"monthly": {"current": 103,"previous": 128}}},
  { title: "Play", img: "url('./icon-play.svg')", color: " hsl(195, 74%, 62%)" , time: {"daily": {"current": 1,"previous": 2},"weekly": {"current": 10,"previous": 8},"monthly": {"current": 23,"previous": 22}}},
  { title: "Study", img: "url('./icon-study.svg')", color: " hsl(348, 100%, 68%)" , time: {"daily": {"current": 0,"previous": 1},"weekly": {"current": 4,"previous": 7},"monthly": {"current": 17,"previous": 19}}},
  { title: "Exercise", img: "url('./icon-exercise.svg')", color: "  hsl(145, 58%, 55%)" , time: {"daily": {"current": 1,"previous": 1},"weekly": {"current": 4,"previous": 5},"monthly": {"current": 11,"previous": 21}}},
  { title: "Social", img: "url('./icon-social.svg')", color: "  hsl(264, 64%, 52%)" , time: {"daily": {"current": 1,"previous": 3},"weekly": {"current": 5,"previous": 6},"monthly": {"current": 11,"previous": 15}}},
  { title: "Self Care", img: "url('./icon-self-care.svg')", color: " hsl(43, 84%, 65%)" , time: {"daily": {"current": 0,"previous": 1},"weekly": {"current": 2,"previous": 2},"monthly": {"current": 7,"previous": 11}}},
]
let activo = ref("daily")

let changeHandler = (e) => {
  activo.value=e;
}


</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;800&display=swap");
* {
  box-sizing: border-box;
}
body {
  background-color: hsl(226, 43%, 10%);
  font-family: "Rubik", Avenir, Helvetica, Arial, sans-serif;
  padding-top: 50px;
}
p {
  span {
    color: $primario;
  }
}
.cards-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  gap: 20px;
  margin: auto;
}

@media screen and (min-width: 600px) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 250px);
  }
}

@media screen and (min-width: 1100px) {
  .cards-container {
    grid-template-columns: repeat(4, 250px);
  }
}
</style>
