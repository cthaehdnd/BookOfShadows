var searchCardTemplate = _.template(`
	<div class="class-filter">
		<a class="title" href=#All>Book Of Shadow</a>
		<div class="class-selector">
			<a class="attribute-selector" href=#Bard>Bard</a>
			<a class="attribute-selector" href=#Cleric>Cleric</a>
			<a class="attribute-selector" href=#Druid>Druid</a>
			<a class="attribute-selector" href=#Paladin>Paladin</a>
			<a class="attribute-selector" href=#Ranger>Ranger</a>
			<a class="attribute-selector" href=#Sorcerer>Sorcerer</a>
			<a class="attribute-selector" href=#Warlock>Warlock</a>
			<a class="attribute-selector" href=#Wizard>Wizard</a>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
		</div>
	</div>
	<input type="text" class="filter-bar" placeholder="Spell name"></input>
	<div class="line"></div>
`);

var backwardsTemplate = _.template(`
	<div class="class-filter">
		<a class="title" href=.#All>Book Of Shadow</a>
		<div class="class-selector">
			<a class="attribute-selector" href=.#Bard>Bard</a>
			<a class="attribute-selector" href=.#Cleric>Cleric</a>
			<a class="attribute-selector" href=.#Druid>Druid</a>
			<a class="attribute-selector" href=.#Paladin>Paladin</a>
			<a class="attribute-selector" href=.#Ranger>Ranger</a>
			<a class="attribute-selector" href=.#Sorcerer>Sorcerer</a>
			<a class="attribute-selector" href=.#Warlock>Warlock</a>
			<a class="attribute-selector" href=.#Wizard>Wizard</a>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
		</div>
	</div>
	<div class="line"></div>
`);

var levelTemplate = _.template(`
	<div class="level-header" value="<%= rank%>">Level <%= rank%>:</div>
	</div>
`);

var spellTemplate = _.template(`
	<div class="spell-title" data-attribute="<%= classes %>">
		<a href="spells.html#<%= name %>"> <%= name %> </a>
	</div>
`);

var spellDescriptionTemplate = _.template(`
	<div class="spell-content">
		<div class="spell-name"><%= name %></div>
		<div class="spell-ele"><b>Classes: </b> <%= classes %> </div>
		<div class="spell-ele"><b>Level: </b><%= level %></div>
		<div class="spell-ele"> <b>School: </b> <%= school %> </div>
		<div class="spell-ele"> <b>Casting Time: </b><%= casting_time %><% if(ritual==1){%>, ritual<%}%></div>
		<div class="spell-desc"> <%= spelltext %> </div>
	</div>
`);
