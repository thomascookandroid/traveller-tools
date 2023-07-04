static MODULE_ID = "traveller-tools";

CONFIG.debug.hooks = true;

static log(force, ...args) {
    const shouldLog = force || game.modules.get("_dev-mode")?.api?.getPackageDebugValue(MODULE_ID);
    if (shouldLog) {
        console.log(MODULE_ID, "|", ...args);
    }
}

Hooks.once("devModeReady", ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(MODULE_ID);
});