class GameObject: # this is now the superclass
    
    def __init__(self, name, x_pos, y_pos):
        self.name = name
        self.x_pos = x_pos
        self.y_pos = y_pos

    def move(self, by_x_amount, by_y_amount):
        self.x_pos += by_x_amount
        self.y_pos += by_y_amount
    
# create a subclass that inherits from GameObject class
class Enemy(GameObject):
    
    # implement different initializer function with additional attributes
    def __init__(self, name, x_pos, y_pos, health):
        super().__init__(name, x_pos, y_pos)
        self.health = health
    
    # implement function to reduce health
    def take_damage(self, amount):  
        self.health -= amount

game_object = GameObject("Game object", 1, 2)

# create an enemy object
enemy = Enemy("Enemy", 5, 10, 100)

print(game_object.name)
print(enemy.name)

# only the subclass has access to the new take_damage function
enemy.take_damage(20)
print(enemy.health)

class GameObject:
    
    def __init__(self, name, x_pos, y_pos):
        self.name = name
        self.x_pos = x_pos
        self.y_pos = y_pos

    # implement a move function
    def move(self, by_x_amount, by_y_amount):
        self.x_pos += by_x_amount
        self.y_pos += by_y_amount
    
game_object = GameObject("Enemy", 1, 2)
print(game_object.name)
game_object.name = "Enemy 1"
print(game_object.name)

# accessing more properties of the game object
print(game_object.x_pos)
print(game_object.y_pos)

# use the new move function to change x and y positions of the game object
game_object.move(5, 10)

# check the new position
print(game_object.x_pos)
print(game_object.y_pos)

# create a different game object with the same class
other_game_object = GameObject("Player", 2, 0)

# access the properties of the new game object
print(other_game_object.name)
print(other_game_object.x_pos)
print(other_game_object.y_pos)

# example of value types
one_int = 5
another_int = one_int # value is copied
print(one_int)
print(another_int)

another_int = 10 # only this value is changed
print(one_int)
print(another_int)

# example of reference types with objects
other_game_object = game_object # a reference to the original game object
print(other_game_object.name)

other_game_object.name = "new name" # properties in both objects are changed 
print(other_game_object.name)
print(game_object.name)

class GameObject:
    
    # the initializer function
    def __init__(self, name, x_pos, y_pos):
        self.name = name
        self.x_pos = x_pos
        self.y_pos = y_pos

# create a new game object
game_object = GameObject("Enemy", 1, 2)
# access the properties of the game object
print(game_object.name)
# change game object properties to new values
game_object.name = "Enemy 1"
print(game_object.name)

position = 0

# implement function to take in a parameters
def move_player(position, by_amount):
    position += by_amount
    # produce an output from the function
    return position
   
# pass values to the function 
position = move_player(position, 5)
position = move_player(position, 2)
print(position)

# current position
position = 0

# implement function for increasing player position
def move_player():
    global position # access the variable outside the function
    position += 1
    print(position)
    
# call the function
move_player()

# operators you will be looking at
# + - * / % // ** =

x_position = 10

# addition
forward = x_position + 1
print(forward)

# subtraction
backward = x_position - 1
print(backward)

# modulo operation
remainder = 5 % 2
print(remainder)

# floor division
floor_division = 5 // 2
print(floor_division)

# exponentiation
five_squared = 5 ** 2
print(five_squared)

# combining arithmetic and assignment operators
# x_position = x_position + 1
x_position += 1
print(x_position)

# concatenating strings
first_name = "Franciscus "
last_name = "Nelson"
print(first_name + last_name)

# declare a boolean variable and assign a state
is_game_over = False
is_game_over = True

print(is_game_over)

# find out the type of the variable
print(type(is_game_over))

# reassign the variable type
is_game_over = 1 # integer type
print(is_game_over)
print(type(is_game_over))

# declare a string variable and assign text data
name = 'Franciscus'
is_game_over_text = "False"
age_as_a_number = "28"
print(name)
print(type(name))

# combine a string with a numerical value
age = 28
name_and_age = "Franciscus: {}".format(age)
print(name_and_age)

# create a variable and assign a value to it
# name = value
# x_position = 10 # this is an integer variable
# print(x_position)

# increase the value of the variable by 5
# x_position = 15
# print(x_position)

# pi = 3.14 # this is a float variable
# pi = 3.14159
# print(pi)

# changing the type of an integer variable
# x_position = 15.0
# print(x_position)

# find out the type of a variable
# print(type(x_position))