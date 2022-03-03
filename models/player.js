class Player{
    constructor(id, categoryId ,name, position , nation ,imageURL , team , age , additional_info, isRetired, isInjured ){
        this.id = id ;
        this.categoryId = categoryId;
        this.name = name;
        this.position = position;
        this.nation = nation;
        this.imageURL = imageURL;
        this.team = team;
        this.age = age;
        this.additional_info = additional_info;
        this.isRetired = isRetired;
        this.isInjured = isInjured;
    }
}

export default Player;