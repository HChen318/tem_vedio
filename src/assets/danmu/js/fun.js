export function foo () {
    $("#danmup").DanmuPlayer({
        src: "http://124.70.31.157:8091/videos/4.mp4",
        height: "480px", //区域的高度
        width: "800px" //区域的宽度
        ,urlToGetDanmu:"http://124.70.31.157:8090/video/bullet_screen?videoId=4"
        ,urlToPostDanmu:"http://124.70.31.157:8090/video/bullet_screen"
        });
    
        $("#danmup .danmu-div").danmu("addDanmu", [
        { "text": "这是滚动弹幕", color: "white", size: 1, position: 0, time: 2 }
        , { "text": "我是帽子绿", color: "green", size: 1, position: 0, time: 3 }
        , { "text": "哈哈哈啊哈", color: "black", size: 1, position: 0, time: 10 }
        , { "text": "这是顶部弹幕", color: "yellow", size: 1, position: 1, time: 3 }
        , { "text": "这是底部弹幕", color: "red", size: 1, position: 2, time: 9 }
        , { "text": "大家好，我是伊藤橙", color: "orange", size: 1, position: 1, time: 3 }
        ])
}