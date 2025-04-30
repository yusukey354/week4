console.log("🍽️ お客さんが注文しました");

// ラーメンを作る関数
function makeRamen() {
  return new Promise((resolve) => {
    console.log("👨‍🍳 シェフ：先にラーメンを作り始めます...");
    setTimeout(() => {
      console.log("✅ ラーメン完成！");
      resolve("ラーメン");
    }, 3000);
  });
}

// 餃子を作る関数
function makeGyoza() {
  return new Promise((resolve) => {
    console.log("👨‍🍳 シェフ：後に餃子を作り始めます...");
    setTimeout(() => {
      console.log("✅ 餃子完成！");
      resolve("餃子");
    }, 2000);
  });
}

// 並列で作って、終わったら配膳
async function serveCustomer() {
  await Promise.all([makeRamen(), makeGyoza()]);
  console.log(`🍱 シェフ：全てできたので配膳します！`);
}

console.log("🍽️ お客さんがラーメンと餃子を注文しました");
serveCustomer();
