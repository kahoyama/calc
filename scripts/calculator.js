function Calculator(){
	if ( !(this instanceof Calculator)) {
		return new Calculator();
	}
	
	this.expression = '';
	
	this.getExpression = function() {
        return this.expression
	}
	
	this.append = function(ch) {

	    this.expression = this.expression + ch;
		
		
	
	}
	this.clearEntry = function() {
	
	    var hairetu = this.expression;
     
		
		this.expression = hairetu.substring(0, hairetu.length - 1);
	} 
}
