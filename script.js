$(function() {
    var createPost = $("#create-post-button");
    createPost.on({
        click: function() {
            $("#create-post-box").show();
        }
    });

    var closeOverlay = $(".close");
    closeOverlay.on({
        click: function() {
            $(this).parent().parent().parent().hide();
        }
    });

    var sendPost = $("#send-post");
    sendPost.on({
        click: function() {
            $(this).parent().parent().hide();
            $(".send-successfully").show();
        }
    });
});
