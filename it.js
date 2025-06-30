// ・問題
// 関数calcXと関数calcYは、引数inDataを用いて計算を行い、その結果を戻り値とする。
// 関数calcXをcalcX(1)として呼び出すと、関数calcXの変数numの値が、1→3→7→13と変化し、戻り値は13となった。
// 関数calcYをcalc(1)として呼び出すと、関数calcYの変数numの値が、1→5→13→25と変化し、戻り値は25となった。
// プログラムの中のa、bに入れる軸の適切な組み合わせはどれか。

// [プログラム1]
// 〇整数型：calcX(整数型：inData)
// 整数型：num i
// num ← inData
// for (iを1から3まで1ずつ増やす)
// 	num→|a|
// endfor
// return num

// [プログラム2]
// 〇整数型：calcY(整数型：inData)
// 整数型：num i
// num ← inData
// for (|b|)
// 	num→|a|
// endfor
// return num

// 選択肢、ア～エの中から一つ選ぶ。
//        a               b
// ア　2xnum+i　iを1から7まで3ずつ増やす
// イ　2xnum+i　iを2から6まで2ずつ増やす
// ウ　num+2xi　iを1から7まで3ずつ増やす
// エ　num+2xi　iを2から6まで2ずつ増やす

// ---

// 〇が関数となり、整数型（int型）
// int型の変数numにinData（int型のデータ）が代入される
// 関数calcXの引数に整数型のinDataを指定。

// for文でループ処理を行い、条件はまず変数iに3を代入し、また、iが3以上の時、にiの数字が増加する
// その処理の中で整数型のnum変数に次の式を代入する「2 X 整数型の変数num + i」
// その後、整数型の変数numが戻り値として返される。

// 関数の実行時にcalcXの引数に1を指定。
// その状態で実行するとnumの値が順に1->3->7->13と変化して返された戻り値の値が13となる。

function calcX(inData) {
  let num = inData;
  // 可変性の変数iに1を代入、iが3以下の時、iを1ずつ増やす
  for (let i = 1; i <= 3; i++) {
    num = num + 2 * i; // ウ
  }
  return num;
}

function calcY(inData) {
  let num = inData;
  for (let i = 2; i <= 6; i += 2) {
    num = num + 2 * i;
  }
  return num;
}

// 動作確認
console.log(calcX(1)); // → 13
console.log(calcY(1)); // → 25
