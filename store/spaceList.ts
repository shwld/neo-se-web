export interface Space {
}

export interface State {
  entities: {[id: string]: Space}
}

export const state = () => ({
  entities: {},
})

export const mutations = {
  set(state: State, entity) {
    state.entities[entity.id] = entity
  },
  merge(state: State, entities) {
    state.entities = Object.assign({}, state.entities, entities)
  },
}

export const actions = {
  load({commit}) {
    commit('merge', {
      0: {title: '鎌倉の古民家、駅徒歩15分でまるまる一軒家で過ごせます', description: '趣味で警官をしている人がサプライズで訪問してくれる特典つき！みんなも鎌倉の古民家で開発合宿しませんか？？ ミニストップまで徒歩１２分！ 包丁の切れ味はちょっと悪いけど最高のロケーションですよ。 物置に何か隠してあるけど見つかると事件になるので、絶対に見ないで下さい。wi-foも完備だよ！', image: 'https://spacenet.s3-ap-northeast-1.amazonaws.com/uploads/space/image/5/large_IMG_6787.JPG?X-Amz-Expires=600&X-Amz-Date=20180410T131228Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJITZ5RZJAWTK3RAA/20180410/ap-northeast-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=d11d927396e79dfb36ceef6cd85bd654cc840d7cc14e74045d71ceec20c002ad'},
      1: {title: '横浜駅徒歩5分!‼横浜ベイエリア!2LDKの広々メゾネット', description: 'オシャレな横浜駅周辺の中でも、最近アート作品が増えてますますカラフルなエリアにあります。 横浜駅から徒歩3分、阪東橋駅から徒歩10分のお出かけしやすいお部屋です。 メゾネットタイプでお部屋、キッチン、バスルームも広々!', image: 'https://spacenet.s3-ap-northeast-1.amazonaws.com/uploads/space/image/9/large_dc86fd87c58e5f8b2a9e2fd41d4f2790_s.jpg?X-Amz-Expires=600&X-Amz-Date=20180410T131053Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJITZ5RZJAWTK3RAA/20180410/ap-northeast-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=47586fb35e82a3b0a786d40106a610c0594d5b2d4691c23086df5157ef3294ac'},
      2: {title: 'お屋敷　プール付。１人用パーティスペースです。', description: '１人用パーティースペースです。', image: 'https://spacenet.s3-ap-northeast-1.amazonaws.com/uploads/space/image/40/large_007.jpg?X-Amz-Expires=600&X-Amz-Date=20180410T134127Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJITZ5RZJAWTK3RAA/20180410/ap-northeast-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=614734a4929685b50b690568c0f1b083decf72e91925edb2679e3e76ff1ec7f6'},
      3: {title: '青森県の観光ガイド 広大な土地付き', description: '青森県の広大な土地を利用できます。', image: 'https://spacenet.s3-ap-northeast-1.amazonaws.com/uploads/space/image/47/large_DSC_0460_1.JPG?X-Amz-Expires=600&X-Amz-Date=20180410T134010Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJITZ5RZJAWTK3RAA/20180410/ap-northeast-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=25c4089f97fcafdfc357a6e2f036e253bf579529a8b7c2c551a4448618f72019'},
    })
  },
}

export const getters = {
  items(state: State) {
    return Object.keys(state.entities).map(key => state.entities[key])
  }
}
