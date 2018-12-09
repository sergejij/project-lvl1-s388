install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint .

gcd:
	npx babel-node -- src/bin/brain-gcd.js

even:
	npx babel-node -- src/bin/brain-even.js

calc:
	npx babel-node -- src/bin/brain-calc.js

prog:
	npx babel-node -- src/bin/brain-progression.js

prime:
	npx babel-node -- src/bin/brain-prime.js
