// continueを使えば、ネストが浅くなりコードの可読性が向上
function myFunction2(flgA2) {
    for (let index = 0; index < 10; index++) {
        if (flgA === false) {
            continue;
        }

        if (index % 2 !== 0) {
            continue;
        }

        console.log(index);
    }
}



// flgAがtrueで偶数のときのみログを出力。if文のネストが深くコードが煩雑になっている。
function myFunction(flgA) {
    for (let index = 0; index < 10; index++) {
        if (flgA === true) {
            if (index % 2 === 0) {
                console.log(index);
            }
        }
    }
}



// 0-9までの奇数を出力するコード
// for (let index = 0; index < 10; index++) {
//     if (index % 2 === 0) {
//         continue; // indexが偶数のときは処理をスキップ
//     }

//     console.log(index); // 奇数のみ出力される
// }

// console.log('ループ終了'); // ループが終わったら出力される