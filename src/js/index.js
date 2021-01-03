//----------------------------------------------------------------------
//  mode
//----------------------------------------------------------------------
'use strict';

//----------------------------------------------------------------------
//  変数宣言
//----------------------------------------------------------------------

//----------------------------------------------------------------------
//  main
//----------------------------------------------------------------------
{
  const str = '関数が動作しました';

  console.log('JavaScriptが動きました');

  hoge(str);


}

//----------------------------------------------------------------------
//  イベントハンドラ
//----------------------------------------------------------------------
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('button').textContent = "イベントハンドラ発生"
});

//----------------------------------------------------------------------
//  関数
//----------------------------------------------------------------------
function hoge(str){
  console.log(str);
}

/************************************************************************/
/*  END OF FILE                                       									*/
/************************************************************************/