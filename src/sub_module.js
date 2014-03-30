define(["super_module"], function(super_) {
    return {
        a: super_.a,
        b: super_.b,
        c: function() {
            return "ccc";
        }
    };
});
