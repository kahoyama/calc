test('コンストラクタのテスト', function(){
							 
	var c = new Calculator();						 						 
	ok( c instanceof Calculator, 'new演算子をつけてコンストラクタを呼び出す。');
							 
});

test('getExpressionメソッドのテスト', function() {
	   //Calculatorオブジェクトを生成
	var c = new Calculator();
	
	//オブジェクトのgetExpresssionメソッドの結果が’’空文字
	//equal関数を使ってテストする。
	var result = c.getExpression();
	
	equal(result, '');
	
});


test('式に１文字追加するメソッド', function() {
							   
    var c = new Calculator();
	
	c.append(8);
	var result = c.getExpression();

	equal(result,'8');
							   
});

test('式の末尾の文字を削除するメソッド', function(){
    								  
	var c = new Calculator();
	
	c.append(100);
	
	c.clearEntry();
	var result = c.getExpression();
	
	equal(result, '10');								  
								  
});

test('式を初期化するメソッド', function(){
    
	var c = new Calculator();
	
	c.append(1000):    //登録
							 
							 
});






