<template>
    <div>
        <input type="text" class="input3">
        <div class="result"></div>
        <form @submit="checkForm" action="/" method="POST">
            <h1>{{input1}} {{input2}}</h1>
            <input type="text" class="input1" v-model="input1">
            <input type="text" class="input2" v-model="input2">

            <button>submit</button>
        </form>
    </div>
</template>

<script>
export default {
    layout: "contactlayout",
    data() {
        return {
            input1: null,
            input2: null
        }
    },
    methods: {
        checkForm(e) {
            if(this.input1 && this.input2) {
                alert('submit');
            }
            e.preventDefault();
        }
    },
    mounted() {
        window.onkeyup = keyup;
        let textV;

        function keyup(e) {
            if(e.keyCode >= 65 && e.keyCode <= 90) {
                textV = e.target.value;
                console.warn(textV);
                document.querySelector('.result').innerHTML = textV;
            }
        }

        keyup(document.querySelector('.input3'));
    }
}
</script>