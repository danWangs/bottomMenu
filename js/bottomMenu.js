/**
 * Created by wonder on 2016/11/8.
 */
(function ($) {
    function _bottomMenu() {
        var self = this;
        self.$wraper = $('<ul class="bottom-menu-wrapper"></ul>');
        $("body").append(self.$wraper);
        self.$bg = $('.modal-menu-bg');
        if (self.$bg.length <= 0) {
            self.$bg = $('<div class="modal-menu-bg"></div>');
            self.$bg.on('click', function () {
                self.hide();
            });
            $("body").append(self.$bg);
        }
        self.hide();
        self.settings = {
            Item: [{ id: "default", menutext: "默认", itemCallback: function () { } }],
        }

    }
    _bottomMenu.prototype = {
        init: function (options) {
            var self = this;
            if (options) {
                $.extend(self.settings, options);
            }
            for (var i = 0; i < self.settings.Item.length; i++) {
                var $item = $('<li id="' + self.settings.Item[i].id + '" class="sub-menu">' + self.settings.Item[i].menutext + '</li>');
                $item.on('click', self.settings.Item[i].itemCallback);
                self.$wraper.append($item);
            }
        },
        show: function () {
            var self = this;
            self.$bg.show();
            self.$wraper.slideDown();
        },
        hide: function () {
            var self = this;
            self.$bg.hide();
            self.$wraper.slideUp();
        }
    }
    $.bottomMenu = _bottomMenu;
})(jQuery)