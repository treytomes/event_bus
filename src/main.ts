
import * as event_bus from './event_bus';
import * as events from './events';

event_bus.initialize();

const recipes = [
    {
        name: 'Best Homemade Soup',
        ingredients: ['broth', 'carrots', 'tomatoes'],
        result: 'bowl of soup'
    },
    {
        name: 'Simple Burger',
        ingredients: ['beef', 'buns', 'ketchup'],
        result: 'burger'
    },
    {
        name: 'Starter Pizza',
        ingredients: ['dough', 'tomatoes', 'cheese'],
        result: 'pizza'
    }
];

// This one will work, but the event has no where to land.
window.eventBus.dispatch(events.beginCrafting, recipes);

// Now we register the event on the bus.
const registration = window.eventBus.register(events.beginCrafting, (recipes) => {
  document.body.innerHTML += `
    <div>
      <h2>Crafting has started!</h2>
      <h3>Recipes</h3>
      <pre>${JSON.stringify(recipes, undefined, 2)}</pre>
    </div>
  `;
});

// Now when we dispatch the event to the bus, the event handler will pick it up.
window.eventBus.dispatch(events.beginCrafting, recipes);

// Remove the event from the bus.
registration.unregister();

// Testing to ensure that this event does nothing.
window.eventBus.dispatch(events.beginCrafting, recipes);

console.log('Done!')