//funcoes
var menuHover = function () {
	var $hoverizador = $('nav ul li:first-child a + ul')
	$hoverizador.mouseenter(function() {
		$(this).prev('a').addClass('do-ativo');	
	}).mouseleave(function() {
		$(this).prev('a').removeClass('do-ativo');	
	});
}

var cidadesOpen = function () {
	var $disparaCidade = $('header ul.topo li span');
	var $cidadeLista = $('header section');
	var classeAtiva = 'do-ativo';
	$disparaCidade.click( function (){
		$cidadeLista.toggleClass(classeAtiva);
		if($cidadeLista.hasClass(classeAtiva)){
			$(this).parent('li').addClass(classeAtiva);
		}else{
			$(this).parent('li').removeClass(classeAtiva);
		}
	});
}

var shareOpen = function (){
	var $openShare = $('aside.compartilhar button');
	var $opened = $('aside.compartilhar');
	$openShare.click(function (){
		$opened.toggleClass('do-ativo');
	});
}

var carrossel = function (margem){
	var $disparadores = $('.carrossel button');
	var $left = $('.carrossel button:first-child');
	var $right = $('.carrossel button + button');
	var $carrossel = $('.carrossel');
	var $elemento = $('.carrossel ul li');
	var doHere = 'do-here';
	var tempo = 500;
	

	$left.addClass('do-disable');
	$disparadores.click(function (){
		var $pai = $(this).parent($carrossel);
		if($pai.hasClass('depoCarro')){
			valorMargem = 530;	
		}else {
			valorMargem = 260;
		}
		if($(this).is(':first-child')){
			if($pai.find($elemento).first().hasClass(doHere)){
				var margem = '+='+0+'px';
				$(this).addClass('do-disable');
			}else{
				var margem = '+='+valorMargem+'px';
				if($pai.find($elemento).first().hasClass(doHere)){
					
				}
				$pai.find('.'+ doHere).removeClass(doHere).prev().addClass(doHere);
				$(this).next().removeClass('do-disable');
			}
		}else{
			if($pai.find($elemento).last().prev().hasClass(doHere)){
				var margem = '-='+0+'px';
				$(this).addClass('do-disable');
			}else{
				var margem = '-='+valorMargem+'px';
				$pai.find('.'+ doHere).removeClass(doHere).next().addClass(doHere);
				$(this).prev().removeClass('do-disable');
			}
		}
		$pai.find($elemento).first().animate({
			marginLeft: margem 
		}, tempo);
	});

	
}

var playVideos = function (){
	var $wrapperVideo =  $('.videosList ul li:first-child iframe');
	var $itens = $('.videosList ul li ~ li');
	var classeAtiva = 'do-ativo';
	
	$itens.click(function (){
		var itenDataVideo = $(this).attr('data');
		$wrapperVideo.attr('src',itenDataVideo);
		$itens.removeClass(classeAtiva);
		$(this).addClass(classeAtiva);
	});
}
//disparadores	
	function funcaoDISPARA() {
		console.log('Desenvolvido por Agência Mestre');
		menuHover();
		cidadesOpen();
		shareOpen();
		carrossel();
		playVideos();
	}
	
	function funcaoSCROLL() {

	}
	
	function funcaoRESIZE() {

	}
	
$(document).ready(funcaoDISPARA);
$(window).scroll(funcaoSCROLL);
$(window).resize(funcaoRESIZE);