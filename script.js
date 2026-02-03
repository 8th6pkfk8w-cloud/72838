document.addEventListener("DOMContentLoaded", function() {

  // 高知県中心座標
  const kochiLatLng = [33.5597, 133.5311];

  // 地図作成
  const map = L.map('map').setView(kochiLatLng, 10);

  // OpenStreetMap タイル（HTTPS）
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // カテゴリーごとのスポット
  const places = {
    tourism: [
      { name: "桂浜", lat: 33.5506, lng: 133.5321, info: "坂本龍馬像で有名な観光地" },
      { name: "高知城", lat: 33.5594, lng: 133.5371, info: "江戸時代の城" },
      { name: "四万十川", lat: 33.1000, lng: 132.9000, info: "日本最後の清流" }
    ],
    food: [
      { name: "ひろめ市場", lat: 33.5590, lng: 133.5385, info: "高知の郷土料理や屋台が集まる" },
      { name: "カツオのたたき店", lat: 33.5570, lng: 133.5350, info: "新鮮なカツオが食べられる" },
      { name: "日曜市", lat: 33.5610, lng: 133.5360, info: "地元の野菜やグルメが並ぶ" }
    ],
    events: [
      { name: "よさこい祭り", lat: 33.5595, lng: 133.5365, info: "高知最大の夏祭り" },
      { name: "高知龍馬マラソン", lat: 33.5597, lng: 133.5311, info: "毎年2月開催のマラソン大会" },
      { name: "土佐のおきゃく", lat: 33.5593, lng: 133.5355, info: "春に行われる飲食イベント" }
    ]
  };

  // 現在のマーカーを保持
  let currentMarkers = [];

  // マーカー表示関数
  function showPlaces(category) {
    // 古いマーカーを削除
    currentMarkers.forEach(marker => map.removeLayer(marker));
    currentMarkers = [];

    // 新しいマーカー追加
    places[category].forEach(place => {
      const marker = L.marker([place.lat, place.lng]).addTo(map);
      marker.bindPopup(`<b>${place.name}</b><br>${place.info}`);
      currentMarkers.push(marker);
    });
  }

  // ボタンにクリックイベント
  document.getElementById('tourism').addEventListener('click', () => showPlaces('tourism'));
  document.getElementById('food').addEventListener('click', () => showPlaces('food'));
  document.getElementById('events').addEventListener('click', () => showPlaces('events'));

});
