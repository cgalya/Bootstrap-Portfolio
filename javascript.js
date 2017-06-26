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

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})