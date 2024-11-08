# 9103-Final-Project_Group-E_Qingyang Wang

This project is an interactive animation adapted from **Claude Monet’s *Impression, Sunrise***, where users can create ripple effects on a simulated water surface by clicking on various parts of the canvas. 

## **Interaction Instructions**

  1.  Waves continuously roll on the water surface, to simulate real water undulations for a more vivid display.
  2. Click anywhere on the canvas above the waterline to drop a stone. Stones will fall into the water and create ripples when they reach the surface.
  3. Click directly on or below the waterline to immediately generate a ripple at the clicked location.
  4. The ripples gradually fade as they expand, which looks like real ripple effects.

## **Details of my code**

### **Animation Driver: User Input**

My animation is driven by **mouse clicks**, making each animation session unique based on user input. This approach allows viewers to engage directly with the artwork, mimicking the motion and fluidity of water through their actions.

### **Animated Properties**

- **Ripples**: Each ripple effect grows and fades after a stone falls into the water or when the user clicks below the waterline.
- **Stones**: Stones animate as they fall from the point of the click to the water surface, adding a realistic touch.

## **Inspiration**

The ripple and wave effects were inspired by various interactive water simulations and Monet’s focus on the transience of light and motion. Examples of digital water ripple animations helped shape my approach to rendering the interactive water surface in this project.

## **Technical Explanation**

***Animation Logic***

- **Event-based Interactivity**: mousePressed() events trigger either a falling stone or a direct ripple, depending on the click position relative to the water level.
- **Ripple Expansion**: Ripples grow and fade by adjusting size and opacity over time, creating a dynamic effect.
- **Stone Fall Simulation**: Stones are created at the mouse click position and fall until they hit the water surface, at which point they generate a ripple.

***The ripple and stone effects are managed through custom classes (Ripple and Stone), optimizing the simulation for performance and reusability.***

## **Changes to Group Code**

1. Adding an oscillating curve effect to simulate wave motion on the water surface.
2. Adding custom event handling for interactive input.
3. Implementing ripple and stone behaviors that dynamically respond to user actions.
