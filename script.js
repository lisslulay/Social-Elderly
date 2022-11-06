function disableScrollbars() {
  $("body").addClass("disable-scrollbars");
}
function enableScrollbars() {
  $("body").removeClass("disable-scrollbars");
}

$(function () {
  var closeOverlay = $(".close");
  closeOverlay.on({
    click: function () {
      $(this).parent().parent().parent().hide();
      enableScrollbars();
    },
  });

  var backButton = $("main>nav>a");
  backButton.click(function() {
    history.back();
  });
  /* ===============================post=========================== */
  var createPost = $("#create-post-button");
  createPost.on({
    click: function () {
      $("#create-post-box").show();
      disableScrollbars();
    },
  });

  var sendPost = $("#send-post");
  sendPost.on({
    click: function () {
      $("#create-post-box").hide();
      disableScrollbars();
      $(".send-successfully").show();
    },
  });

  /* ===============================friends=========================== */
  var videoButton = $("#find-friends-button");
  var exploreButton = $("#find-arounds-button");

  videoButton.on({
    click: function () {
      $("#invite-friends").show();
      disableScrollbars();
    },
  });

  exploreButton.on({
    click: function () {
      $("#invite-arounds").show();
      disableScrollbars();
    },
  });

  var inviteButton = $(
    "#invite-friends .friends-entry>.button, #invite-arounds .friends-entry>.button"
  );
  inviteButton.on({
    click: function () {
      $(this).toggleClass("active");
      var atext = $(this).text();
      if (atext == "invite") {
        $(this).text("invited");
      } else {
        $(this).text("invite");
      }
    },
  });

  var addFriendButton = $(".video-box-bottom>a");
  addFriendButton.on({
    click: function () {
      $(".add-friends-successfully").show();
      disableScrollbars();
    },
  });

  /* ===============================activity=========================== */
  var event1 = $(".activity-box-1");
  var event2 = $(".activity-box-2");
  var event3 = $(".activity-box-3");

  event1.click(function() {
    $(location).attr("href","./activities-series.html")
  });

  event2.click(function() {
    $(location).attr("href","./activities-ongoing.html")
  });

  event3.click(function() {
    $(location).attr("href","./activities-all.html")
  });
});
