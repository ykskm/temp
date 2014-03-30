define(["sub_module"], function(sub) {
    return {
        a: sub.a,
        b: sub.b,
        c: sub.c
    };
});

var MY = this.MY ? MY : {};
if (!MY.NAMESPACE) {
    MY.NAMESPACE = {};
}

exportModule(MY.NAMESPACE, "OUT", "main");
console.log(MY.NAMESPACE.OUT.a());

