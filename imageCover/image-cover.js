jQuery(document).ready(function($) {
    //指定對應 "html物件" 裡所有的 "<img>元素" 轉為 background cover
    function image_cover($element) {
        //圖片載入後針對圖片高寬取值
        $("<img>").attr("src", $($element).find('img').attr("src")).load(function() {
            //圖片高寬
            var realWidth = this.width; //視情況使用
            var realHeight = this.height;
            //將原先的 "<img>" 隱藏
            $($element).find('img').css('visibility', 'hidden');
            $($element).each(function() {
                //個別抓取'圖檔路徑'
                var image_src = $(this).find('img').attr('src');
                //針對 "<img>元素" 的 "母層級元素" 給予原先圖片的高!
                $(this).find('img').parent().css('height', realHeight);
                //將 "圖片路徑" 賦予 background 屬性的值!並給予對應的 background 屬性
                $(this).find('img').parent().css({
                    'display': 'block',
                    'background-image': 'url(' + image_src + ')',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                });
            })
        });
    }

    //調用方式以下方為例！
    image_cover('.cover-image');
    //也可以直接針對物件套上方 'cover-image' 的 class 來達到執行這段 function 的目的

})
