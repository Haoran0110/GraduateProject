! function (t) {
    "use strict";
    var i = function () {
        this.$body = t("body"), this.$chatInput = t(".chat-input"), this.$chatList = t(".conversation-list"), this.$chatSendBtn = t(".chat-send"), this.$chatForm = t("#chat-form")
    };
    i.prototype.save = function () {
        var i = this.$chatInput.val(),
            s = moment().format("h:mm");
        return "" == i ? (this.$chatInput.focus(), !1) : (t('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-1.jpg" alt="male"><i>' + s + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Dominic</i><p>' + i + "</p></div></div></li>").appendTo(".conversation-list"), this.$chatInput.focus(), this.$chatList.animate({
            scrollTop: this.$chatList.prop("scrollHeight")
        }, 1e3), !0)
    }, i.prototype.init = function () {
        var t = this;
        t.$chatInput.keypress(function (i) {
            if (13 == i.which) return t.save(), !1
        }), t.$chatForm.on("submit", function (i) {
            return i.preventDefault(), t.save(), !1
        })
    }, t.ChatApp = new i, t.ChatApp.Constructor = i
}(window.jQuery),
function (t) {
    "use strict";
    t.ChatApp.init()
}(window.jQuery);