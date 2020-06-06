const userName = prompt ("Please Type in Your Full Name Here");
undefined
    userName;

    alert(" Hello " + userName + " Please Take This Survey To Determine The Best Suiting Language of code for you!")

    jQuery('.prev-button').hide();

	var x;
	var count;
	var current;
	var percent;
	var z = [];

	init();
	getCurrentSlide();
	goToNext();
	goToPrev();
	getCount();
	buildStatus();
	deliverStatus();
	submitData();
	goBack();

	function init() {
		
		jQuery('.survey-container .survey-page').each(function() {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('page'+ page);

		});

	}

	function getCount() {

		count = jQuery('.survey-page').length;
		return count;

	}

	function goToNext() {

		jQuery('.next-button').on('click', function() {
			goToSlide(x);
			getCount();
			current = x + 1;
			var g = current/count;
			buildProgress(g);
			var y = (count + 1);
			getButtons();
			jQuery('.survey-page').removeClass('active');
			jQuery('.page'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			if( jQuery('.page-'+count).hasClass('active') ){
				if( jQuery('.page'+count).hasClass('pass') ) {
					jQuery('.finish-button').addClass('active');
				}
				else {
					jQuery('.page'+count+'.survery-content .survey-item').on('click', function() {
						jQuery('.finish-button').addClass('active');
					});
				}
			}
			else {
				jQuery('.finish-button').removeClass('active');
				if( jQuery('.page'+current).hasClass('pass') ) {
					jQuery('.survey-container').addClass('good');
					jQuery('.survey').addClass('okay');
				}
				else {
					jQuery('.survey-container').removeClass('good');
					jQuery('.survey').removeClass('okay');
				}
			}
			buttonConfig();
		});

	}
	function goToPrev() {

		jQuery('prev-button').on('click', function() {
			goToSlide(x);
			getCount();			
			current = (x - 1);
			var g = current/count;
			buildProgress(g);
			var y = count;
			getButtons();
			jQuery('.survey-page').removeClass('active');
			jQuery('.page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			jQuery('.finish-button').removeClass('active');
			if( jQuery('.page'+current).hasClass('pass') ) {
				jQuery('.survey-container').addClass('good');
				jQuery('.survey').addClass('okay');
			}
			else {
				jQuery('.survey-container').removeClass('good');
				jQuery('.survey').removeClass('okay');
			}
			buttonConfig();
		});

	}

	function buildProgress(g) {

		if(g > 1){
			g = g - 1;
		}
		else if (g === 0) {
			g = 1;
		}
		g = g * 100;
		jQuery('.survey-progress-bar').css({ 'width' : g+'%' });

	}

	function goToSlide(x) {

		return x;

	}

	function getCurrentSlide() {

		jQuery('.survey-page').each(function() {

			var item;

			item = jQuery(this);

			if( jQuery(item).hasClass('active') ) {
				x = item.data('page');
			}
			else {
				
			}

			return x;

		});
	}
	function getButtons() {

		if(current === 0) {
			current = y;
		}
		if(current === count) {
			jQuery('.next-button').show();
		}
		else if(current === 1) {
			jQuery('.prev-button').show();
		}
		else {
			jQuery('.next-button').show();
			jQuery('.prev-button').show();
		}

	}

	jQuery('.survey-q li input').each(function() {

		var item;
		item = jQuery(this);

		jQuery(item).on('click', function() {
			if( jQuery('input:checked').length > 0 ) {
		    	jQuery('label').parent().removeClass('active');
		    	item.closest( 'li' ).addClass('active');
			}
			else {

			}
		});

	});

	percent = (x/count) * 100;
	jQuery('.survey-progress-bar').css({ 'width' : percent+'%' });

	function checkStatus() {
		jQuery('.survery-content .survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.closest('.survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.survery-content .survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.survey-page').addClass('pass');
			jQuery('.survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.survey-item').on('click', function() {
			if( jQuery('.survey-container').hasClass('good') ){
				jQuery('.survey').addClass('okay');
			}
			else {
				jQuery('.survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}

	function lastPage() {
		if( jQuery('.next-button').hasClass('cool') ) {
			alert('cool');
		}
	}

	function buttonConfig() {
		if( jQuery('.survey').hasClass('okay') ) {
			jQuery('.next-button button').prop('active', true);
		}
		else {
			jQuery('.next-button button').prop('active', true);
		}
	}

	function submitData() {
		jQuery('.finish-button').on('click', function() {
			collectData();
			jQuery('.survey-bottom').slideUp();
			jQuery('.survey-results').slideDown();
		});
	}

	function collectData() {
		
		var map = {};
		var ax = [''];
		var answer = [''];
		var total = 0;
		var ttl = 0;
		var g;
		var c = 0;

		jQuery('.survey-item input:checked').each(function(index, val) {
			var item;
			var data;
			var name;
			var n;

			item = jQuery(this);
			data = item.val();
			name = item.data('item');
			n = parseInt(data);
			total += n;

			map[name] = data;

		});
	}

    