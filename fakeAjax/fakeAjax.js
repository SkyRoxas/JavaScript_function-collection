function fakeAjax($fakeAjaxItem) {
    //加入 "fakeAjax選單" 至每個 blcok 內
    for (var i = 0; i < $fakeAjaxItem.length; i++) {
      for (var k = 0; k < $fakeAjaxItem.length; k++) {
        var attrClass = $($fakeAjaxItem[k]).attr('class');
        $($fakeAjaxItem[i]).append('<button class ="' + attrClass + ' fake-ajax-item item' + k + '" type ="button">' + $fakeAjaxItem[k] + '</button>');
      }
      $($fakeAjaxItem[i]).find('.fake-ajax-item').wrapAll('<ul class = "fake-ajax-menu"></ul>');
    }
    //將對應的 block 增加對應之 Class
    for (var i = 0; i < $fakeAjaxItem.length; i++) {
      $($fakeAjaxItem[i]).addClass('fake-ajax-content item' + i + '');
    }
    //將除第一個外的block隱藏(預設第一個項目為預設)
    $('.fake-ajax-content').not('.item0').css('display', 'none');
    $('.fake-ajax-item.item0').addClass('fake-ajax-active');
    //button 選單 click event
    $('.fake-ajax-menu').each(function() {
      $(this).find('.fake-ajax-item').each(function($index, $value) {
        $(this).click(function() {
          var itemClass = "item" + $index;
          $('.fake-ajax-menu').find('.fake-ajax-item' + '.' + itemClass).addClass('fake-ajax-active');
          $('.fake-ajax-menu').find('.fake-ajax-item').not('.' + itemClass).removeClass('fake-ajax-active');
          $('.fake-ajax-content' + '.' + itemClass).fadeIn();
          $('.fake-ajax-content').not('.' + itemClass).fadeOut();
        })
      })
    })
  }
  //example:將網站 '登入區塊'與'註冊區塊做切換'
  fakeAjax(['#block-user-login', '#block-formblock-user-register']);

/*
注意：
* 此function第一個變數為 "陣列" 的資料格式
* 並且一個頁面只能有一個此function fakeAjax的物件 (防呆功能還未加入)
*/
