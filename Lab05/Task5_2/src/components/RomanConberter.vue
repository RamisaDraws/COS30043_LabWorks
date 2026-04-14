<script>
export default{
    data(){
        return{
            numVar: null,
        }
    },
    computed:{
        convertedValue(){
            let num = this.numVar;
            if(isNaN(num) || num == ""){
                return "Please enter a number from 1 to 99"
            }
            if(num < 1 || num > 99){
                return "Please enter a number from 1 to 99"
            }

            const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
            const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

            let result = '';
            result = tens[Math.floor(num/10)]
            result += ones[num%10]
            return result;
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Roman Numerical Converter</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <label for="numVar" class="form-label">Enter a number:</label>
                <input type="number" class="form-control" v-model="numVar" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <p>{{convertedValue}}</p>
            </div>
        </div>
    </div>
</template>
