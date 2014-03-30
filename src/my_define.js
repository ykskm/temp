var modMap = {};

function define(name, deps, callback) {
    modMap[name] = { name: name, deps: deps, callback: callback, initialized: null };
}

function exportModule(ns_obj, out_name, main) {
    var mainModule = modMap[main];
    ns_obj[out_name] = initModule(mainModule);
}

function initModule(mod) {
    if (mod.initialized) {
        return dep.initialized;
    }

    var deps = mod.deps.map(function(dep) {
        return initModule(modMap[dep]);
    });

    mod.initialized = mod.callback.apply(mod, deps);
    return mod.initialized;
}
