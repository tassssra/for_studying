for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) {
        continue; // indexが偶数のときは処理をスキップ
    }

    console.log(index); // 奇数のみ出力される
}

console.log('ループ終了'); // ループが終わったら出力される