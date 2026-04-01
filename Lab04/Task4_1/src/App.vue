<script>
export default{
  data(){
    return{
      guess: null,
      message: 'Start Guessing',
      randomNumber: 1
    }
  },
  methods: {
    generateRandomNumber(){
      return Math.floor(Math.random() * 100);
    },
    startOver(){
      this.randomNumber = this.generateRandomNumber();
      this.message= 'Start Guessing'
      this.guess = null;
      console.log(this.randomNumber)
    },
    giveUp(){
      this.message = `The number was ${this.randomNumber}`;
    },
    checkGuess(){
      const guess = parseInt(this.guess);

      if (!guess || guess < 1 || guess > 100) {
        this.message = 'Please enter a valid number between 1 and 100.';
      } else if (guess === this.randomNumber) {
        this.message = `Correct! The number was ${this.randomNumber}!`;
      } else if (guess > this.randomNumber) {
        this.message = 'Guess lower';
      } else {
        this.message = 'Guess higher';
      }


    },
    mounted(){
      this.startOver()
    }

  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Number Guessign Game</h1>
      </div>
      <div class="row">
        <div class="col-12">
          <label for="guess" class="form-label">
            Please enter your guess from 1 to 100
          </label>
          <input type="number" class="form-control" id="guess" v-model="guess">
        </div>
        <div class="row mt-2">
          <div class="col-12">
            <button @click = "checkGuess" class="btn btn-primary me-2">Check Guess</button>
            <button @click = "giveUp" class="btn btn-danger me-2">Give Up</button>
            <button @click = "startOver" class="btn btn-secondary me-2">Start Over</button>

          </div>
        </div>
        <div class="row">
          <div class="col-12">{{message}}</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped></style>
