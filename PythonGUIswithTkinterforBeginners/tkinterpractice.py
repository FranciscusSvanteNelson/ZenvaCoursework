from tkinter import *
import tkinter as tk

class myApp:

    def __init__(self, root):
        root.title("My App") #the header/title of the app, the name of the window
        root.geometry("800x600") #opening size of the window
        root.maxsize(1200, 1200)

        frame = Frame(root, width=500, height=500, relief="sunken", borderwidth=2)
        frame.place(x=0, y=0)
        
        #LABEL SECTION
        self.label_text = StringVar()
        label = Label(root, text="First Menu Text", textvariable=self.label_text)
        label.grid(column=1, row=1)
        # label.pack(side=tk.LEFT, padx=10, pady=5) # .pack() adds the widget to the App
        label.configure(text="Second Menu Text", font=("Courier", 30)) #configure as many elements at once as you want
        # label["text"] = "Second Menu Text" # Can change attributes one by one but above method is simpler ^
        # label["font"] = ("Courier", 40)    


        #TEXT ENTRY SECTION
        self.entry_text = StringVar()
        entry = Entry(root, textvariable=self.entry_text)
        # entry.pack(side=tk.LEFT)
        # entry.place(x=100, y=50)
        entry.grid(column=3, row=1)

        # label["textvariable"] = entry_text # Learning example, this will change the first widget's text everytime the user types into the entry text field
        
        #BUTTON SECTION
        button = Button(root, text="Click Here", command=self.press_button) #Don't put () on the end of press_button as we are only referencing the function
        button.place(x=0, y=0)
        button.configure(width=10, height=2, font=("Courier", 10))
        # button.pack(side=tk.LEFT)
        # button.grid(column=1, row=2, sticky=(S, E, W))

        self.list_item_strings = ["One", "Two", "Three", "Four", "Five"] # Setting a List of Values
        list_items = StringVar(value=self.list_item_strings) # Attaching the strings to a stringvar
        listbox = Listbox(root, listvariable=list_items) # creating the actual widget
        listbox["height"] = 3
        # listbox.pack(side=tk.LEFT, padx=40, pady=20)
        listbox.bind("<<ListboxSelect>>", lambda s: self.select_item(listbox.curselection()))
        listbox.grid(column=2, row=2)

    def press_button(self):
        # print("Button Works") # Test if clicking the button works by printing to the console.
        text = self.entry_text.get()
        self.label_text.set(text)
    
    def select_item(self, index):
        selected_item = self.list_item_strings[index[0]]
        # print(selected_item) # A test to see if the console prints out the selected item in the listbox

    

root = Tk()
myApp(root)
root.mainloop() #opens the app when the code is run