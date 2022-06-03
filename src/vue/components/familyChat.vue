<template>
  <div class="chat">
    <h1>Familjechatt
    </h1>
    <input class="chatInput"/>
    <div class="chatOutp"></div>
    <button class="send" v-on:Click="this.sendMessage()">skicka</button>
  </div>
</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            title: 'familyChat',
            bokningar: 'Mina bokningar'
        }
    },
    methods: {
        sendMessage() {
            const mess = document.querySelector('.chatInput');
            const jsonMess = JSON.stringify(mess.value);

            console.log(mess.value);

            store.state.websocket.send(jsonMess);
            document.querySelector('.chatOutp').innerHTML += mess.value + '<br/>';

        },

        checkWebsocket() {
            const ws = new WebSocket("ws://localhost:1234/websocket");
            store.state.websocket = ws;
            ws.addEventListener("open", () => {
                console.log("We are connected");
            });
        },
        
    },
    mounted() {
        this.checkWebsocket();
    },
}
</script>

<style scoped>
.chat {
  height: 25rem;
  width: 75rem;
  border-radius: 3rem;
  border: solid 1px #DB4437;
  box-shadow: 0px 0px 10px #DB4437;
}
</style>