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
    click: function() {
        $(".add-friends-successfully").show();
        disableScrollbars();
    }
  });
});
