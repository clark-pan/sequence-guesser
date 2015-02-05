$(function(){
		'use strict';
		var $input = $('#input'), $button = $('#button'), $output = $('#output'), lock = false;
		$input.on('keydown', function(e){
			if(e.which === 13){
				check();
			}
		});
		$button.on('click', function(e){
			e.preventDefault();
			check();
		});

		function check(){
			var value = $input.val(), split = value.split(' ').map(function(val){ return parseInt(val, 10); }), str = value + ' ', $li;
			if(!value || lock) return;
			if(split.length > 1 && split.reduce(function(last, now){ if(last !== false){ return now > last ? now : false; } return false; })){
				str += 'follows the rule';
			} else {
				str += 'does not follow the rule';
			}
			lock = true;
			$li = $('<li></li>');
			$input.val('');
			$output.append($li).scrollTop(9999);
			$li.text('Thinking...');
			setTimeout(function(){
				lock = false;
				$li.text(str);
			}, Math.random()*1000 + 500);
		}
	});