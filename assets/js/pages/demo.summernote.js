! function (o) {
    "use strict";
    var e = function () {
        this.$body = o("body")
    };
    e.prototype.init = function () {
        o("#summernote-basic").summernote({
            placeholder: "Write something...",
            height: 230,
            callbacks: {
                onInit: function (e) {
                    o(e.editor).find(".custom-control-description").addClass("custom-control-label").parent().removeAttr("for")
                }
            }
        }), o("#summernote-airmode").summernote({
            airMode: !0,
            callbacks: {
                onInit: function (e) {
                    o(e.editor).find(".custom-control-description").addClass("custom-control-label").parent().removeAttr("for")
                }
            }
        });
        o("#summernote-edit").on("click", function () {
            o("#summernote-editmode").summernote({
                focus: !0,
                callbacks: {
                    onInit: function (e) {
                        o(e.editor).find(".custom-control-description").addClass("custom-control-label").parent().removeAttr("for")
                    }
                }
            }), o(this).hide(), o("#summernote-save").show()
        }), o("#summernote-save").on("click", function () {
            ! function () {
                o("#summernote-editmode").summernote("code");
                o("#summernote-editmode").summernote("destroy")
            }(), o(this).hide(), o("#summernote-edit").show()
        })
    }, o.Summernote = new e, o.Summernote.Constructor = e
}(window.jQuery),
function (o) {
    "use strict";
    o.Summernote.init()
}(window.jQuery);