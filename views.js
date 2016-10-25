spellsource="foobar"

var searchCardView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(searchCardTemplate());
		//resize handler
		$(window).resize( function(){
			//enforce header size bounds even if we resize
			var width=Math.max(Math.min(1200,Math.floor((window.innerWidth*.75)/150)*150),200);
			if (width > 900){
				if (width < 1200){
					width=900;
				}
			}
			$(".header-bar").css("width", width);
		});
	}
});

var spellBinView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	attachSpells: function(){
		//remove prev spells
		$(".spell-bin").children().remove();
		$(".filter-bar").off();
		//attach spells
		var hash = window.location.hash.substring(1);
		if (hash==""){
			hash="All";
		}
		$.getJSON(spellsource, function(json) {
		    var levelMap={};
		    _.each(json, function(spell){
		    	if (!levelMap[spell.level]){
		    		levelMap[spell.level]=[];
		    	}
		    	levelMap[spell.level].push(spell);
		    });
		    _.each(Object.keys(levelMap), function(key){
		    	$(".spell-bin").append(levelTemplate({rank:key}));
		    	_.each(levelMap[key].sort(function(a, b) {
					return a.name.localeCompare(b.name);
				}), function(ele){
		    		$("[value="+key+"]").append(spellTemplate(ele));
		    	});
		    });
		 	//hide feats accordingly to class view
			if (hash!="All"){
				//this is weird, fix later
				$(".spell-title").addClass("class-hidden");
				$(".level-header").addClass("class-hidden");
				$(".spell-title").filter( function(){
					var attribute = $(this).data("attribute");
					return attribute.indexOf(hash) != -1;
				}).removeClass("class-hidden").parent().removeClass("class-hidden");
			}
			else{
				$(".spell").removeClass("type-hidden");
			}
			//enable card hide/show
			$(".spell").click(function(event){
				//event.stopPropagation();
				$(".spell").children(".accordion-main").slideUp();
				if ($(this).children(".accordion-main").css("display")=="none"){
					$(this).children(".accordion-main").slideDown();
				}
			});
			//enable search bar functionality
			$(".filter-bar").on('change', function(event){
				//event.stopPropagation();
				var val = $(this).val().toLowerCase();
				$(".spell-title").addClass("filter-hidden"); //hide all
				$(".level-header").addClass("filter-hidden");
				$(".spell-title").filter( function(){
					if (val==""){
						return true;
					}
					//drives search function
					var searchElements=val.split(" ");
					flag=true;
					nbegin=-1;
					var name = $(this).data("title").replace(/\s/g,'').toLowerCase();
					_.each(searchElements, function(ele){
						if(ele){
							var place = name.indexOf(ele, nbegin);
							if (place>nbegin){
								nbegin = place+ele.length-1;
							}
							else{
								flag=false;
							}
						}
					});
					return flag;
				}).removeClass("filter-hidden").parent().removeClass("filter-hidden");
			}).on('keyup', function(event){
				//event.stopPropagation();
				$(this).change();
			});
		});
	},
	render: function(){
		//resize handler
		$(window).resize( function(){
			//enforce header size bounds even if we resize
			var width=Math.max(Math.min(1200,Math.floor((window.innerWidth*.75)/150)*150),200);
			if (width > 900){
				if (width < 1200){
					width=900;
				}
			}
			$(".spell-bin").css("width", width);
		});
		this.attachSpells();
		window.onhashchange = this.attachSpells;
	}
});

var spellDescription = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var hash = window.location.hash.substring(1);
		if (hash==""){
			hash="?";
		}
		//resize handler, is attached to more or less every container element
		$(window).resize( function(){
			//enforce header size bounds even if we resize
			var width=Math.max(Math.min(1200,Math.floor((window.innerWidth*.75)/150)*150),200);
			if (width > 900){
				if (width < 1200){
					width=900;
				}
			}
			$(".spell-description").css("width", width);
		});

		$(".spell-description").append(backwardsTemplate({}));
		//find the fucking spell
		$.getJSON(spellsource, function(json) {
			_.each(json, function(spell){
		    	if (spell.name==hash){
		    		$(".spell-description").append(spellDescriptionTemplate(spell))
		    	}
		    });
		});
	}
});