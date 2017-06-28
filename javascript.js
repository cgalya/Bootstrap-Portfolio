/*this code was borrowed from: 
https://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528*/

jQuery(document).ready(function($) {
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_src = $(this).attr("src");
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_src + '" />');
			$('#lightbox').show();
		} else { 
				var lightbox = 
				'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + 
					'<img src="' + image_src +'" />' +
				'</div>' +	
				'</div>';
				
			$('body').append(lightbox);
		}
	});
	$('#lightbox').live('click', function() { 
		$('#lightbox').hide();
	});
});


//This code is a bootstrap plug-in found on http://getbootstrap.com/javascript/
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var recipient = button.data('whatever') 
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

