var rock = document.querySelector("#rock")
var paper = document.querySelector("#paper")
var scissors = document.querySelector("#scissors")
var answer = document.querySelector(".answer")
var match_list_container = document.querySelector("ul")

var player_points = 0
var computer_points = 0
var match_count = 0



const computer_result = () => {
    var number = createRandomNumber(0, 2)
    let arr = ['Rock', 'Paper', 'Scissors']

    return arr[number]
}   

function Janken( player_choice ) {
    let computer = computer_result()
    let result = ''
    let match_result = ''
    let game_over = false
    match_count++

    if ( player_choice == computer ) 
    { 
        result = 'draw' 
    }

    // Player picks rock
    if ( player_choice == 'Rock' && computer == 'Scissors' ) 
    { 
        result = 'win'
        player_points++
    }
    if ( player_choice == 'Rock' && computer == 'Paper' ) 
    { 
        result = 'lose'
        computer_points++
    }

    // Player picks paper
    if ( player_choice == 'Paper' && computer == 'Scissors' ) 
    { 
        result = 'lose'
        computer_points++
    }
    if ( player_choice == 'Paper' && computer == 'Rock' ) 
    { 
        result = 'win'
        player_points++
    }

    // Player picks scissors
    if ( player_choice == 'Scissors' && computer == 'Rock' ) 
    { 
        result = 'lose'
        computer_points++
    }
    if ( player_choice == 'Scissors' && computer == 'Paper' ) 
    { 
        result = 'win'
        player_points++
    }

    // Calculate match
    if ( player_points == 3 ) {
        match_result = 'Player Wins!'
        game_over = true
    }
    if ( computer_points == 3 ) {
        match_result = 'Computer Wins!'
        game_over = true
    }

    // if ( game_over ) {
    //     result = ''
    //     match_result = ''
    //     game_over = false
    //     player_points = 0
    //     computer_points = 0
    // }

    
    // return `${player_choice} vs ${computer} : You ${result} | Points: ${player_points} | Result: ${match_result}`;
    this.player_choice = player_choice
    this.computer_choice = computer
    this.result = result
    this.player_points = player_points
    this.computer_points = computer_points
    this.match_result = match_result
    this.match_count = match_count
}

function DisplayResult( game ) {
    if ( game.match_result != '' )
    {
        match_list_container.innerHTML += `<li class='${game.result}'>
            Round ${game.match_count}: (${game.result}) You (${game.player_choice}) vs. Computer (${game.computer_choice})
        </li>`
        match_list_container.innerHTML += `<li class='game_over'>
            Game Over! ${game.match_result}
        </li>`
    }
    else {
        match_list_container.innerHTML += `<li class='${game.result}'>
            Round ${game.match_count}: (${game.result}) You (${game.player_choice}) vs. Computer (${game.computer_choice})
        </li>`
    }
}


function createRandomNumber( min, max ) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random () * (max - min + 1)) + min
}

rock.onclick = () => {
    var game = new Janken( 'Rock' )
    console.log(game);
    DisplayResult(game)
}
paper.onclick = () => console.log(janken( paper.innerHTML ))
scissors.onclick = () => console.log(janken( scissors.innerHTML ))

/*
Rules:
1. Rock beats scissors
2. Rock loses to paper
3. Scissors beats paper
4. Scissors loses to rock
5. Paper beats rock
6. Paper loses to scissors
7. Both results to draw
8. Game is limited to 3 score
9. First to reach 3 points, wins!
*/