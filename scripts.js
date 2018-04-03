/** HTML Code Cleaner
  * @author Antonio Martínez @henkerLove
  * @version 1.0
  */
$(document).ready(function() {
	// Inicializa Summernote
	$('#summernoteInput').summernote({
		minHeight: 250,
		focus: true,
		placeholder: 'Introduce aquí el texto a limpiar'
	});

	var globalStyle = /<style[^<]*(<\/style>)/g
	var tagStyle = /(style|STYLE)=["'][^"']*["']/g;
	var tagID = /(id|ID)=["'][^"']*["']/g;
	var tagClass = /(class|CLASS)=["'][^"']*["']/g;
	var tagLang = /(lang|LANG)=["'][^"']*["']/g;

	/** removeTag
	  * @param regExp Expresión regular en formato /expresion/
	  * No retorna nada pero actualizaa el contenido
	  */
	function removeTag(regExp){
		var content = $('.note-editable').html();
		$('.note-editable').html( content.replace(regExp, "") );
	}

	// Controles

	$('button#clean').on('click', function(){
		if( document.getElementById('cleanGlobalStyle').checked ) {
			removeTag(globalStyle);
		}
		if( document.getElementById('cleanStyle').checked ) {
			removeTag(tagStyle);
		}
		if( document.getElementById('cleanID').checked ) {
			removeTag(tagID);
		}
		if( document.getElementById('cleanClass').checked ) {
			removeTag(tagClass);
		}
		if( document.getElementById('cleanLang').checked ) {
			removeTag(tagLang);
		}
	});

	$('button#copyCode').on('click', function(){
		var text = $('#summernoteInput').summernote('code');
		$('input[name="copy"]').val(text);
		var copyText = document.getElementById("copyValue");
		copyText.select();
		document.execCommand("copy");
	});
});