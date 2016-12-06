import json
from pprint import pprint

refined=[]

with open('foo.json') as data_file:    
    data = json.load(data_file)

def btoi(b):
	if b:
		return 1
	return 0

#import urllib.request

import urllib
import urllib2

url = 'http://donjon.bin.sh/5e/spells/rpc.cgi'
#urllib.request.urlopen("http://example.com/foo/bar").read()




for key in data:
	entry={}
	temp=data[key]
	print(key)
	entry["name"]=temp["name"]
	entry["level"]=temp["level"][0:1]
	if entry['level']=='C':
		entry['level']=0
	entry["school"]=temp["school"]
	entry['ritual']=btoi(temp["ritual"]=='yes')
	con=""
	if temp['concentration']=='yes':
		con="Concentration, "
	entry['duration']=con+temp['duration']
	entry['casting_time']=temp['casting_time']
	entry['range']=temp['range']
	entry['components']=temp['components']
	entry['classes']=[]
	for name in temp['class']:
		entry['classes'].append(name)
	values = {'name' : entry['name']}
	datar = urllib.urlencode(values)
	req = urllib2.Request(url, datar)
	response = urllib2.urlopen(req)
	the_page = response.read()
	json_page=json.loads(the_page)
	cardtext=json_page['card']
	entry['spelltext'] = cardtext[cardtext.find("<div class=\"description\">")+25:cardtext.find("</div class=\"description\">")]
	refined.append(entry)
pprint(refined)

'''

"name": "Acid Splash",
		"level": 0,
		"school": "Conjuration",
		"ritual": 0,
		"casting_time": "1 action",
		"range": "60 feet",
		"components": "V, S",
		"duration": "Instantaneous",
		"classes": [""],
		"spelltext": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are withing 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. [This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)]"

{
		"concentration":"no",
		"page":"phb 287",
		"range":"30 feet",
		"name":"Water Walk",
		"components":"VSM",
		"ritual":"yes",
		"duration":"1 hour",
		"casting_time":"1 action",
		"level":"3rd",
		"school":"Transmutation",
		"class":{"Cleric":"yes","Sorcerer":"yes","Ranger":"yes","Druid":"yes"}
	},



pprint(refined)'''
with open('testspell.json', 'w') as fp:
    json.dump(refined, fp)
