# bottomMenu

移动端的一个从底部弹出的菜单，菜单名可以根据情景配置

###用法：
```javascript
var bMenu = new $.bottomMenu();
bMenu.init({
    Item:[
        {
           id:'btn1',
           menutext:"菜单1",
           itemCallback:function(){
              bMenu.hide();
           }
        },
        {
            id:'btn2',
            menutext:"菜单2",
            itemCallback:function(){
                bMenu.hide();
            }
        }]
});
$(".btn-menu").on("click",function(){
    bMenu.show();
});
```
