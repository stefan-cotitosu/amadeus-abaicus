/*
Upsells
*/

jQuery(document).ready(function() {

	/* Upsells in customizer (Documentation link and Upgrade to PRO link */


	if( !jQuery( ".amadeus-upsells" ).length ) {
		jQuery('#customize-theme-controls > ul').prepend('<li class="accordion-section amadeus-upsells" style="padding-bottom: 15px">');
		}

    if( jQuery( ".amadeus-upsells" ).length ) {

  		jQuery('.amadeus-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="http://flyfreemedia.com/documentation/amadeus/" class="button" target="_blank">{documentation}</a>'.replace('{documentation}', amadeusCustomizerObject.documentation));
  		jQuery('.amadeus-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://github.com/Codeinwp/amadeus" class="button" target="_blank">{github}</a>'.replace('{github}', amadeusCustomizerObject.github));
  		jQuery('.amadeus-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://wordpress.org/support/view/theme-reviews/amadeus#postform" class="button" target="_blank">{review}</a>'.replace('{review}', amadeusCustomizerObject.review));

  	}

	if ( !jQuery( ".amadeus-upsells" ).length ) {
		jQuery('#customize-theme-controls > ul').prepend('</li>');
	}
});
