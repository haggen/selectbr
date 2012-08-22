all: selectbr.js
	@curl -s -d output_info=compiled_code --data-urlencode "js_code@selectbr.js" http://closure-compiler.appspot.com/compile > selectbr.min.js
