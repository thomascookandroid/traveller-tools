import { createNpc } from "./data/create-npc.js"

const MODULE_ID = "traveller-tools";

Hooks.once("ready", () => {
    console.log(MODULE_ID + ": Hello Module!");
    createNpc();
});