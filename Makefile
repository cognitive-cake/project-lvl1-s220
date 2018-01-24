install:
	npm install

start:
	npm run babel-node -- src/bin/brain-gdc.js

publish:
	npm publish

lint:
	npm run eslint src/**/*
