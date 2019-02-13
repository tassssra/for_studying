/**ランダムな数を使いたいとき
 * Math.random(); => 0以上1未満のランダムな少数
 * Math.floor(Math.random() * 100); => 0以上100未満のランダムな整数
 * 10 + Math.floor(Math.random() * 10); => 10以上20未満のランダムな整数
 */

// 長方形
const rectangle = document.querySelector('.rectangle');

// ボタンをクリックしたらonClickButton()を実行する
document.querySelector('.button').addEventListener('click', onClickButton);

// ボタンをクリックするたびに長方形のグラデーション色を変える
function onClickButton() {
    // 0~359の間のランダムな数を取得する
    const randomHue = Math.trunc(Math.random() * 360);
    // グラデーションの開始色と終了色を決定
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    // 長方形のグラデーションのための変数(--startと--end)を変更
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}