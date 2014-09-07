REPORTER = list
MOCHA_OPTS = --iu bdd -c

test:
	clear
	echo Starting test
#*****************************************************************
	./node_modules/mocha/bin/mocha --reporter $(REPORTER) $(MOCHA_OPTS) tests/*.js
	echo Ending test


.PHONY: test
