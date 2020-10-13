$(window).scroll(function () {
var sc = $(window).scrollTop()
if (sc > 30) {
    $(".header-section").addClass("fixed-header")
} else {
    $(".header-section").removeClass("fixed-header")
    }
});

/****************************************************/

$('.toggle').click(function(){
  $('body').toggleClass('sidebarNavOpen')
});
$(document).on("click", function(event){
    var $trigger = $("body");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $("body").removeClass("sidebarNavOpen");
    }
});

/****************************************************/

(function() {
      'use strict';
      window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }
      form.classList.add('was-validated');
      }, false);
      });
      }, false);
      })();

/****************************************************/

$('#datetimepicker1,#datetimepicker3').datetimepicker({
  inline: true,
});
  $('#datetimepicker2').datetimepicker({
    format: 'L'
  });

 /****************************************************/

 function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});


/****************************************************/

$(".selectOptionScroll").mCustomScrollbar();


/************************************************/

// increase Decrease product value
var minVal = 1, maxVal = 2000; // Set Max and Min values
$(".increaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value < maxVal) {
			value++;
		}
		$parentElm.find(".qtyValue").val(value);
});
$(".decreaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value > 1) {
			value--;
		}
		$parentElm.find(".qtyValue").val(value);
	});
