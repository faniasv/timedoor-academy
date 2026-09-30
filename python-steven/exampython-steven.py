from tkinter import HIDDEN, NORMAL, Tk, Canvas

root = Tk()

root.title("Pig Pet")

# Canvas
c = Canvas(
    root,
    width=800,
    height=850,
    bg='light blue',
    highlightthickness=0
)

c.pack()

# =========================
# COLORS
# =========================

c.body_color = 'SkyBlue1'

# =========================
# BODY / FACE
# =========================

body = c.create_oval(
    65, 95, 730, 760,
    outline=c.body_color,
    fill=c.body_color
)

# =========================
# EARS
# =========================

# Left ear
ear_left = c.create_polygon(
    155, 135,
    255, 175,
    155, 215,
    outline='black',
    fill=c.body_color
)

# Right ear
ear_right = c.create_polygon(
    540, 175,
    640, 135,
    640, 215,
    outline='black',
    fill=c.body_color
)

# =========================
# EYES
# =========================

# Black eye area
eye_background = c.create_rectangle(
    315, 295,
    485, 380,
    outline='black',
    fill='black'
)

eye_left = c.create_oval(
    335, 315,
    375, 355,
    outline='white',
    fill='white'
)

eye_right = c.create_oval(
    425, 315,
    465, 355,
    outline='white',
    fill='white'
)

# Pupils
pupil_left = c.create_oval(
    350, 335,
    360, 345,
    outline='black',
    fill='black'
)

pupil_right = c.create_oval(
    440, 335,
    450, 345,
    outline='black',
    fill='black'
)

# =========================
# MOUTH
# =========================

mouth_normal = c.create_line(
    335, 555,
    400, 580,
    465, 555,
    smooth=1,
    width=4,
    fill='black',
    state=NORMAL
)

mouth_happy = c.create_line(
    335, 555,
    400, 595,
    465, 555,
    smooth=1,
    width=4,
    fill='black',
    state=HIDDEN
)

mouth_sad = c.create_line(
    335, 555,
    400, 535,
    465, 555,
    smooth=1,
    width=4,
    fill='black',
    state=HIDDEN
)

# =========================
# TONGUE
# =========================

tongue_main = c.create_rectangle(
    350, 555,
    450, 620,
    outline='red',
    fill='red',
    state=HIDDEN
)

tongue_tip = c.create_oval(
    350, 600,
    450, 635,
    outline='red',
    fill='red',
    state=HIDDEN
)

# =========================
# CHEEKS
# =========================

cheek_left = c.create_oval(
    120, 390,
    180, 450,
    outline='pink',
    fill='pink',
    state=HIDDEN
)

cheek_right = c.create_oval(
    620, 390,
    680, 450,
    outline='pink',
    fill='pink',
    state=HIDDEN
)

# =========================
# BOW TIE
# =========================

bow_left = c.create_polygon(
    300, 700,
    400, 740,
    300, 780,
    outline='black',
    fill='purple'
)

bow_right = c.create_polygon(
    400, 740,
    500, 700,
    500, 780,
    outline='black',
    fill='purple'
)

bow_center = c.create_oval(
    380, 725,
    420, 755,
    outline='black',
    fill='black'
)

# =========================
# BLINKING
# =========================

def toggle_eyes():

    current_color = c.itemcget(eye_left, 'fill')

    if current_color == 'white':
        new_color = c.body_color
    else:
        new_color = 'white'

    current_state = c.itemcget(pupil_left, 'state')

    if current_state == HIDDEN:
        new_state = NORMAL
    else:
        new_state = HIDDEN

    # Change eye color
    c.itemconfigure(
        eye_left,
        fill=new_color
    )

    c.itemconfigure(
        eye_right,
        fill=new_color
    )

    # Show/hide pupils
    c.itemconfigure(
        pupil_left,
        state=new_state
    )

    c.itemconfigure(
        pupil_right,
        state=new_state
    )


def blink():

    toggle_eyes()

    root.after(
        250,
        toggle_eyes
    )

    root.after(
        3000,
        blink
    )


# Start blinking
root.after(1000, blink)

root.mainloop()
