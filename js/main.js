$(document).ready(function () {
  $(".drawer").drawer();
});

$(document).ready(function () {
  $("#top_slider").bxSlider({
    auto: true,
    pause: 5500,
    mode: "fade",
    nextText: "",
    prevText: "",
  });
});
$(function () {
  $("#pageTop").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#pageTop").fadeIn("fast");
    } else {
      $("#pageTop").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#pageTop").css({
        position: "absolute",
        bottom: footHeight + 1,
      });
    } else {
      $("#pageTop").css({
        position: "fixed",
        bottom: "0",
      });
    }
  });
  $("#pageTop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});


window.onscroll = function () {
  var check = window.pageYOffset; //現在のスクロール地点
  var docHeight = $(document).height(); //ドキュメントの高さ
  var dispHeight = $(window).height(); //表示領域の高さ
  if (check > docHeight - dispHeight - 500) {
    //判別式　500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
    $("#fix").fadeOut(1000); //1000 はフェードアウトの速度です。調整可
  } else {
    $("#fix").fadeIn(1000); //1000 はフェードインの速度です。調整可
  }
};


(function ($) {
  $(function () {
    $("#nav-toggle").on("click", function () {
      $("body").toggleClass("open");
    });
  });
})(jQuery);
$(function () {
  $(".sp_nav_list li a").click(function () {
    $("body").removeClass("open");
  });
});

$(function () {
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});


// $(function() {
//   // #で始まるリンクをクリックしたら実行されます
//   $('a[href^="#"]').click(function() {
//       // スクロールの速度
//       var speed = 400; // ミリ秒で記述
//       var href = $(this).attr("href");
//       var target = $(href == "#" || href == "" ? "html" : href);
//       var header = $('#nav_sub').height();
//       var position = target.offset().top - header;
//       $("body,html").animate({
//               scrollTop: position,
//           },
//           speed,
//           "swing"
//       );
//       return false;
//   });
// });

$(function () {
  $("ul.tab_area li:first-child").addClass("select");
  $("ul.tab_area li:first-child").addClass("tab_mark");
  //クリックしたときのファンクションをまとめて指定
  $(".tab-wrp .content_area:nth-of-type(n+2)").css("display", "none");
  $("ul.tab_area li").click(function () {
    //.index()を使いクリックされたタブが何番目かを調べ、
    //    indexという変数に代入します。
    var index = $("ul.tab_area li").index(this);
    //コンテンツを一度すべて非表示にし、
    $(".content_area").css("display", "none");
    //クリックされたタブと同じ順番のコンテンツを表示します。
    $(".content_area").eq(index).fadeIn();
    //タブについているクラスselectを消し、
    $(".tab_area li").removeClass("select");
    //クリックされたタブのみにクラスselectをつけます。
    $(this).addClass("select");
    $(".tab_area li").removeClass("tab_mark");
    //クリックされたタブのみにクラスselectをつけます。
    $(this).addClass("tab_mark");
  });
});


$(function() {
 
  // ①マウスをボタンに乗せた際のイベントを設定
  $('#menu li').hover(function() {
 
    // ②乗せたボタンに連動したメガメニューをスライドで表示させる
    $(this).find('.menu_contents').stop().slideDown();
 
  // ③マウスをボタンから離した際のイベントを設定
  }, function() {
 
    // ④マウスを離したらメガメニューをスライドで非表示にする
    $(this).find('.menu_contents').stop().slideUp();
 
  });
 
});

$(function() {
  $('.recruit-contact').hide();
  /*=======================================
  タブ切り替え
  =========================================*/
  // タブメニューをクリックしたとき
  $('.radio-main input').click(function() {
      var value = $(".radio-main input[name='items[radiosample]']:checked").val();
      if (value == '求人へのご応募') {
          $('.recruit-contact').fadeIn();
      } else {
          $('.recruit-contact').fadeOut();
      }
  });
});