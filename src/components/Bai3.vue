<template>
  <div class="calculator">

    <input type="text" class="calculator-screen" :value="current || '0'" disabled />

    <div class="calculator-keys">

      <button type="button" class="den" @click="clear">C</button>
      <button type="button" class="den" @click="del">del</button>
      <button type="button" class="den" @click="percent">%</button>
      <button type="button" class="vang" @click="divide">/</button>


      <button type="button" class="xam" @click="append('7')" >7</button>
      <button type="button" class="xam" @click="append('8')" >8</button>
      <button type="button" class="xam" @click="append('9')" >9</button>
      <button type="button" class="vang" @click="times">*</button>


      <button type="button" class="xam" @click="append('4')" >4</button>
      <button type="button" class="xam" @click="append('5')" >5</button>
      <button type="button" class="xam" @click="append('6')" >6</button>
      <button type="button" class="vang" @click="minus">-</button>


      <button type="button" class="xam" @click="append('1')" >1</button>
      <button type="button" class="xam" @click="append('2')" >2</button>
      <button type="button" class="xam" @click="append('3')" >3</button>
      <button type="button" class="vang" @click="add">+</button>


      <button type="button" class="equal-sign xam" @click="append('0')">0</button>

      <button type="button" class="xam" value="." @click="dot">.</button>
      <button type="button" value="all-clear" class="vang" @click="equal">=</button>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods:{
    clear() {
      this.current = '';
    },
    del() {
      this.current = this.current.substring(0,this.current.length -1);
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => eval(b / a);
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => eval(a * b);
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => eval(b - a);
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => eval(a + b);
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.calculator {
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 260px;
  background-color: #2f2f31;
  margin-top: 50px;
  margin-left: 35%;
  margin-bottom: 100px;

  .calculator-screen {
    width: 99%;
    height: 80px;
    border: none;
    background-color: #2f2f31;
    color: #cccccc;
    text-align: right;
    border-radius: 10px;
    font-size: 3rem;
  }

  .calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3px;

    button {
      height: 60px;
      color: #cccccc;
      border: none;
      border-radius: 8px;
      font-size: 25px;
      cursor: pointer;
    }

    .den{
      background-color: #424345;
    }

    .xam{
      background-color: #616163;
    }

    .vang{
      background-color: #f49e3f;
    }

    .equal-sign {

      grid-area: 5 / 3 / 6 / 1;
    }
  }
}






</style>
