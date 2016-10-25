from __future__ import print_function
import sys



infile=open(sys.argv[1], 'r')
sourcefile=sys.argv[2]=open(sys.argv[2], 'r')
outfile=sys.argv[3]=open(sys.argv[3], 'w+')


lookup={"BAR":"Bard", "SOR":"Sorcerer", "DRU":"Druid","WIZ":"Wizard","RAN":"Ranger","CLE":"Cleric","PAL":"Paladin","WAR":"Warlock"}

classDict={}

while True:
	line=sourcefile.readline()
	if line=="":
		break
	line=line.strip()
	name=line.rsplit("(")[0]
	classes=line.rsplit("(")[1][:-1]
	classDict[name]=classes

name=""
while True:
	line=infile.readline()
	if line=="":
		break
	if line[0:7]=="\t\"name\"":
		name=line.rsplit(":")[1][2:-3]
	if line[0:10]=="\t\"classes\"":
		string="\t\"classes\": ["
		classes=classDict[name].replace(" ","").rsplit(',')
		for c in classes:
			string+="\""+lookup[c]+"\","
		string=string[0:-1]
		string+="],"
		print(string,file=outfile, end="")
	else:
		print(line,file=outfile, end="")
