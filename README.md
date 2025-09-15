# Drone Delights – Food Delivery by Drone

I built this project as part of the "Gränssnittsutveckling" course at Newton Yrkeshögskola (VT25). It's a front-end web app that simulates a modern food delivery service using drones. You can browse the menu, add items to your cart, go through checkout, and see a confirmation page. I wanted to make it simple, smooth, and easy to use, with a clean look.

## Getting Started

To run the project on your computer:

    npm install
    npm run dev
    npm start

To start the JSON server for the mock data (products and orders):

    npx json-server --watch db.json --port 3001
    npm run server

## Purpose and Objectives

The main goal was to practice building a full front-end application with React. I wanted something that feels like a real service, where users can actually go through the process of choosing food and placing an order. It's also part of my portfolio, so I wanted it to look neat and professional.

## Technologies

- React 18
- JSON-server for products and orders
- CSS for styling
- LocalStorage for cart management
- UUID for unique order IDs
- Figma for wireframes and layout

## Features

- Homepage: Simple introduction to the service
- Menu Page: Browse products, filter by category, add to cart
- Cart: See and update selected items
- Checkout: Fill in name, address, phone, and payment info
- Confirmation Page: View order summary
- About Us: Info about the service

## What I Learned

This project taught me a lot about working with state in React and keeping the UI in sync with LocalStorage. I also learned how to structure components in a clear way and think about user flows.

Next time, I’d like to try TypeScript, add a few animations, and maybe connect it to a real backend for more realistic order handling.

## Conclusion

This project shows that I can build a functional and responsive web app that looks good and works well. It’s a solid foundation for future, more complex projects.

# Drone Delights – Matleverans med drönare (Svenska)

Jag gjorde det här projektet som en del av kursen "Gränssnittsutveckling" på Newton Yrkeshögskola (VT25). Det är en front-end webapp som simulerar en modern matleveranstjänst med drönare. Du kan kolla menyn, lägga till produkter i varukorgen, göra checkout och se en bekräftelsesida. Jag ville att det skulle vara enkelt, smidigt och lättanvänt, med ett rent utseende.

## Kom igång

För att köra projektet lokalt:

    npm install
    npm run dev
    npm start

För att starta JSON-servern för mock-data:

    npx json-server --watch db.json --port 3001
    npm run server

## Syfte

Syftet var att öva på att bygga en hel frontendapplikation med React. Jag ville ha något som känns som en riktig tjänst, där användare faktiskt kan gå igenom processen att välja mat och lägga en beställning. Eftersom det också är en del av min portfolio ville jag att det ska se snyggt och proffsigt ut.

## Teknologier

- React 18
- JSON-server för produkter och ordrar
- CSS för styling
- LocalStorage för varukorg
- UUID för unika order-ID:n
- Figma för wireframes och layout

## Funktioner

- Startsida: Kort presentation av tjänsten
- Menysida: Bläddra produkter, filtrera efter kategori, lägg till i varukorg
- Varukorg: Se och uppdatera valda produkter
- Checkout: Fyll i namn, adress, telefon och betalning
- Bekräftelsesida: Se orderöversikt
- Om oss: Information om tjänsten

## Vad jag lärde mig

Jag lärde mig mycket om state-hantering i React och att hålla UI synkat med LocalStorage. Jag lärde mig också hur man strukturerar komponenter på ett logiskt sätt och tänker på användarflöden.

Nästa gång vill jag testa TypeScript, lägga till några animationer och kanske koppla till en riktig backend för mer realistisk orderhantering.

## Slutsats

Projektet visar att jag kan bygga en fungerande och responsiv webapp som både ser bra ut och fungerar som den ska. Det är en bra grund för framtida, mer avancerade projekt.