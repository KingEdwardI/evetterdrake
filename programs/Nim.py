# Assignment 4
# Programmer: Edward Vetter-Drake
# Date: 2/16/2016
# Version 0

#####################
# Program Description
#####################

"""
The Game of Nim
Pile of marbles between 10-100.
Each player takes a chosen amount
of marbles from the pile.
Player must take at least one marble,
but no more than half of what is in the
pile.
Playing against the computer.
"""

from random import randint

pi = 3.14

# Difficulty generator to decide game_type
def difficulty():
    global game_type
    goo = randint(0, 1)
    if goo == 0:
        game_type = "smart"
    else:
        game_type = "stupid"


# Coin flip to decide who goes first
def coin_flip():
    global turn
    turn = randint(0, 1)


# Generate an initial number of marbles for the pile
def marbles():
    global total_marbles
    total_marbles = randint(10, 100)


# Winner function
def winner():
    global turn

    if turn == 0:
        print("You Win! :D")
    else:
        print("The computer beat you. :(")


# Human player turn function
def player_turn():
    # Variables
    global player_choice
    global top
    global total_marbles
    global turn

    print("You can take up to", top, "marbles")

    player_choice = int(input("How many marbles would you like to take? "))
    # Players choice must be between 1 and half of the total_marbles.
    while 0 < player_choice > top:
        print("You can't take that many marbles.")
        player_choice = int(input("How many marbles would you like to take? "))
    else:
        total_marbles -= player_choice
        turn = 1


# Stupid computer turn
def stupid_nim_turn():
    global computer_choice
    global bottom
    global top
    global total_marbles
    global turn
    bottom = 1

    computer_choice = randint(bottom, top)
    total_marbles -= computer_choice
    print("Computer took", computer_choice, "marbles")
    turn = 0


# Stupid version of game
def stupid_nim():

    marbles()       # Call total_marbles
    coin_flip()     # Call who goes first

    # variables
    global total_marbles
    global turn
    global bottom
    global player_choice
    global top
    bottom = 1

    print("You're playing against Stupid Nim, so have fun")

    while total_marbles > 0:

        # declare top inside while statement
        # or top will no change from the first value
        top = (total_marbles // 2)

        # 1//2 = 0
        # gets stuck because you cant take marbles
        if top == 0:
            top = 1

        print("There are ", total_marbles, " total marbles in the pile.")

        if turn == 0:
            # Run player method
            player_turn()
        else:
            # Run computer method
            stupid_nim_turn()
    else:
        # The last player to take marbles is the loser
        winner()


# Smart version
def smart_nim():

    marbles()       # Call total_marbles
    coin_flip()     # Call who goes first

    # variables
    global total_marbles
    global turn
    global top
    global bottom
    global computer_choice
    bottom = 1
    hnb = [3, 7, 15, 31, 63]    # hard number to beat

    print("You're playing against Smart Nim, so good luck.")
    while total_marbles > 0:
        top = (total_marbles // 2)
        if top == 0:
            top = 1

        print("There are ", total_marbles, " total marbles in the pile.")

        if turn == 0:
            player_turn()


def smart_method():
    global total_marbles
    s = 100
    n = -1
    i = 0
    while i in range(s, n, n):
        x = i ** 2
        if total_marbles > x:
            compMove = total_marbles - i
            total_marbles -= compMove
        else:
            continue



"""
# Smart Nim method (felt like a function was unnecessary)
        elif turn == 1:
            # If the total marbles is equal to the hnb numbers
            # or less than 3, choose randomly
            if total_marbles in hnb or total_marbles < 3:
                computer_choice = randint(bottom, top)
                total_marbles -= computer_choice
                print("Computer took", computer_choice, "marbles")
                turn = 0
            # otherwise, the computer removes enough to create a hnb
            elif 3 < total_marbles < 7:
                computer_choice = total_marbles - 3
                total_marbles -= computer_choice
                print("Computer took", computer_choice, "marbles")
                turn = 0
            elif 7 < total_marbles < 15:
                computer_choice = total_marbles - 7
                total_marbles -= computer_choice
                print("Computer took", computer_choice, "marbles")
                turn = 0
            elif 15 < total_marbles < 31:
                computer_choice = total_marbles - 15
                total_marbles -= computer_choice
                print("Computer took", computer_choice, "marbles")
                turn = 0
            elif 31 < total_marbles < 63:
                computer_choice = total_marbles - 31
                total_marbles -= computer_choice
                print("Computer took", computer_choice, "marbles")
                turn = 0
            elif total_marbles > 63:
                computer_choice = total_marbles - 63
                total_marbles -= computer_choice
                print("Computer took", computer_choice, "marbles")
                turn = 0

    else:
        winner()
"""

# Begin the game
def nim_prompt():

    # Short game description for player
    print("The Game of Nim. Take marbles from a pile. \n"
          "You must take at least one marble. \n"
          "You cannot take more than half of the marbles. \n"
          "The player to take the last marble loses. \n")

    answer = input("Would you like to play a Game of Nim? ")

    if answer == "yes" or "y":
        print("Okay let's get started")
        difficulty()    # Call difficulty
        if game_type == "stupid":
            stupid_nim()    # Call stupid_nim() function and play easy game
        else:
            smart_nim()     # Call smart_nim() function and play hard game
    else:
        print("Goodbye!")   # Quit

# Don't forget to call the first function!
nim_prompt()
