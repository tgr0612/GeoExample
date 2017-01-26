var Schema = {};

Schema.createSchema = function(mongoose){

  var CoffeeShopSchema = mongoose.Schema({
    name : {type:String, index: 'hashed', 'default': ''},
    address: {type :String, 'default': ''},
    tel : {type: String, 'default':''},
    geometry:{
      'type':{type: String, 'default':"Point"},
      coordinates: [{type: "Number"}]
    },
    created_at:{type:Date, index:{unique: false},
    'default': Date.now},
    updated_at:{type:Date, index:{unique:false},
    'default': Date.now}
  });
  //이렇게 만든 카페 스키마의 geometry 속성에 인덱스를 만들면 조회속도가 빨라진다.
  CoffeeShopSchema.index({geometry:'2dsphere'});
}
