$(function(){

  function buildHTML(message){
    if ( message.image) {
      var html =
        `<div class="message__content">
          <div class="message__content__info">
            <div class="message__content__info--memmber">
              ${message.user_name}
            </div>
            <div class="message__content__info--date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__content__message">
            <p class="message__content__message--text">
              ${message.body}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message__content">
          <div class="message__content__info">
            <div class="message__content__info--memmber">
              ${message.user_name}
            </div>
            <div class="message__content__info--date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__content__message">
            <p class="message__content__message--text">
              ${message.body}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url =$(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.form__submit').prop('disabled', false);
    });
  })
});