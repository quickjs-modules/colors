MODULE_NAME=colors

test: test.js
	qjs $?

$(MODULE_NAME).tar: LICENSE README.md colors.js
	tar cf $@ $?

release: clean test | $(MODULE_NAME).tar
	qm-release -name $(MODULE_NAME) -tag $(TAG) -archive $|

clean:
	rm -f *.tar

.PHONY: clean release test
