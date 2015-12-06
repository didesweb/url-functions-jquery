var act = { 
	rut : {},
	pag : function(url, fun){ 
		this.rut[url] = fun;
	},
	lan : function(){ 
		jQuery.each(this.rut, function(par){ 
			if(location.href.match(par)){
				this(); 
			} 
		}); 
	}
}
// Código que se ejecuta en la página "pagina1.html" 
act.pag('pagina1.html', function(){ 
	$(function(){
		$('#demo1').text ('Pagina 1');
	});
});
// Código que se ejecuta en la página "pagina2.html"
act.pag('pagina2.html', function(){ 
	$(function(){
		$('#demo1').text ('Pagina 2');
	}); 
});
// Código que se ejecuta en la página "ventas.html"
act.pag('ventas.html', function(){ 
	$(function(){
		$('#demo1').text ('Pagina ventas');
	}); 
});
// Código que se ejecuta en las páginas "pagina1.html" y "pagina2.html"
act.pag('.*pagina', function(){ 
	$(function(){
		$("#demo2").text("Pagina 1 y Pagina 2");
	}); 
});
// Código que se ejecuta en las páginas "pagina1.html" y "ventas.html"
act.pag('.pagina1|ventas', function(){ 
	$(function(){
		$("#demo3").text("Pagina 1 y ventas");
	}); 
});
// Código que se ejecuta en todas las paginas
act.pag('.*.html', function(){ 
	$(function(){
		$("#demo4").text("Todos los archivos con extension \".html\"");
	}); 
});
act.lan();
