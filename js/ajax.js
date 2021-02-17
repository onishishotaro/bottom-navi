$(function () {
  $(".js-ajaxLoadBtn-gallery").each(function () {
    let _ = $(this);
    let opt = {
      categoryID: _.data("categoryId"),
      offset: _.data("offset"),
      postsPerPage: _.data("postsPerPage"),
      target: _.data("target"),
      // order: _.data("order"),  //昇順・降順の指定があれば取得
      tag: _.data("tag"),
    };
    _.on("click", function () {
      _.addClass("ajax-disable");
      //ここでhttpdocs直下に設置した「ajax.php」を読み込んでいます。
      $.get("/../ajax.php", opt, function (res) {
        let addHtmlString = "";
        res = JSON.parse(res);
        // IE用にいじったところ
        $.each(res.posts, function (index, post) {
          //ajax.phpの「$posts」内に設定した「$posts[$i]['released']」の「['released']」を下記文で宣言します。
          //「$posts[$i]['ここのコード'] ⇒　let released = post.ここのコード;
          let link = post.link;
          let released = post.released;
          let title = post.title;
          let thumb = post.thumb;
          let customfield = post.customfield;

          //  下記コードは「もっと見るボタン」を押した後に出るソースコードの設定です。
          //基本的には初期表示で設定している投稿のhtmlと同じコードを作ります。
          if (opt.categoryID === 10752) {
            addHtmlString +=
              "<li>" +
              '<a href="' +
              post.customfield.thumb +
              '" data-lightbox="group">' +
              ' <div class="cmn-img">';

            //カスタムフィールドの画像が有るか無いかの判断
            if (post.customfield.thumb) {
              addHtmlString +=
                '<img src="' +
                post.customfield.thumb +
                '" alt="' +
                post.title +
                '画像" />';

              //カスタムフィールドの画像がなければ下記コード
            } else {
              addHtmlString +=
                '<img src="' +
                "/img/no-image.png" +
                '" alt="' +
                '画像がありません" />';
            }
            addHtmlString +=
              "</div>" + "<p>" + post.title + "</p>" + "</a>" + "</li>";
          }
        });
        // IE用にいじったところ　ここまで
        //下記「console.log()」は確認用なので実装する場合は削除してください。
        console.log(addHtmlString);
        //改行用
        var nl2br = function (str) {
          return str.replace(/\n/g, "<br>");
        };
        addHtmlString = nl2br(addHtmlString);
        $(addHtmlString).appendTo(opt.target).hide().slideDown(300);
        opt.offset += opt.postsPerPage;
        //次の投稿がなければボタンの親要素から非表示にします。
        if (!res.next) {
          _.parent().remove();
        }
        _.removeClass("ajax-disable");
      });
      return false;
    });
  });

  $(".js-ajaxLoadBtn-question").each(function () {
    let _ = $(this);

    let opt = {
      categoryID: _.data("categoryId"),
      offset: _.data("offset"),
      postsPerPage: _.data("postsPerPage"),
      target: _.data("target"),
      // order: _.data("order"),  //昇順・降順の指定があれば取得
      tag: _.data("tag"),
    };

    _.on("click", function () {
      _.addClass("ajax-disable");

      //ここでhttpdocs直下に設置した「ajax.php」を読み込んでいます。
      $.get("/../ajax.php", opt, function (res) {
        let addHtmlString = "";
        res = JSON.parse(res);
        // IE用にいじったところ
        $.each(res.posts, function (index, post) {
          //ajax.phpの「$posts」内に設定した「$posts[$i]['released']」の「['released']」を下記文で宣言します。
          //「$posts[$i]['ここのコード'] ⇒　let released = post.ここのコード;
          let link = post.link;
          let released = post.released;
          let title = post.title;
          let thumb = post.thumb;
          let customfield = post.customfield;

          //  下記コードは「もっと見るボタン」を押した後に出るソースコードの設定です。
          //基本的には初期表示で設定している投稿のhtmlと同じコードを作ります。
          if (opt.categoryID === 10814) {
            addHtmlString +=
              "<dl>" +
              '<dt class="serif">' +
              post.title +
              "</dt>" +
              "<dd>" +
              post.customfield.answer +
              "</dd>" +
              "</dl>";
          }
        });
        // IE用にいじったところ　ここまで
        //下記「console.log()」は確認用なので実装する場合は削除してください。
        console.log(addHtmlString);
        //改行用
        var nl2br = function (str) {
          return str.replace(/\n/g, "<br>");
        };
        addHtmlString = nl2br(addHtmlString);
        $(addHtmlString).appendTo(opt.target).hide().slideDown(300);
        opt.offset += opt.postsPerPage;
        //次の投稿がなければボタンの親要素から非表示にします。
        if (!res.next) {
          _.parent().remove();
        }
        _.removeClass("ajax-disable");
      });
      return false;
    });
  });
});
