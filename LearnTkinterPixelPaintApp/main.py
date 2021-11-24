from tkinter import *
import tkinter.colorchooser
from PIL import ImageGrab

class PixelApp:

    def __init__(self, root):
        self.root = root
        self.root.title("Pixel Art")

        cell_length = 50
        grid_width = 20
        grid_height = 10

        self.color_chooser = tkinter.colorchooser.Chooser(self.root)
        self.chosen_color = None
        self.is_pencil_selected = False
        self.is_eraser_selected = False

        self.drawing_grid = Canvas(self.root)
        self.drawing_grid.grid(column=0, row=0, sticky=(N, E, S, W))
        
        self.cells = []
        for i in range(0, grid_height):
            for j in range(0, grid_width):
                cell = Frame(self.drawing_grid, width=cell_length, height=cell_length, bg="white", highlightbackground="black", highlightcolor="black", highlightthickness="1")
                cell.grid(column=j, row=i)
                cell.bind('<Button-1>', self.tap_cell)
                self.cells.append(cell)

        control_frame = Frame(self.root, height=cell_length)
        control_frame.grid(column=0, row=1, sticky=(N, E, S, W), padx=5, pady=5)

        new_button = Button(control_frame, text="New Project", command=self.press_new_button)
        new_button.grid(column=0, row=0, columnspan=2, sticky=(N, E, S, W), padx=5, pady=5)

        save_button = Button(control_frame, text="Save", command=self.press_save_button)
        save_button.grid(column=2, row=0, columnspan=2, sticky=(N, E, S, W), padx=5, pady=5)

        self.pencil_image = PhotoImage(file="LearnTkinterPixelPaintApp\pencil.png").subsample(2,3)
        pencil_button = Button(control_frame, text="Pencil", image=self.pencil_image, command=self.press_pencil_button)
        pencil_button.grid(column=8, row=0, columnspan=2, sticky=(N, E, S, W), padx=5, pady=5)

        self.eraser_image = PhotoImage(file="LearnTkinterPixelPaintApp\eraser.png").subsample(2,3)
        erase_button = Button(control_frame, text="Erase", image=self.eraser_image, command=self.press_erase_button)
        erase_button.grid(column=10, row=0, columnspan=2, sticky=(N, E, S, W), padx=5, pady=5)

        self.selected_color_box = Frame(control_frame, borderwidth=2, relief="raised", bg="white")
        self.selected_color_box.grid(column=15, row=0, sticky=(N, E, S, W), columnspan=2, padx=6, pady=6)

        pick_color_button = Button(control_frame, text="Pick Color", command=self.press_color_button)
        pick_color_button.grid(column=17, row=0, columnspan=3, sticky=(N, E, S, W), padx=5, pady=5)

        columns, rows = control_frame.grid_size()
        for column in range(columns):
            control_frame.columnconfigure(column, minsize=cell_length)
        for row in range(rows):
            control_frame.rowconfigure(row, minsize=cell_length)
        
    def tap_cell(self, event):
        widget = event.widget
        index = self.cells.index(widget)
        selected_cell = self.cells[index]
        if self.is_eraser_selected:
            selected_cell["bg"] = "white"
        if self.is_pencil_selected and self.chosen_color != None:
            selected_cell["bg"] = self.chosen_color



    def press_new_button(self):
        for cell in self.cells:
            cell["bg"] = "white"
        self.selected_color_box["bg"] = "white"
        self.chosen_color = None
        self.is_eraser_selected = False
        self.is_pencil_selected = False

    def press_save_button(self):
        x = self.root.winfo_rootx() + self.drawing_grid.winfo_x()
        y = self.root.winfo_rooty() + self.drawing_grid.winfo_y() + 35
        width = x + 2000
        height = y + 1000

        _ = ImageGrab.grab(bbox=(x, y, width, height)).save("pixelart.png")


    def press_pencil_button(self):
        self.is_pencil_selected = True
        self.is_eraser_selected = False


    def press_erase_button(self):
        self.is_eraser_selected = True
        self.is_pencil_selected = False

    def press_color_button(self):
        color_info = self.color_chooser.show()
        chosen = color_info[1]
        if chosen != None:
            self.chosen_color = chosen
            self.selected_color_box["bg"] = self.chosen_color
        
    

    


root = Tk()
PixelApp(root)
root.mainloop()