! function (a) {
    "use strict";
    var t = function () {
        this.$body = a("body")
    };
    t.prototype.init = function () {
        a('[data-plugin="dragula"]').each(function () {
            var t = a(this).data("containers"),
                n = [];
            if (t)
                for (var i = 0; i < t.length; i++) n.push(a("#" + t[i])[0]);
            else n = [a(this)[0]];
            var r = a(this).data("handleclass");
            r ? dragula(n, {
                moves: function (a, t, n) {
                    return n.classList.contains(r)
                }
            }) : dragula(n)
        })
    }, a.Dragula = new t, a.Dragula.Constructor = t
}(window.jQuery),
function (a) {
    "use strict";
    a.Dragula.init()
}(window.jQuery);