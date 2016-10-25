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
	<input type="text" class="filter-bar" placeholder="Search"></input>
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
	<div class="level-header" value="<%= rank%>">
		<% if(rank==0){%>Cantrips:<%} else{ %> Level <%= rank%>: <% } %>
	</div>
`);

var spellTemplate = _.template(`
	<div class="spell-title" data-attribute="<%= classes %>" data-title="<%= level %>|<%= name %>">
		<div class="spell-row">
			<a href="spells.html#<%= name %>"> <%= name %> <% if(ritual==1){%>[r]<%}%></a>
			<div class="spell-school"> <%= school %> </div>
		</div>
	</div>
`);

var spellDescriptionTemplate = _.template(`
	<div class="spell-content">
		<div class="spell-name"><%= name %></div>
		<div class="spell-ele"><b>Classes: </b>
			<% _.each(classes, function(ele){ %>
				<a href=".#<%= ele %>"><%= ele %> </a>
			<% }); %>
		</div>
		<div class="spell-ele"><b>Level: </b><%= level %></div>
		<div class="spell-ele"> <b>School: </b> <%= school %> </div>
		<div class="spell-ele"> <b>Casting Time: </b><%= casting_time %><% if(ritual==1){%>, ritual<%}%></div>
		<div class="spell-desc"> <%= spelltext %> </div>
	</div>
`);
