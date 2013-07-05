PROJECT_NAME = backgrid-responsiveGrid
PROJECT_URL = http://github.com/morficus/backgrid-responsiveGrid
AUTHOR = Maurice Williams

SRC_DIR = src
TMP_DIR = tmp
DIST_DIR = dist

JS_FILE = $(PROJECT_NAME).js
CSS_FILE = $(PROJECT_NAME).css

JS_OUTFILE = $(PROJECT_NAME).min.js
CSS_OUTFILE = $(PROJECT_NAME).min.css




csslint:
	mkdir $(TMP_DIR)
	recess $(SRC_DIR)/$(CSS_FILE) --noIDS --noUniversalSelectors --compile > $(TMP_DIR)/$(CSS_FILE) && mv -f $(TMP_DIR)/$(CSS_FILE) ./$(SRC_DIR)/$(CSS_FILE)
	rm -rf $(TMP_DIR)

dist:
	rm -rf $(DIST_DIR)
	mkdir $(TMP_DIR)
	mkdir $(DIST_DIR)
	uglifyjs $(SRC_DIR)/$(JS_FILE) --compress --mangle --output $(DIST_DIR)/$(JS_OUTFILE)
	recess $(SRC_DIR)/$(CSS_FILE) --noIDS --noUniversalSelectors --compress > $(TMP_DIR)/$(CSS_OUTFILE) && mv -f $(TMP_DIR)/$(CSS_OUTFILE) $(DIST_DIR)/$(CSS_OUTFILE);
	rm -rf $(TMP_DIR)

clean:
	rm -rf $(DIST_DIR) $(TMP_DIR)
