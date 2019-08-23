! function (t) {
    "use strict";
    t("#toastr-one").on("click", function (i) {
        t.NotificationApp.send("Heads up!", "This alert needs your attention, but it is not super important.", "top-right", "rgba(0,0,0,0.2)", "info")
    }), t("#toastr-two").on("click", function (i) {
        t.NotificationApp.send("Heads up!", "Check below fields please.", "top-center", "rgba(0,0,0,0.2)", "warning")
    }), t("#toastr-three").on("click", function (i) {
        t.NotificationApp.send("Well Done!", "You successfully read this important alert message", "bottom-right", "rgba(0,0,0,0.2)", "success")
    }), t("#toastr-four").on("click", function (i) {
        t.NotificationApp.send("Oh snap!", "Change a few things up and try submitting again.", "bottom-left", "rgba(0,0,0,0.2)", "error")
    }), t("#toastr-five").on("click", function (i) {
        t.NotificationApp.send("How to contribute?", ["Fork the repository", "Improve/extend the functionality", "Create a pull request"], "top-right", "rgba(0,0,0,0.2)", "info")
    }), t("#toastr-six").on("click", function (i) {
        t.NotificationApp.send("Can I add <em>icons</em>?", "Yes! check this <a href='https://github.com/kamranahmedse/jquery-toast-plugin/commits/master'>update</a>.", "top-right", "rgba(0,0,0,0.2)", "info", !1)
    }), t("#toastr-seven").on("click", function (i) {
        t.NotificationApp.send("", "Set the `hideAfter` property to false and the toast will become sticky.", "top-right", "rgba(0,0,0,0.2)", "success")
    }), t("#toastr-eight").on("click", function (i) {
        t.NotificationApp.send("", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", "top-right", "rgba(0,0,0,0.2)", "info", 3e3, 1, "fade")
    })
}(window.jQuery);