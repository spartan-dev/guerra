const mongoose  = require("mongoose");
const Schema  = mongoose.Schema;

const foodStandSchema = new Schema({
    name:           String,
    description:  String,
    imgPath: String,
    imgName: String,
    postedBy: {type: Schema.Types.ObjectId, ref: "User",},
    category:       [{
        type: String,
        enum : ['Tacos', 'Tortas', 'Hamburguesas', 'Hotdogs', 'Pizzas','Quesadillas','Pambazos','Chilakillers','Otro'],
        default : 'N/A'
    }],
    
    location:{ type:{ type:String, }, coordinates:[Number] },
    address:String,
    }
     ,{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

foodStandSchema.index({ location: '2dsphere' });

const FoodStand = mongoose.model("FoodStand", foodStandSchema);

module.exports = FoodStand;