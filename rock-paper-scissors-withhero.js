let result = ''
let wins = 0
let losts = 0
let ties = 0

//Set org value.

function score_show() {
    document.querySelector('.score')
      .innerHTML = (`Score: Wins:${wins}, lost:${losts}, Ties:${ties}`)
}

//Show result.

function result_f(){
    const random = Math.floor(Math.random()* 14)

    if (random <= 5){
        result = 'Scissors'
    } else if (random > 5 & random < 10) {
        result = 'Paper'
    } else {
        result = 'Rock'
    }
}

//Check player results

function check_rock() {
    if (result == 'Rock'){
        ties += 1;
    } else if (result == 'Paper') {
        wins += 1;

        
    } else {
        losts += 1;
    }
}

function check_paper() {
    if (result == 'Rock'){
        wins += 1
    } else if (result == 'Paper') {
        ties += 1
    } else {
        losts += 1
    }
}

function check_scissors() {
    if (result == 'Rock'){
        wins += 1
    } else if (result == 'Paper') {
        losts += 1
    } else {
        ties += 1
    }
}

//Reset points.

function reset() {
    wins = 0
    losts = 0
    ties = 0
}